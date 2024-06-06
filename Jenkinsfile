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
          docker.image(DOCKERIMAGE).inside {
            sh 'docker build . -t pipeline-hello-world'
            sh 'docker rm -f pipeline-hello-world || true'
            sh 'docker run -d --name pipeline-hello-world -p 3000:3000 pipeline-hello-world'
          }
        }
      }
    }
  }
}