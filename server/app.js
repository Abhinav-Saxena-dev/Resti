const express = require('express');

const app = express();

const dotenv = require('dotenv')

const jwt = require('jsonwebtoken');
const { json } = require('express');

dotenv.config({path : './config.env'})

const PORT = process.env.PORT

const posts = [
    {
        name : "kuye",
        title : "post 1",
    },
    {
        name : "kpoe",
        title : "post 2",
    },
]

app.use(express.json());

let refreshTokens = []

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) 
        return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err)
            return res.sendStatus(403)
        req.user = user
        next()
    }) 
}

const getAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '30s'})
}

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if(refreshToken == null){
        return res.sendStatus(401);
    }
    if(!refreshTokens.includes(refreshToken)){
        return res.sendStatus(403)
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err){
            return res.sendStatus(403)
        }
        const accessToken = getAccessToken({name : user.name})
        res.json({accessToken})
    })
})

app.get('/', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.name === req.user.name))
})

app.post('/signup', (req, res) => {

})

app.post('/login', (req, res) => {
    const {name, password} = req.body

    const user = {name, password}

    const accessToken = getAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    
    refreshTokens.push(refreshToken)

    res.json({accessToken : accessToken, refreshToken : refreshToken})
})

const expressServer = app.listen(PORT, () => {
    console.log("Server running on port : " + PORT);
})