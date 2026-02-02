pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                script {
            if (params.TEST_SUITE == 'smoke') {
                sh 'npx playwright test --grep @smoke'
            } else if (params.TEST_SUITE == 'regression') {
                sh 'npx playwright test --grep @regression'
            } else {
                sh 'npx playwright test'
            }
        }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
        stage('Publish Report') {
            steps {
                publishHTML([
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Test Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: false
                ])
            }
        }

    }
}
