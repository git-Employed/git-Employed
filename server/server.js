const path = require("path");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const { userInfo } = require("os");

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Configure github passport strategy
passport.use(
  new GitHubStrategy(
    {
      // Note: add the client secret and client id to .env file
      clientID: "685f0e0a21587f473ca1",
      clientSecret: "facb1fb26ecd809696b690502f1894765cae8fa0",
      callbackURL: "http://10.0.0.59:8080/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ githubId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client")));
app.use(passport.initialize());
// app.use(passport.session());

// endpoint for github oauth request
app.get(
  "/auth/github", (res, req, next) => {
    console.log('ENTERING AUTHENTICATION')
    next();
  },
  passport.authenticate('github', { scope: ['read:user'] }),
  // According to example linked from passport docs, this will never be called
  (res, req) => {
    console.log('EXITING AUTHENTICATION')
  }
);

//endpoint that github sends a successful auth back to
app.get(
  "/auth/github/callback",
  (res, req, next) => {
    console.log('ENTERING CALLBACK');
    next();
  },
  passport.authenticate('github', { failureRedirect: "/auth/github/error" }),
  (req, res) => {
    // If the redirect was successful, redirect to homepage
    res.redirect("/");
  }
);

app.use('/auth/github/error', (req, res) => {
  res.send('Sending to this error endpoint')
});


// catch-all route handler for any requests to an unknown route
app.use("*", (req, res) => {
  res.sendStatus(404);
});

/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);

  res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});
