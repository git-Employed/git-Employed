const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const passport = require('passport');

// Configure github passport strategy
passport.use( new GitHubStrategy ({
  clientID: '685f0e0a21587f473ca1',
  clientSecret: '546bd6ecdc0902be03cb6b3d57f282e3ca2ceb19'
})

)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client')));


app.get('/auth/github',
  passport.authenticate
)


app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});
