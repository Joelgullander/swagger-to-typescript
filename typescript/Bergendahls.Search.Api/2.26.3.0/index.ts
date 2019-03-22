/// <reference path="../../typings/tsd.d.ts" />

import request, {
    SuperAgentStatic,
    SuperAgentRequest,
    Response
} from "superagent";

export type RequestHeaders = {
    [header: string]: string;
}
export type RequestHeadersHandler = (headers: RequestHeaders) => RequestHeaders;

export type ConfigureAgentHandler = (agent: SuperAgentStatic) => SuperAgentStatic;

export type ConfigureRequestHandler = (agent: SuperAgentRequest) => SuperAgentRequest;

export type CallbackHandler = (err: any, res ? : request.Response) => void;

export type CmsContent = {
    'visibleInMenu' ? : boolean;
    'headline' ? : string;
    'preamble' ? : string;
    'mainBody' ? : string;
    'blockContent' ? : string;
    'url' ? : string;
    'productTags' ? : ProductTags;
    'seo' ? : SeoTags;
    'bagId' ? : string;
    'sortIndex' ? : number;
    'id' ? : string;
    'name' ? : string;
};

export type ProductTags = {
    'raw' ? : string;
    'tags' ? : Array < string >
    ;
    'category' ? : Array < string >
    ;
    'superCategory' ? : Array < string >
    ;
    'bfCategory' ? : Array < string >
    ;
    'bfCategoryCode' ? : Array < string >
    ;
    'discountOnly' ? : boolean;
};

export type SeoTags = {
    'title' ? : string;
    'description' ? : string;
    'keywords' ? : Array < string >
    ;
};

export type QuickSearchResponse = {
    'data' ? : Array < {} >
    ;
    'meta' ? : MetaDataResponse;
};

export type MetaDataResponse = {
    'totalCount' ? : number;
    'filters' ? : {
        [key: string]: FilterGroup
    };
    'pageCount' ? : number;
    'pageIndex' ? : number;
    'pageSize' ? : number;
    'sort' ? : string;
    'order' ? : string;
};

export type FilterGroup = {
    'id' ? : string;
    'options' ? : Array < FilterOption >
    ;
};

export type FilterOption = {
    'id' ? : string;
    'selected' ? : boolean;
    'count' ? : number;
};

export type CmsContentResponse = {
    'data' ? : Array < CmsContent >
    ;
    'meta' ? : MetaDataResponse;
};

export type ProductResponse = {
    'data' ? : Array < Product >
    ;
    'meta' ? : MetaDataResponse;
};

export type Product = {
    'id': string;
    'gtin': string;
    'url' ? : string;
    'sellable': boolean;
    'prices' ? : Array < ProductPrice >
    ;
    'comparisonPriceFactors' ? : Array < ComparisonPriceFactor >
    ;
    'visible': boolean;
    'name' ? : string;
    'description' ? : string;
    'brand' ? : string;
    'superCategory' ? : string;
    'category' ? : string;
    'bfCategory' ? : string;
    'bfCategoryCode' ? : string;
    'country' ? : string;
    'originStatement' ? : string;
    'recyclingInformation' ? : string;
    'storageInformation' ? : string;
    'descriptiveSize' ? : string;
    'netContent' ? : ArticleMeasurement;
    'width' ? : ArticleMeasurement;
    'height' ? : ArticleMeasurement;
    'depth' ? : ArticleMeasurement;
    'markings' ? : Array < MarkingCode >
    ;
    'tags' ? : Array < ArticleTag >
    ;
    'images' ? : Array < Image >
    ;
    'searchKeywords' ? : string;
    'sellingUnitOfMeasure' ? : "Piece" | "Kilogram" | "SquareMetre" | "Litre" | "Metre" | "QubicMetre" | "NumberOfRolls";
    'handling' ? : ArticleHandling;
    'foodAndBeverageExtension' ? : FoodAndBeverageArticleExtension;
    'safetyDataSheetInformation' ? : SafetyDataSheetInformation;
    'consumerSalesCondition' ? : "BTC" | "OTC" | "PrescriptionRequired" | "RestrictedToSell15" | "RestrictedToSell16" | "RestrictedToSell18" | "RestrictedToSell20" | "RestrictedToSell21";
    'returnablePackageDepositInformation' ? : ReturnablePackageDepositInformation;
    'popularityIndex' ? : number;
    'newProductFrom' ? : string;
    'newProductTo' ? : string;
    'sellableFrom' ? : string;
    'availability' ? : Array < ProductAvailability >
    ;
};

export type ProductPrice = {
    'storeNumber' ? : number;
    'currentPrice' ? : PriceDetail;
    'ordinaryPrice' ? : PriceDetail;
    'memberPrice' ? : PriceDetail;
    'promotions' ? : Array < ProductPriceMixPromotion >
    ;
    'hasDiscount' ? : boolean;
};

export type ComparisonPriceFactor = {
    'factor': number;
    'unit': "Piece" | "Kilogram" | "SquareMetre" | "Litre" | "Metre" | "QubicMetre" | "NumberOfRolls";
    'contentType': "PerKilogram" | "PerLitre" | "PerPiece" | "PerMetre" | "PerLoad" | "PerWash" | "ReadyToDrink" | "ReadyToEat" | "DrainedWeight";
};

export type ArticleMeasurement = {
    'unitOfMeasure': "GRM" | "MLT" | "MMT" | "PCE" | "WASH" | "LOAD";
    'value': number;
};

export type MarkingCode = {
    'agency': string;
    'qualifier' ? : string;
    'codeListVersion' ? : string;
    'code' ? : string;
    'descriptions' ? : Array < LocalizedDescription >
    ;
};

export type ArticleTag = {
    'namespace': string;
    'name': string;
};

export type Image = {
    'url': string;
    'alt' ? : string;
    'type' ? : "FrontImage";
};

export type ArticleHandling = {
    'code' ? : string;
    'minimumLifespanFromTimeOfArrivalInDays' ? : number;
    'averageLifespanFromTimeOfArrivalInDays' ? : number;
};

export type FoodAndBeverageArticleExtension = {
    'allergenInformation' ? : FoodAndBeverageAllergenInformation;
    'ingredientStatement' ? : string;
    'nutrientInformations' ? : Array < FoodAndBeverageNutrientInformation >
    ;
    'preparationInformations' ? : Array < FoodAndBeveragePreparationInformation >
    ;
};

export type SafetyDataSheetInformation = {
    'hazardInformations' ? : Array < HazardInformation >
    ;
};

export type ReturnablePackageDepositInformation = {
    'identification': ArticleIdentification;
    'quantity': number;
    'description': string;
    'salesPrice': number;
    'purchasePrice': number;
    'taxPercent': number;
};

export type ProductAvailability = {
    'storeNumber' ? : number;
    'availableFrom' ? : string;
};

export type PriceDetail = {
    'price' ? : number;
    'comparisonPrice' ? : number;
    'comparisonType' ? : "PerKilogram" | "PerLitre" | "PerPiece" | "PerMetre" | "PerLoad" | "PerWash" | "ReadyToDrink" | "ReadyToEat" | "DrainedWeight";
};

export type ProductPriceMixPromotion = {
    'price' ? : PriceDetail;
    'promotionGroupId' ? : string;
    'name' ? : string;
    'amountLimitPerReceipt' ? : number;
    'effectAmount' ? : number;
    'effectType' ? : string;
    'mixType' ? : string;
    'numberOfItems' ? : number;
    'onlyForMembers' ? : boolean;
    'priceChannel' ? : string;
    'purchaseAmount' ? : number;
    'validFrom' ? : string;
    'validTo' ? : string;
};

export type LocalizedDescription = {
    'languageCode' ? : string;
    'value': string;
};

export type FoodAndBeverageAllergenInformation = {
    'allergenStatement' ? : string;
    'allergens' ? : Array < FoodAndBeverageAllergen >
    ;
};

export type FoodAndBeverageNutrientInformation = {
    'nutrientStatement' ? : string;
    'preparationState': "Unprepared" | "Prepared";
    'nutrients' ? : Array < FoodAndBeverageNutrient >
    ;
};

export type FoodAndBeveragePreparationInformation = {
    'preparationTypeCode' ? : "ReadyToEat" | "Baking" | "Boiling" | "Frying" | "Reconstituting" | "Barbecuing" | "Microwaving" | "Stewing";
    'preparationInstructions' ? : string;
};

export type HazardInformation = {
    'hazardCodes' ? : Array < MarkingCode >
    ;
};

export type ArticleIdentification = {
    'gtin' ? : string;
    'additionalArticleIdentifications' ? : Array < AdditionalArticleIdentification >
    ;
};

export type FoodAndBeverageAllergen = {
    'levelOfContainment': "Contains" | "MayContain";
    'typeCode': string;
};

export type FoodAndBeverageNutrient = {
    'measurementPrecision': "Approximately" | "LessThan";
    'typeCode': string;
    'unitOfMeasure': "GRM" | "MLT" | "MC" | "MGM" | "KJO" | "E14";
    'value': number;
};

export type AdditionalArticleIdentification = {
    'type': "BuyerAssigned" | "SupplierAssigned";
    'value': string;
};

export type RecipeResponse = {
    'data' ? : Array < Recipe >
    ;
    'meta' ? : MetaDataResponse;
};

export type Recipe = {
    'id': string;
    'name' ? : string;
    'sellable': boolean;
    'visible': boolean;
    'cookingTime' ? : number;
    'cookingInstructions' ? : string;
    'cookingAdviceAdult' ? : string;
    'cookingAdviceChild' ? : string;
    'source' ? : string;
    'url' ? : string;
    'ingredients' ? : Array < RecipeIngredient >
    ;
    'variants': Array < RecipeVariant >
    ;
    'images' ? : Array < Image >
    ;
    'tags' ? : Array < RecipeTag >
    ;
};

export type RecipeIngredient = {
    'quantity' ? : number;
    'unit' ? : string;
    'name' ? : string;
    'groupId' ? : string;
    'groupName' ? : string;
};

export type RecipeVariant = {
    'id': string;
    'recipeId': string;
    'organic': boolean;
    'vegetarian': boolean;
    'lactoseFree': boolean;
    'glutenFree': boolean;
    'prices': Array < RecipePrice >
    ;
    'homeList' ? : Array < string >
    ;
    'products' ? : Array < string >
    ;
};

export type RecipeTag = {
    'namespace': string;
    'name': string;
};

export type RecipePrice = {
    'storeNumber' ? : number;
    'price': number;
};

export type SingleVariantRecipe = {
    'id': string;
    'name' ? : string;
    'sellable': boolean;
    'visible': boolean;
    'cookingTime' ? : number;
    'cookingInstructions' ? : string;
    'cookingAdviceAdult' ? : string;
    'cookingAdviceChild' ? : string;
    'source' ? : string;
    'url' ? : string;
    'ingredients' ? : Array < RecipeIngredient >
    ;
    'variants': Array < RecipeVariant >
    ;
    'images' ? : Array < Image >
    ;
    'tags' ? : Array < RecipeTag >
    ;
};

export type BagResponse = {
    'data' ? : Array < Bag >
    ;
    'meta' ? : MetaDataResponse;
};

export type Bag = {
    'id': string;
    'name' ? : string;
    'visible': boolean;
    'description' ? : string;
    'images' ? : Array < Image >
    ;
    'variants' ? : Array < BagVariant >
    ;
    'isSubscribable': boolean;
};

export type BagVariant = {
    'id': string;
    'bfabid': string;
    'gtin': string;
    'bagId': string;
    'name': string;
    'visible': boolean;
    'meals': number;
    'portions': number;
    'pinDeliverName': string;
    'numberOfPackages': number;
    'approximateTotalWeight': number;
    'fromDate' ? : string;
    'toDate' ? : string;
    'prices' ? : Array < BagPrice >
    ;
    'externalIds' ? : Array < string >
    ;
};

export type BagPrice = {
    'storeNumber' ? : number;
    'currentPrice' ? : number;
    'ordinaryPrice' ? : number;
};

export type BagWithMeta = {
    'url' ? : string;
    'sortIndex' ? : number;
    'visibleInMenu' ? : boolean;
    'fromPrice' ? : number;
    'id': string;
    'name' ? : string;
    'visible': boolean;
    'description' ? : string;
    'images' ? : Array < Image >
    ;
    'variants' ? : Array < BagVariant >
    ;
    'isSubscribable': boolean;
};

export type BagVariantWeekResponse = {
    'data' ? : Array < BagVariantWeek >
    ;
    'meta' ? : MetaDataResponse;
};

export type BagVariantWeek = {
    'id': string;
    'bagVariantId': string;
    'year': number;
    'week': number;
    'recipeIds' ? : Array < string >
    ;
};

export type BagVariantWeekWithBagResponse = {
    'data' ? : Array < BagVariantWeekWithBag >
    ;
    'meta' ? : MetaDataResponse;
};

export type BagVariantWeekWithBag = {
    'bag' ? : Bag;
    'id': string;
    'bagVariantId': string;
    'year': number;
    'week': number;
    'recipeIds' ? : Array < string >
    ;
};

export type CityUrl = {
    'url' ? : string;
    'city' ? : string;
};

export type Logger = {
    log: (line: string) => any
};

export interface ResponseWithBody < T > extends Response {
    body: T;
}

export interface CommonRequestOptions {
    $queryParameters ? : {
        [param: string]: any
    };
    $domain ? : string;
    $path ? : string | ((path: string) => string);
}

/**
 * 
 * @class Search
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export class Search {

    private domain: string = "";
    private errorHandlers: CallbackHandler[] = [];
    private requestHeadersHandler ? : RequestHeadersHandler;
    private configureAgentHandler ? : ConfigureAgentHandler;
    private configureRequestHandler ? : ConfigureRequestHandler;

    constructor(domain ? : string, private logger ? : Logger) {
        if (domain) {
            this.domain = domain;
        }
    }

    getDomain() {
        return this.domain;
    }

    addErrorHandler(handler: CallbackHandler) {
        this.errorHandlers.push(handler);
    }

    setRequestHeadersHandler(handler: RequestHeadersHandler) {
        this.requestHeadersHandler = handler;
    }

    setConfigureAgentHandler(handler: ConfigureAgentHandler) {
        this.configureAgentHandler = handler;
    }

    setConfigureRequestHandler(handler: ConfigureRequestHandler) {
        this.configureRequestHandler = handler;
    }

    private request(method: string, url: string, body: any, headers: RequestHeaders, queryParameters: any, form: any, reject: CallbackHandler, resolve: CallbackHandler) {
        if (this.logger) {
            this.logger.log(`Call ${method} ${url}`);
        }

        const agent = this.configureAgentHandler ?
            this.configureAgentHandler(request) :
            request;

        let req = agent(method, url);
        if (this.configureRequestHandler) {
            req = this.configureRequestHandler(req);
        }

        req = req.query(queryParameters);

        if (body) {
            req.send(body);

            if (typeof(body) === 'object' && !(body.constructor.name === 'Buffer')) {
                headers['Content-Type'] = 'application/json';
            }
        }

        if (Object.keys(form).length > 0) {
            req.type('form');
            req.send(form);
        }

        if (this.requestHeadersHandler) {
            headers = this.requestHeadersHandler({
                ...headers
            });
        }

        Object.keys(headers).forEach(key => {
            req.set(key, headers[key]);
        });

        req.end((error, response) => {
            if (error || !response.ok) {
                reject(error);
                this.errorHandlers.forEach(handler => handler(error));
            } else {
                resolve(response);
            }
        });
    }

    ApiV1CacheCacheDropcontentcacheDeleteURL(parameters: {} & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Cache/cache/dropcontentcache';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Removes all content from cache
     * @method
     * @name Search#ApiV1CacheCacheDropcontentcacheDelete
     */
    ApiV1CacheCacheDropcontentcacheDelete(parameters: {
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < object >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Cache/cache/dropcontentcache';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1CacheCacheRemovecontentDeleteURL(parameters: {
        'contentid' ? : string,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Cache/cache/removecontent';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['contentid'] !== undefined) {
            queryParameters['contentid'] = parameters['contentid'];
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Removes the content with contentid from cahe
     * @method
     * @name Search#ApiV1CacheCacheRemovecontentDelete
     * @param {string} contentid - The conentid to remove from cache
     */
    ApiV1CacheCacheRemovecontentDelete(parameters: {
        'contentid' ? : string,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < object >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Cache/cache/removecontent';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters['contentid'] !== undefined) {
                queryParameters['contentid'] = parameters['contentid'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1HealthCheckGetURL(parameters: {} & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/HealthCheck';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Used for polling the service for current status
     * @method
     * @name Search#ApiV1HealthCheckGet
     */
    ApiV1HealthCheckGet(parameters: {
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < object >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/HealthCheck';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1IndexCmsClearPutURL(parameters: {} & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Index/cms/clear';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Deletes cms content index
     * @method
     * @name Search#ApiV1IndexCmsClearPut
     */
    ApiV1IndexCmsClearPut(parameters: {
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < object >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Index/cms/clear';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1IndexCmsReindexPutURL(parameters: {
        'request' ? : Array < CmsContent >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Index/cms/reindex';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Deletes, recreates and reindexes the cms content index.
     * @method
     * @name Search#ApiV1IndexCmsReindexPut
     * @param {} request - 
     */
    ApiV1IndexCmsReindexPut(parameters: {
        'request' ? : Array < CmsContent >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < object >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Index/cms/reindex';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1IndexCmsPostURL(parameters: {
        'request' ? : Array < CmsContent >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Index/cms';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Adds or updates cms content in index
     * @method
     * @name Search#ApiV1IndexCmsPost
     * @param {} request - 
     */
    ApiV1IndexCmsPost(parameters: {
        'request' ? : Array < CmsContent >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < object >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Index/cms';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1IndexCmsDeletePutURL(parameters: {
        'request' ? : Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Index/cms/delete';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Deletes cms content from index
     * @method
     * @name Search#ApiV1IndexCmsDeletePut
     * @param {} request - 
     */
    ApiV1IndexCmsDeletePut(parameters: {
        'request' ? : Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < object >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Index/cms/delete';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['request'] !== undefined) {
                body = parameters['request'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchGetURL(parameters: {
        'q' ? : string,
        'page' ? : number,
        'size' ? : number,
        'store' ? : string,
        'f' ? : {},
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['q'] !== undefined) {
            queryParameters['Q'] = parameters['q'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['Page'] = parameters['page'];
        }

        if (parameters['size'] !== undefined) {
            queryParameters['Size'] = parameters['size'];
        }

        if (parameters['store'] !== undefined) {
            queryParameters['Store'] = parameters['store'];
        }

        if (parameters['f'] !== undefined) {
            queryParameters['F'] = parameters['f'];
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Search#ApiV1SearchGet
     * @param {string} q - 
     * @param {integer} page - 
     * @param {integer} size - 
     * @param {string} store - 
     * @param {object} f - 
     */
    ApiV1SearchGet(parameters: {
        'q' ? : string,
        'page' ? : number,
        'size' ? : number,
        'store' ? : string,
        'f' ? : {},
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < QuickSearchResponse >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            if (parameters['q'] !== undefined) {
                queryParameters['Q'] = parameters['q'];
            }

            if (parameters['page'] !== undefined) {
                queryParameters['Page'] = parameters['page'];
            }

            if (parameters['size'] !== undefined) {
                queryParameters['Size'] = parameters['size'];
            }

            if (parameters['store'] !== undefined) {
                queryParameters['Store'] = parameters['store'];
            }

            if (parameters['f'] !== undefined) {
                queryParameters['F'] = parameters['f'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchCmscontentGetURL(parameters: {
        'sort' ? : string,
        'order' ? : "Asc" | "Des",
        'categoryId' ? : string,
        'tagsRaw' ? : string,
        'tagsTags' ? : Array < string >
            ,
        'tagsCategory' ? : Array < string >
            ,
        'tagsSuperCategory' ? : Array < string >
            ,
        'tagsBfCategory' ? : Array < string >
            ,
        'tagsBfCategoryCode' ? : Array < string >
            ,
        'tagsDiscountOnly' ? : boolean,
        'q' ? : string,
        'page' ? : number,
        'size' ? : number,
        'store' ? : string,
        'f' ? : {},
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/cmscontent';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['sort'] !== undefined) {
            queryParameters['Sort'] = parameters['sort'];
        }

        if (parameters['order'] !== undefined) {
            queryParameters['Order'] = parameters['order'];
        }

        if (parameters['categoryId'] !== undefined) {
            queryParameters['CategoryId'] = parameters['categoryId'];
        }

        if (parameters['tagsRaw'] !== undefined) {
            queryParameters['Tags.Raw'] = parameters['tagsRaw'];
        }

        if (parameters['tagsTags'] !== undefined) {
            queryParameters['Tags.Tags'] = parameters['tagsTags'];
        }

        if (parameters['tagsCategory'] !== undefined) {
            queryParameters['Tags.Category'] = parameters['tagsCategory'];
        }

        if (parameters['tagsSuperCategory'] !== undefined) {
            queryParameters['Tags.SuperCategory'] = parameters['tagsSuperCategory'];
        }

        if (parameters['tagsBfCategory'] !== undefined) {
            queryParameters['Tags.BfCategory'] = parameters['tagsBfCategory'];
        }

        if (parameters['tagsBfCategoryCode'] !== undefined) {
            queryParameters['Tags.BfCategoryCode'] = parameters['tagsBfCategoryCode'];
        }

        if (parameters['tagsDiscountOnly'] !== undefined) {
            queryParameters['Tags.DiscountOnly'] = parameters['tagsDiscountOnly'];
        }

        if (parameters['q'] !== undefined) {
            queryParameters['Q'] = parameters['q'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['Page'] = parameters['page'];
        }

        if (parameters['size'] !== undefined) {
            queryParameters['Size'] = parameters['size'];
        }

        if (parameters['store'] !== undefined) {
            queryParameters['Store'] = parameters['store'];
        }

        if (parameters['f'] !== undefined) {
            queryParameters['F'] = parameters['f'];
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Search#ApiV1SearchCmscontentGet
     * @param {string} sort - 
     * @param {string} order - 
     * @param {string} categoryId - 
     * @param {string} tagsRaw - 
     * @param {array} tagsTags - 
     * @param {array} tagsCategory - 
     * @param {array} tagsSuperCategory - 
     * @param {array} tagsBfCategory - 
     * @param {array} tagsBfCategoryCode - 
     * @param {boolean} tagsDiscountOnly - 
     * @param {string} q - 
     * @param {integer} page - 
     * @param {integer} size - 
     * @param {string} store - 
     * @param {object} f - 
     */
    ApiV1SearchCmscontentGet(parameters: {
        'sort' ? : string,
        'order' ? : "Asc" | "Des",
        'categoryId' ? : string,
        'tagsRaw' ? : string,
        'tagsTags' ? : Array < string >
            ,
        'tagsCategory' ? : Array < string >
            ,
        'tagsSuperCategory' ? : Array < string >
            ,
        'tagsBfCategory' ? : Array < string >
            ,
        'tagsBfCategoryCode' ? : Array < string >
            ,
        'tagsDiscountOnly' ? : boolean,
        'q' ? : string,
        'page' ? : number,
        'size' ? : number,
        'store' ? : string,
        'f' ? : {},
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < CmsContentResponse >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/cmscontent';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            if (parameters['sort'] !== undefined) {
                queryParameters['Sort'] = parameters['sort'];
            }

            if (parameters['order'] !== undefined) {
                queryParameters['Order'] = parameters['order'];
            }

            if (parameters['categoryId'] !== undefined) {
                queryParameters['CategoryId'] = parameters['categoryId'];
            }

            if (parameters['tagsRaw'] !== undefined) {
                queryParameters['Tags.Raw'] = parameters['tagsRaw'];
            }

            if (parameters['tagsTags'] !== undefined) {
                queryParameters['Tags.Tags'] = parameters['tagsTags'];
            }

            if (parameters['tagsCategory'] !== undefined) {
                queryParameters['Tags.Category'] = parameters['tagsCategory'];
            }

            if (parameters['tagsSuperCategory'] !== undefined) {
                queryParameters['Tags.SuperCategory'] = parameters['tagsSuperCategory'];
            }

            if (parameters['tagsBfCategory'] !== undefined) {
                queryParameters['Tags.BfCategory'] = parameters['tagsBfCategory'];
            }

            if (parameters['tagsBfCategoryCode'] !== undefined) {
                queryParameters['Tags.BfCategoryCode'] = parameters['tagsBfCategoryCode'];
            }

            if (parameters['tagsDiscountOnly'] !== undefined) {
                queryParameters['Tags.DiscountOnly'] = parameters['tagsDiscountOnly'];
            }

            if (parameters['q'] !== undefined) {
                queryParameters['Q'] = parameters['q'];
            }

            if (parameters['page'] !== undefined) {
                queryParameters['Page'] = parameters['page'];
            }

            if (parameters['size'] !== undefined) {
                queryParameters['Size'] = parameters['size'];
            }

            if (parameters['store'] !== undefined) {
                queryParameters['Store'] = parameters['store'];
            }

            if (parameters['f'] !== undefined) {
                queryParameters['F'] = parameters['f'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchEntityByIdGetURL(parameters: {
        'id': string,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/entity/{id}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{id}', `${parameters['id']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get xim entity by id
     * @method
     * @name Search#ApiV1SearchEntityByIdGet
     * @param {string} id - 
     */
    ApiV1SearchEntityByIdGet(parameters: {
        'id': string,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < object >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/entity/{id}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            path = path.replace('{id}', `${parameters['id']}`);

            if (parameters['id'] === undefined) {
                reject(new Error('Missing required  parameter: id'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchEntitiesByIdsGetURL(parameters: {
        'ids': Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/entities/{ids}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{ids}', `${parameters['ids']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get multiple xim entities with their ids
     * @method
     * @name Search#ApiV1SearchEntitiesByIdsGet
     * @param {array} ids - 
     */
    ApiV1SearchEntitiesByIdsGet(parameters: {
        'ids': Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < object >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/entities/{ids}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = '';

            path = path.replace('{ids}', `${parameters['ids']}`);

            if (parameters['ids'] === undefined) {
                reject(new Error('Missing required  parameter: ids'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchEntities_variantPostURL(parameters: {
        'ids' ? : Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/entities_variant';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get multiple xim entities with their ids or with their variant ids, used by order history
     * @method
     * @name Search#ApiV1SearchEntities_variantPost
     * @param {} ids - 
     */
    ApiV1SearchEntities_variantPost(parameters: {
        'ids' ? : Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < object >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/entities_variant';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['ids'] !== undefined) {
                body = parameters['ids'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchEntitiesPostURL(parameters: {
        'ids' ? : Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/entities';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get multiple xim entities with their ids
     * @method
     * @name Search#ApiV1SearchEntitiesPost
     * @param {} ids - 
     */
    ApiV1SearchEntitiesPost(parameters: {
        'ids' ? : Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < object >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/entities';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = '';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['ids'] !== undefined) {
                body = parameters['ids'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchProductGetURL(parameters: {
        'sort' ? : string,
        'order' ? : "Asc" | "Des",
        'categoryId' ? : string,
        'tagsRaw' ? : string,
        'tagsTags' ? : Array < string >
            ,
        'tagsCategory' ? : Array < string >
            ,
        'tagsSuperCategory' ? : Array < string >
            ,
        'tagsBfCategory' ? : Array < string >
            ,
        'tagsBfCategoryCode' ? : Array < string >
            ,
        'tagsDiscountOnly' ? : boolean,
        'q' ? : string,
        'page' ? : number,
        'size' ? : number,
        'store' ? : string,
        'f' ? : {},
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/product';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['sort'] !== undefined) {
            queryParameters['Sort'] = parameters['sort'];
        }

        if (parameters['order'] !== undefined) {
            queryParameters['Order'] = parameters['order'];
        }

        if (parameters['categoryId'] !== undefined) {
            queryParameters['CategoryId'] = parameters['categoryId'];
        }

        if (parameters['tagsRaw'] !== undefined) {
            queryParameters['Tags.Raw'] = parameters['tagsRaw'];
        }

        if (parameters['tagsTags'] !== undefined) {
            queryParameters['Tags.Tags'] = parameters['tagsTags'];
        }

        if (parameters['tagsCategory'] !== undefined) {
            queryParameters['Tags.Category'] = parameters['tagsCategory'];
        }

        if (parameters['tagsSuperCategory'] !== undefined) {
            queryParameters['Tags.SuperCategory'] = parameters['tagsSuperCategory'];
        }

        if (parameters['tagsBfCategory'] !== undefined) {
            queryParameters['Tags.BfCategory'] = parameters['tagsBfCategory'];
        }

        if (parameters['tagsBfCategoryCode'] !== undefined) {
            queryParameters['Tags.BfCategoryCode'] = parameters['tagsBfCategoryCode'];
        }

        if (parameters['tagsDiscountOnly'] !== undefined) {
            queryParameters['Tags.DiscountOnly'] = parameters['tagsDiscountOnly'];
        }

        if (parameters['q'] !== undefined) {
            queryParameters['Q'] = parameters['q'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['Page'] = parameters['page'];
        }

        if (parameters['size'] !== undefined) {
            queryParameters['Size'] = parameters['size'];
        }

        if (parameters['store'] !== undefined) {
            queryParameters['Store'] = parameters['store'];
        }

        if (parameters['f'] !== undefined) {
            queryParameters['F'] = parameters['f'];
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
    * The categories are stamped with tags, these tags are read by the categoryservice or used int he request as filters to retrieve the products
    The F(as in filter) property of the SearchRequest object is a dictionary of selected filter values. To set these
    using query string parameter use .../?f.{filterid}={optionid} for example:
    .../?f.brand=FAVORIT
    * @method
    * @name Search#ApiV1SearchProductGet
         * @param {string} sort - 
         * @param {string} order - 
         * @param {string} categoryId - 
         * @param {string} tagsRaw - 
         * @param {array} tagsTags - 
         * @param {array} tagsCategory - 
         * @param {array} tagsSuperCategory - 
         * @param {array} tagsBfCategory - 
         * @param {array} tagsBfCategoryCode - 
         * @param {boolean} tagsDiscountOnly - 
         * @param {string} q - 
         * @param {integer} page - 
         * @param {integer} size - 
         * @param {string} store - 
         * @param {object} f - 
    */
    ApiV1SearchProductGet(parameters: {
        'sort' ? : string,
        'order' ? : "Asc" | "Des",
        'categoryId' ? : string,
        'tagsRaw' ? : string,
        'tagsTags' ? : Array < string >
            ,
        'tagsCategory' ? : Array < string >
            ,
        'tagsSuperCategory' ? : Array < string >
            ,
        'tagsBfCategory' ? : Array < string >
            ,
        'tagsBfCategoryCode' ? : Array < string >
            ,
        'tagsDiscountOnly' ? : boolean,
        'q' ? : string,
        'page' ? : number,
        'size' ? : number,
        'store' ? : string,
        'f' ? : {},
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < ProductResponse >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/product';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            if (parameters['sort'] !== undefined) {
                queryParameters['Sort'] = parameters['sort'];
            }

            if (parameters['order'] !== undefined) {
                queryParameters['Order'] = parameters['order'];
            }

            if (parameters['categoryId'] !== undefined) {
                queryParameters['CategoryId'] = parameters['categoryId'];
            }

            if (parameters['tagsRaw'] !== undefined) {
                queryParameters['Tags.Raw'] = parameters['tagsRaw'];
            }

            if (parameters['tagsTags'] !== undefined) {
                queryParameters['Tags.Tags'] = parameters['tagsTags'];
            }

            if (parameters['tagsCategory'] !== undefined) {
                queryParameters['Tags.Category'] = parameters['tagsCategory'];
            }

            if (parameters['tagsSuperCategory'] !== undefined) {
                queryParameters['Tags.SuperCategory'] = parameters['tagsSuperCategory'];
            }

            if (parameters['tagsBfCategory'] !== undefined) {
                queryParameters['Tags.BfCategory'] = parameters['tagsBfCategory'];
            }

            if (parameters['tagsBfCategoryCode'] !== undefined) {
                queryParameters['Tags.BfCategoryCode'] = parameters['tagsBfCategoryCode'];
            }

            if (parameters['tagsDiscountOnly'] !== undefined) {
                queryParameters['Tags.DiscountOnly'] = parameters['tagsDiscountOnly'];
            }

            if (parameters['q'] !== undefined) {
                queryParameters['Q'] = parameters['q'];
            }

            if (parameters['page'] !== undefined) {
                queryParameters['Page'] = parameters['page'];
            }

            if (parameters['size'] !== undefined) {
                queryParameters['Size'] = parameters['size'];
            }

            if (parameters['store'] !== undefined) {
                queryParameters['Store'] = parameters['store'];
            }

            if (parameters['f'] !== undefined) {
                queryParameters['F'] = parameters['f'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchProductPostURL(parameters: {
        'ids' ? : Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/product';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Products by id
     * @method
     * @name Search#ApiV1SearchProductPost
     * @param {} ids - The id's of the products to get
     */
    ApiV1SearchProductPost(parameters: {
        'ids' ? : Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < Product >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/product';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['ids'] !== undefined) {
                body = parameters['ids'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchProductByIdsGetURL(parameters: {
        'ids': Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/product/{ids}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{ids}', `${parameters['ids']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get products by Id
     * @method
     * @name Search#ApiV1SearchProductByIdsGet
     * @param {array} ids - The id's of the products to get
     */
    ApiV1SearchProductByIdsGet(parameters: {
        'ids': Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < Product >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/product/{ids}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            path = path.replace('{ids}', `${parameters['ids']}`);

            if (parameters['ids'] === undefined) {
                reject(new Error('Missing required  parameter: ids'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchRecipeGetURL(parameters: {
        'sort' ? : string,
        'order' ? : "Asc" | "Des",
        'categoryId' ? : string,
        'tagsRaw' ? : string,
        'tagsTags' ? : Array < string >
            ,
        'tagsCategory' ? : Array < string >
            ,
        'tagsSuperCategory' ? : Array < string >
            ,
        'tagsBfCategory' ? : Array < string >
            ,
        'tagsBfCategoryCode' ? : Array < string >
            ,
        'tagsDiscountOnly' ? : boolean,
        'q' ? : string,
        'page' ? : number,
        'size' ? : number,
        'store' ? : string,
        'f' ? : {},
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/recipe';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['sort'] !== undefined) {
            queryParameters['Sort'] = parameters['sort'];
        }

        if (parameters['order'] !== undefined) {
            queryParameters['Order'] = parameters['order'];
        }

        if (parameters['categoryId'] !== undefined) {
            queryParameters['CategoryId'] = parameters['categoryId'];
        }

        if (parameters['tagsRaw'] !== undefined) {
            queryParameters['Tags.Raw'] = parameters['tagsRaw'];
        }

        if (parameters['tagsTags'] !== undefined) {
            queryParameters['Tags.Tags'] = parameters['tagsTags'];
        }

        if (parameters['tagsCategory'] !== undefined) {
            queryParameters['Tags.Category'] = parameters['tagsCategory'];
        }

        if (parameters['tagsSuperCategory'] !== undefined) {
            queryParameters['Tags.SuperCategory'] = parameters['tagsSuperCategory'];
        }

        if (parameters['tagsBfCategory'] !== undefined) {
            queryParameters['Tags.BfCategory'] = parameters['tagsBfCategory'];
        }

        if (parameters['tagsBfCategoryCode'] !== undefined) {
            queryParameters['Tags.BfCategoryCode'] = parameters['tagsBfCategoryCode'];
        }

        if (parameters['tagsDiscountOnly'] !== undefined) {
            queryParameters['Tags.DiscountOnly'] = parameters['tagsDiscountOnly'];
        }

        if (parameters['q'] !== undefined) {
            queryParameters['Q'] = parameters['q'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['Page'] = parameters['page'];
        }

        if (parameters['size'] !== undefined) {
            queryParameters['Size'] = parameters['size'];
        }

        if (parameters['store'] !== undefined) {
            queryParameters['Store'] = parameters['store'];
        }

        if (parameters['f'] !== undefined) {
            queryParameters['F'] = parameters['f'];
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Shows how to get values from options, DI etc.
     * @method
     * @name Search#ApiV1SearchRecipeGet
     * @param {string} sort - 
     * @param {string} order - 
     * @param {string} categoryId - 
     * @param {string} tagsRaw - 
     * @param {array} tagsTags - 
     * @param {array} tagsCategory - 
     * @param {array} tagsSuperCategory - 
     * @param {array} tagsBfCategory - 
     * @param {array} tagsBfCategoryCode - 
     * @param {boolean} tagsDiscountOnly - 
     * @param {string} q - 
     * @param {integer} page - 
     * @param {integer} size - 
     * @param {string} store - 
     * @param {object} f - 
     */
    ApiV1SearchRecipeGet(parameters: {
        'sort' ? : string,
        'order' ? : "Asc" | "Des",
        'categoryId' ? : string,
        'tagsRaw' ? : string,
        'tagsTags' ? : Array < string >
            ,
        'tagsCategory' ? : Array < string >
            ,
        'tagsSuperCategory' ? : Array < string >
            ,
        'tagsBfCategory' ? : Array < string >
            ,
        'tagsBfCategoryCode' ? : Array < string >
            ,
        'tagsDiscountOnly' ? : boolean,
        'q' ? : string,
        'page' ? : number,
        'size' ? : number,
        'store' ? : string,
        'f' ? : {},
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < RecipeResponse >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/recipe';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            if (parameters['sort'] !== undefined) {
                queryParameters['Sort'] = parameters['sort'];
            }

            if (parameters['order'] !== undefined) {
                queryParameters['Order'] = parameters['order'];
            }

            if (parameters['categoryId'] !== undefined) {
                queryParameters['CategoryId'] = parameters['categoryId'];
            }

            if (parameters['tagsRaw'] !== undefined) {
                queryParameters['Tags.Raw'] = parameters['tagsRaw'];
            }

            if (parameters['tagsTags'] !== undefined) {
                queryParameters['Tags.Tags'] = parameters['tagsTags'];
            }

            if (parameters['tagsCategory'] !== undefined) {
                queryParameters['Tags.Category'] = parameters['tagsCategory'];
            }

            if (parameters['tagsSuperCategory'] !== undefined) {
                queryParameters['Tags.SuperCategory'] = parameters['tagsSuperCategory'];
            }

            if (parameters['tagsBfCategory'] !== undefined) {
                queryParameters['Tags.BfCategory'] = parameters['tagsBfCategory'];
            }

            if (parameters['tagsBfCategoryCode'] !== undefined) {
                queryParameters['Tags.BfCategoryCode'] = parameters['tagsBfCategoryCode'];
            }

            if (parameters['tagsDiscountOnly'] !== undefined) {
                queryParameters['Tags.DiscountOnly'] = parameters['tagsDiscountOnly'];
            }

            if (parameters['q'] !== undefined) {
                queryParameters['Q'] = parameters['q'];
            }

            if (parameters['page'] !== undefined) {
                queryParameters['Page'] = parameters['page'];
            }

            if (parameters['size'] !== undefined) {
                queryParameters['Size'] = parameters['size'];
            }

            if (parameters['store'] !== undefined) {
                queryParameters['Store'] = parameters['store'];
            }

            if (parameters['f'] !== undefined) {
                queryParameters['F'] = parameters['f'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchRecipePostURL(parameters: {
        'ids' ? : Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/recipe';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Recipes by Id
     * @method
     * @name Search#ApiV1SearchRecipePost
     * @param {} ids - The id's of the recipes to get
     */
    ApiV1SearchRecipePost(parameters: {
        'ids' ? : Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < Recipe >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/recipe';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['ids'] !== undefined) {
                body = parameters['ids'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchRecipeByIdsGetURL(parameters: {
        'ids': Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/recipe/{ids}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{ids}', `${parameters['ids']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get recipes by Id
     * @method
     * @name Search#ApiV1SearchRecipeByIdsGet
     * @param {array} ids - The id's of the recipes to get
     */
    ApiV1SearchRecipeByIdsGet(parameters: {
        'ids': Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < Recipe >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/recipe/{ids}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            path = path.replace('{ids}', `${parameters['ids']}`);

            if (parameters['ids'] === undefined) {
                reject(new Error('Missing required  parameter: ids'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchRecipebyvariantPostURL(parameters: {
        'ids' ? : Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/recipebyvariant';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Recipes by variant ids
     * @method
     * @name Search#ApiV1SearchRecipebyvariantPost
     * @param {} ids - The variant ids to use
     */
    ApiV1SearchRecipebyvariantPost(parameters: {
        'ids' ? : Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < SingleVariantRecipe >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/recipebyvariant';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['ids'] !== undefined) {
                body = parameters['ids'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchRecipebyvariantByIdsGetURL(parameters: {
        'ids': Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/recipebyvariant/{ids}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{ids}', `${parameters['ids']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get recipes by variant ids
     * @method
     * @name Search#ApiV1SearchRecipebyvariantByIdsGet
     * @param {array} ids - The variant ids to use
     */
    ApiV1SearchRecipebyvariantByIdsGet(parameters: {
        'ids': Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < SingleVariantRecipe >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/recipebyvariant/{ids}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            path = path.replace('{ids}', `${parameters['ids']}`);

            if (parameters['ids'] === undefined) {
                reject(new Error('Missing required  parameter: ids'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchBagGetURL(parameters: {
        'sort' ? : string,
        'order' ? : "Asc" | "Des",
        'categoryId' ? : string,
        'tagsRaw' ? : string,
        'tagsTags' ? : Array < string >
            ,
        'tagsCategory' ? : Array < string >
            ,
        'tagsSuperCategory' ? : Array < string >
            ,
        'tagsBfCategory' ? : Array < string >
            ,
        'tagsBfCategoryCode' ? : Array < string >
            ,
        'tagsDiscountOnly' ? : boolean,
        'q' ? : string,
        'page' ? : number,
        'size' ? : number,
        'store' ? : string,
        'f' ? : {},
        'onlyVisibleBags' ? : boolean,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bag';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['sort'] !== undefined) {
            queryParameters['Sort'] = parameters['sort'];
        }

        if (parameters['order'] !== undefined) {
            queryParameters['Order'] = parameters['order'];
        }

        if (parameters['categoryId'] !== undefined) {
            queryParameters['CategoryId'] = parameters['categoryId'];
        }

        if (parameters['tagsRaw'] !== undefined) {
            queryParameters['Tags.Raw'] = parameters['tagsRaw'];
        }

        if (parameters['tagsTags'] !== undefined) {
            queryParameters['Tags.Tags'] = parameters['tagsTags'];
        }

        if (parameters['tagsCategory'] !== undefined) {
            queryParameters['Tags.Category'] = parameters['tagsCategory'];
        }

        if (parameters['tagsSuperCategory'] !== undefined) {
            queryParameters['Tags.SuperCategory'] = parameters['tagsSuperCategory'];
        }

        if (parameters['tagsBfCategory'] !== undefined) {
            queryParameters['Tags.BfCategory'] = parameters['tagsBfCategory'];
        }

        if (parameters['tagsBfCategoryCode'] !== undefined) {
            queryParameters['Tags.BfCategoryCode'] = parameters['tagsBfCategoryCode'];
        }

        if (parameters['tagsDiscountOnly'] !== undefined) {
            queryParameters['Tags.DiscountOnly'] = parameters['tagsDiscountOnly'];
        }

        if (parameters['q'] !== undefined) {
            queryParameters['Q'] = parameters['q'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['Page'] = parameters['page'];
        }

        if (parameters['size'] !== undefined) {
            queryParameters['Size'] = parameters['size'];
        }

        if (parameters['store'] !== undefined) {
            queryParameters['Store'] = parameters['store'];
        }

        if (parameters['f'] !== undefined) {
            queryParameters['F'] = parameters['f'];
        }

        if (parameters['onlyVisibleBags'] !== undefined) {
            queryParameters['onlyVisibleBags'] = parameters['onlyVisibleBags'];
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Shows how to get values from options, DI etc.
     * @method
     * @name Search#ApiV1SearchBagGet
     * @param {string} sort - 
     * @param {string} order - 
     * @param {string} categoryId - 
     * @param {string} tagsRaw - 
     * @param {array} tagsTags - 
     * @param {array} tagsCategory - 
     * @param {array} tagsSuperCategory - 
     * @param {array} tagsBfCategory - 
     * @param {array} tagsBfCategoryCode - 
     * @param {boolean} tagsDiscountOnly - 
     * @param {string} q - 
     * @param {integer} page - 
     * @param {integer} size - 
     * @param {string} store - 
     * @param {object} f - 
     * @param {boolean} onlyVisibleBags - 
     */
    ApiV1SearchBagGet(parameters: {
        'sort' ? : string,
        'order' ? : "Asc" | "Des",
        'categoryId' ? : string,
        'tagsRaw' ? : string,
        'tagsTags' ? : Array < string >
            ,
        'tagsCategory' ? : Array < string >
            ,
        'tagsSuperCategory' ? : Array < string >
            ,
        'tagsBfCategory' ? : Array < string >
            ,
        'tagsBfCategoryCode' ? : Array < string >
            ,
        'tagsDiscountOnly' ? : boolean,
        'q' ? : string,
        'page' ? : number,
        'size' ? : number,
        'store' ? : string,
        'f' ? : {},
        'onlyVisibleBags' ? : boolean,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < BagResponse >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bag';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            if (parameters['sort'] !== undefined) {
                queryParameters['Sort'] = parameters['sort'];
            }

            if (parameters['order'] !== undefined) {
                queryParameters['Order'] = parameters['order'];
            }

            if (parameters['categoryId'] !== undefined) {
                queryParameters['CategoryId'] = parameters['categoryId'];
            }

            if (parameters['tagsRaw'] !== undefined) {
                queryParameters['Tags.Raw'] = parameters['tagsRaw'];
            }

            if (parameters['tagsTags'] !== undefined) {
                queryParameters['Tags.Tags'] = parameters['tagsTags'];
            }

            if (parameters['tagsCategory'] !== undefined) {
                queryParameters['Tags.Category'] = parameters['tagsCategory'];
            }

            if (parameters['tagsSuperCategory'] !== undefined) {
                queryParameters['Tags.SuperCategory'] = parameters['tagsSuperCategory'];
            }

            if (parameters['tagsBfCategory'] !== undefined) {
                queryParameters['Tags.BfCategory'] = parameters['tagsBfCategory'];
            }

            if (parameters['tagsBfCategoryCode'] !== undefined) {
                queryParameters['Tags.BfCategoryCode'] = parameters['tagsBfCategoryCode'];
            }

            if (parameters['tagsDiscountOnly'] !== undefined) {
                queryParameters['Tags.DiscountOnly'] = parameters['tagsDiscountOnly'];
            }

            if (parameters['q'] !== undefined) {
                queryParameters['Q'] = parameters['q'];
            }

            if (parameters['page'] !== undefined) {
                queryParameters['Page'] = parameters['page'];
            }

            if (parameters['size'] !== undefined) {
                queryParameters['Size'] = parameters['size'];
            }

            if (parameters['store'] !== undefined) {
                queryParameters['Store'] = parameters['store'];
            }

            if (parameters['f'] !== undefined) {
                queryParameters['F'] = parameters['f'];
            }

            if (parameters['onlyVisibleBags'] !== undefined) {
                queryParameters['onlyVisibleBags'] = parameters['onlyVisibleBags'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchBagPostURL(parameters: {
        'ids' ? : Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bag';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        queryParameters = {};

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Bags by Id
     * @method
     * @name Search#ApiV1SearchBagPost
     * @param {} ids - The id's of the bags to get
     */
    ApiV1SearchBagPost(parameters: {
        'ids' ? : Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < BagWithMeta >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bag';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'application/json-patch+json';

            if (parameters['ids'] !== undefined) {
                body = parameters['ids'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchBagByIdsGetURL(parameters: {
        'ids': Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bag/{ids}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{ids}', `${parameters['ids']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get bags by Id
     * @method
     * @name Search#ApiV1SearchBagByIdsGet
     * @param {array} ids - 
     */
    ApiV1SearchBagByIdsGet(parameters: {
        'ids': Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < BagWithMeta >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bag/{ids}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            path = path.replace('{ids}', `${parameters['ids']}`);

            if (parameters['ids'] === undefined) {
                reject(new Error('Missing required  parameter: ids'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchBagbyvariantGetURL(parameters: {
        'variantIds' ? : Array < string >
            ,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bagbyvariant';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['variantIds'] !== undefined) {
            queryParameters['variantIds'] = parameters['variantIds'];
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * 
     * @method
     * @name Search#ApiV1SearchBagbyvariantGet
     * @param {array} variantIds - 
     */
    ApiV1SearchBagbyvariantGet(parameters: {
        'variantIds' ? : Array < string >
            ,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < BagWithMeta >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bagbyvariant';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            if (parameters['variantIds'] !== undefined) {
                queryParameters['variantIds'] = parameters['variantIds'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchBagvariantweekGetURL(parameters: {
        'bagId' ? : string,
        'year' ? : string,
        'week' ? : string,
        'addBagMeta' ? : boolean,
        'bagVariantWeekId' ? : string,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bagvariantweek';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['bagId'] !== undefined) {
            queryParameters['BagId'] = parameters['bagId'];
        }

        if (parameters['year'] !== undefined) {
            queryParameters['Year'] = parameters['year'];
        }

        if (parameters['week'] !== undefined) {
            queryParameters['Week'] = parameters['week'];
        }

        if (parameters['addBagMeta'] !== undefined) {
            queryParameters['AddBagMeta'] = parameters['addBagMeta'];
        }

        if (parameters['bagVariantWeekId'] !== undefined) {
            queryParameters['BagVariantWeekId'] = parameters['bagVariantWeekId'];
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get recipes for a bag variant using year, week and bag variant id
     * @method
     * @name Search#ApiV1SearchBagvariantweekGet
     * @param {string} bagId - 
     * @param {string} year - 
     * @param {string} week - 
     * @param {boolean} addBagMeta - 
     * @param {string} bagVariantWeekId - 
     */
    ApiV1SearchBagvariantweekGet(parameters: {
        'bagId' ? : string,
        'year' ? : string,
        'week' ? : string,
        'addBagMeta' ? : boolean,
        'bagVariantWeekId' ? : string,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < BagVariantWeekResponse >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bagvariantweek';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            if (parameters['bagId'] !== undefined) {
                queryParameters['BagId'] = parameters['bagId'];
            }

            if (parameters['year'] !== undefined) {
                queryParameters['Year'] = parameters['year'];
            }

            if (parameters['week'] !== undefined) {
                queryParameters['Week'] = parameters['week'];
            }

            if (parameters['addBagMeta'] !== undefined) {
                queryParameters['AddBagMeta'] = parameters['addBagMeta'];
            }

            if (parameters['bagVariantWeekId'] !== undefined) {
                queryParameters['BagVariantWeekId'] = parameters['bagVariantWeekId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchBagvariantweekwithbagGetURL(parameters: {
        'bagId' ? : string,
        'year' ? : string,
        'week' ? : string,
        'addBagMeta' ? : boolean,
        'bagVariantWeekId' ? : string,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bagvariantweekwithbag';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters['bagId'] !== undefined) {
            queryParameters['BagId'] = parameters['bagId'];
        }

        if (parameters['year'] !== undefined) {
            queryParameters['Year'] = parameters['year'];
        }

        if (parameters['week'] !== undefined) {
            queryParameters['Week'] = parameters['week'];
        }

        if (parameters['addBagMeta'] !== undefined) {
            queryParameters['AddBagMeta'] = parameters['addBagMeta'];
        }

        if (parameters['bagVariantWeekId'] !== undefined) {
            queryParameters['BagVariantWeekId'] = parameters['bagVariantWeekId'];
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Bet bag variant week including parent bag
     * @method
     * @name Search#ApiV1SearchBagvariantweekwithbagGet
     * @param {string} bagId - 
     * @param {string} year - 
     * @param {string} week - 
     * @param {boolean} addBagMeta - 
     * @param {string} bagVariantWeekId - 
     */
    ApiV1SearchBagvariantweekwithbagGet(parameters: {
        'bagId' ? : string,
        'year' ? : string,
        'week' ? : string,
        'addBagMeta' ? : boolean,
        'bagVariantWeekId' ? : string,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < BagVariantWeekWithBagResponse >> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/bagvariantweekwithbag';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            if (parameters['bagId'] !== undefined) {
                queryParameters['BagId'] = parameters['bagId'];
            }

            if (parameters['year'] !== undefined) {
                queryParameters['Year'] = parameters['year'];
            }

            if (parameters['week'] !== undefined) {
                queryParameters['Week'] = parameters['week'];
            }

            if (parameters['addBagMeta'] !== undefined) {
                queryParameters['AddBagMeta'] = parameters['addBagMeta'];
            }

            if (parameters['bagVariantWeekId'] !== undefined) {
                queryParameters['BagVariantWeekId'] = parameters['bagVariantWeekId'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchDistrictsCitiesGetURL(parameters: {} & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/districts/cities';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get all districts with url
     * @method
     * @name Search#ApiV1SearchDistrictsCitiesGet
     */
    ApiV1SearchDistrictsCitiesGet(parameters: {
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < CityUrl >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/districts/cities';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

    ApiV1SearchDistrictsCitiesByUrlGetURL(parameters: {
        'url': string,
    } & CommonRequestOptions): string {
        let queryParameters: any = {};
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/districts/cities/{url}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        path = path.replace('{url}', `${parameters['url']}`);

        if (parameters.$queryParameters !== undefined && parameters.$queryParameters !== null) {
            queryParameters = {
                ...queryParameters,
                ...parameters.$queryParameters
            }
        }

        let keys = Object.keys(queryParameters);
        return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '');
    }

    /**
     * Get city zip codes by url
     * @method
     * @name Search#ApiV1SearchDistrictsCitiesByUrlGet
     * @param {string} url - 
     */
    ApiV1SearchDistrictsCitiesByUrlGet(parameters: {
        'url': string,
        $queryParameters ? : any,
        $domain ? : string,
        $path ? : string | ((path: string) => string)
    }): Promise < ResponseWithBody < Array < string >>> {
        const domain = parameters.$domain ? parameters.$domain : this.domain;
        let path = '/api/v1/Search/districts/cities/{url}';
        if (parameters.$path) {
            path = (typeof(parameters.$path) === 'function') ? parameters.$path(path) : parameters.$path;
        }

        let body: any;
        let queryParameters: any = {};
        let headers: any = {};
        let form: any = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = '';

            path = path.replace('{url}', `${parameters['url']}`);

            if (parameters['url'] === undefined) {
                reject(new Error('Missing required  parameter: url'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }

}

export default Search;