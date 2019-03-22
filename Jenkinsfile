pipeline {
  environment {
    name = 'swagger-typescript-converter'
    gitopsPath = './tmp/gitops-cd'
    dockerImageName = 'swagger-typescript-converter'
    dockerRegistryUrl = 'https://pntregistry.azurecr.io/'
    dockerRegistryCredentials = 'pntregistry2'
    dockerImage = ''
    GIT_COMMIT_SHORT = "${sh(returnStdout: true, script: 'git rev-parse --short HEAD')}"
  }
  agent {
    label 'docker && linux'
  }
  stages {
    stage('Build') {
      environment {
        DOCKER_TAGS = "latest,${GIT_COMMIT_SHORT},${ParseGitTag("${BRANCH_NAME}")}"
      }

      steps {
        script {
          dockerImage = docker.build(dockerImageName)
        }

        script {
          docker.withRegistry(dockerRegistryUrl, dockerRegistryCredentials) {
            def dockerTags = DOCKER_TAGS.split(',')
            for (int i = 0; i < dockerTags.size(); i++) {
              dockerImage.push(dockerTags[i])
            }
          }
        }
      }
    }

    // stage('Deploy unloaded') {
    //    when { branch 'develop' }
    //    environment {
    //      BGD_ENV = 'unloaded'
    //      DEPLOY_TAG = "${GIT_COMMIT_SHORT}"
    //      GIT_DEPLOY_MSG = "${name}@${GIT_COMMIT_SHORT}"
    //    }
    //    steps {
    //      CloneCD(gitopsPath, BGD_ENV)
    //      GenDeploy(BGD_ENV, "${gitopsPath}/${name}")
    //      CommitCD(gitopsPath, BGD_ENV, GIT_DEPLOY_MSG)
    //    }
    // }

    stage('Deploy preloaded') {
      when { branch 'master' }
      environment {
        BGD_ENV = 'preloaded'
        DEPLOY_TAG = "${GIT_COMMIT_SHORT}"
        GIT_DEPLOY_MSG = "${name}@${GIT_COMMIT_SHORT}"
      }
      steps {
        CloneCD(gitopsPath, BGD_ENV)
        GenDeploy(BGD_ENV, "${gitopsPath}/${name}")
        CommitCD(gitopsPath, BGD_ENV, GIT_DEPLOY_MSG)
      }
    }

    stage('Deploy reloaded') {
      when { tag pattern: "\\d+.\\d+.\\d+(-.+)?", comparator: "REGEXP" }
      environment {
        BGD_ENV = 'reloaded'
        DEPLOY_TAG = "${BRANCH_NAME}"
        GIT_DEPLOY_MSG = "${name}@${GIT_COMMIT_SHORT}"
      }
      steps {
          echo '========================= DEPLOY PRODUCTION!!!!! ========================='
      }
    }
  }
}

def GenDeploy(bgdEnv, dest) {
  deployFiles = [
      "deployment"
    ]
    .collect { "./deploy/${it}.yaml" }
    .join(' ');
  sh "rm -rf ${dest} && mkdir -p ${dest}"
  sh "for f in ${deployFiles}; do cat \$f | envsubst '\${DEPLOY_TAG}' > ${dest}/\$(basename \$f); done"
}

def ParseGitTag(tagString) {
  def sedPattern = /^\(\(\([0-9]\+\)\.[0-9]\+\)\.[0-9]\+\)\(-[a-zA-Z0-9]\+\)\?$/
  def replacePattern = /\1\4,\2\4,\3\4/
  tagsString = sh([returnStdout: true,
    script: "echo '${tagString}' | sed -e 's%/%-%g'| sed -e 's/${sedPattern}/${replacePattern}/'"
  ])
  return tagsString
}

def CloneCD(path, branch) {
  dir (path) {
    git url: 'https://github.com/bergendahlsfood/bergendahls-gitops-cd.git', credentialsId: 'bgd-github', branch: branch
  }
}

def CommitCD(path, branch, cimsg) {
  gitlogFirst = sh(returnStdout: true, script: 'git log -n1 --pretty=\'format:%s\'').trim()
  gitlogRest = sh(returnStdout: true, script: 'git log --pretty=\'format:%s\' ${GIT_PREVIOUS_SUCCESSFUL_COMMIT:-HEAD^}..HEAD^').trim()
  gitMsg = "${cimsg}\n\n${gitlogFirst}\n${gitlogRest}"
  authorName = 'Jenkins CI'
  authorEmail = 'ci@jenkins'
  author = "${authorName} <${authorEmail}>"
  dir (path) {
    sh "git add . && GIT_COMMITTER_NAME='${authorName}' GIT_COMMITTER_EMAIL='${authorEmail}' git commit --author='${author}' -m '${gitMsg}' || :"
    withCredentials([usernameColonPassword(credentialsId: 'bgd-github', variable: 'GIT_CRED')]) {
      sh "git push https://${GIT_CRED}@github.com/bergendahlsfood/bergendahls-gitops-cd.git ${branch}"
    }
  }
}
