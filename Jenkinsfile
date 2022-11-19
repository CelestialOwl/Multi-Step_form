pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/CelestialOwl/Multi-Step_form', branch: 'master')
      }
    }

    stage('change dir') {
      parallel {
        stage('change dir') {
          steps {
            dir(path: 'src') {
              sh 'ls -a'
            }

          }
        }

        stage('run build') {
          steps {
            sh 'npm run build'
          }
        }

      }
    }

  }
}