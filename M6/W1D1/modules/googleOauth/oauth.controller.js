const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const { user } = req
        const redirectUrl = `${process.env.FE_URL}/success?user=${encodeURIComponent(JSON.stringify(user))}`
        res.redirect(redirectUrl)
    } catch (error) {
        next(error)
    }
}

const manageOauthCallback = async (req, res, next) => {
    try {
        const { user } = req
        const payload = {
            id: user.id,
            name: user.givenName,
            surname: user.familyName,
            avatar: user.avatar_url,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET)
        const redirectUrl = `${process.env.FE_URL}/success?token=${encodeURIComponent(token)}`

        res.redirect(redirectUrl)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    auth,
    manageOauthCallback,
}