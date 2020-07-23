module.exports = {
    serverPort: process.env.API_PORT || '3000',
    databaseUrl: process.env.DB_URL ||  'mongodb://localhost:27017/map-app'    
}