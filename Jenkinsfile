pipeline{
    agent any
    stages{
        stage('Checkout'){
            steps{
                git branch : 'main',
                url : 'https://github.com/immackreya02/devops-sem-lab.git'
            }
        }
        stage('Install dependencies'){
            steps{
                bat 'npm insatll'
            }
        }
        stage('Run application'){
            steps{
                bat 'npm run build'
             }
        }
    }
}