pipeline {
  agent any

  environment {
    DOCKERIMAGE = "pipeline-hello-world"
    HOME = "."
  }

  stages {
    stage ('Build') {
      steps {
        script {
          docker.build(DOCKERIMAGE)
        }
      }
    }
    stage ('Test') {
      steps {
        script {
          docker.image(DOCKERIMAGE).inside {
            sh 'rm -rf node_modules/'
            sh 'npm install'
            sh 'npm test'
          }
        }
      }
    }
    stage ('Deploy') {
      steps {
        script {
          sh "docker build . -t ${env.DOCKERIMAGE}"
          sh "docker rm -f ${env.DOCKERIMAGE} || true"
          sh "docker run -d --name ${env.DOCKERIMAGE} -p 3000:3000 ${env.DOCKERIMAGE}"
        }
        }
        }
      }
    }
  }
}