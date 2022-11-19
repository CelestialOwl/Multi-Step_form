pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/CelestialOwl/Multi-Step_form', branch: 'master')
      }
    }

    stage('logs') {
      parallel {
        stage('logs') {
          steps {
            sh 'ls -la'
          }
        }

        stage('change dir') {
          steps {
            dir(path: 'src') {
              sh 'ls -a'
            }

          }
        }

      }
    }

  }
}