const jwt = require("jsonwebtoken");
const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("../models/User");

//setup password-jwt
const setupJWT = () => {let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thisKeyIsSupposedToBeSecret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    const user = User.findOne({_id: jwt_payload.identifier})
    .then((user)=>{
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    })
    .catch((err)=> { return done(err,false) });
}));
};

const getToken = async (email,user) => {
    const token = jwt.sign(
        {identifier: user._id},
        "thisKeyIsSupposedToBeSecret"
    );
    return token;
};

module.exports = {
    setupJWT,
    getToken
}