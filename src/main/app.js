import app from './server/serverExpress.js';


const PORT = 3333

app.listen(PORT, () => {
    console.log('app is running!');
})