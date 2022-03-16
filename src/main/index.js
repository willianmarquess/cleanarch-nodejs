import app from './server/server-express.js'

const PORT = 3333

app.listen(PORT, () => {
    console.log('app is running!');
})