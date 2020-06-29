import jwt from 'jsonwebtoken';
const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        
     }, process.env.TOKEN_SECRET || 'secret', {
        expiresIn: '1h'
    })
}

export {
    getToken
}