FROM node:10-alpine as deps

ENV NODE_ENV=development

RUN apk update && apk upgrade && \
    apk add --no-cache bash \
    git
WORKDIR /app
COPY . .
RUN npm set progress=false  \
    && npm config set depth 0 \
    && git config --global url."https://".insteadOf git:// \
    && npm install --only=production \
    && cp -R node_modules/ ./prod_node_modules \
    && npm install

FROM deps as test

RUN rm -r ./prod_node_modules

FROM node:10-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache tzdata

ENV PORT=3000
ENV NODE_ENV=production

WORKDIR /root/
COPY --from=deps /app .
COPY --from=deps /app/prod_node_modules ./node_modules

EXPOSE 3000
CMD ["node", "index.js"]
