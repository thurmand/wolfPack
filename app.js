const next = require('next')
const path = require('path')

const dir = resolve(__dirname, './src/')
const app = next({dev:'local', dir})

const handle = app.getRequestHandler()

app.prepare().then(()=>{
    
})