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
    stage ('Clean containers') {
      steps {
        sh 'docker stop $(docker ps -a -q)'
      }

    }
    stage ('Deploy') {
      steps {
        script {
          docker.image(DOCKERIMAGE).run('-d -p 3001:3000')
        }
      }
    }
  }
}