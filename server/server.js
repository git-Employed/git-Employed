const path = require("path");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const passport = require("passport");
const { userInfo } = require("os");

// Configure github passport strategy
passport.use(
  new GitHubStrategy(
    {
      // Note: add the client secret and client id to .env file
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost8080/homepage",
    },
    (accessToken, refreshToken, profile, done) => {
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


// endpoint for github oauth request
app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

//endpoint that github sends a successful auth back to 
app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    // If the redirect was successful, redirect to homepage
    res.redirect("/homepage")
  }
);

// catch-all route handler for any requests to an unknown route
app.use('*',(req, res)=>{
  res.sendStatus(404);
});

/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
app.use((err,req,res,next)=> {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' } 
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);

  res.status(errorObj.status).json(errorObj.message);

});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});
