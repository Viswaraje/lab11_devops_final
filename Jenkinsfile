pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Viswaraje/lab11_devops_final.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.build("viswaraje/viswaraje/nodejs-api:latest")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials-id') {
                        docker.image("viswaraje/viswaraje/nodejs-api:latest").push()
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Ensure container is removed if it exists
                    sh 'docker rm -f nodejs-api || true'
                    // Run Docker in detached mode without `nohup`
                    sh 'docker run -d --name nodejs-api -p 3001:3000 viswaraje/viswaraje/nodejs-api:latest'
                }
            }
        }
    }
}
