const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const initGooglePassport = () => {
  // serialize e unserialize dello user
  passport.serializeUser((user, done) => done(null, user)) // decide cosa salvare in sessione quando effettui il login
  passport.deserializeUser((user, done) => done(null, user)) //decide come ricostruire req.user nelle richieste successive

  // strategia di accesso
  passport.use(
    new GoogleStrategy({
      clientID: process.env.GO_CLIENT_ID,
      clientSecret: process.env.GO_CLIENT_SECRET,
      callbackURL: process.env.GO_CB_URL
    }, (accessToken, refreshToken, profile, done) => {
      // accessToken = token OAUTH, utilizzabile per chiamare API DI GITHUB per conto dell'utente
      // refreshToken = non sempre disponibile, si usa per refreshare un token scaduto
      // profile = oggetto con tutte le informazioni che ci ha ritornato il provider scelto (in questo caso GITHUB)
      // done = dice a passport di aver finito, e passa l'utente come argomento

      console.log('USER PROFILE', profile)
      // qui è il punto adatto per chiamare un servizio che salva l'utente a db, (es. user service)

      return done(null, profile)
    })
  )
}

module.exports = {
  initGooglePassport
}