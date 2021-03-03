const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(espress.json());

app.use(express.static('public'));

require('./develop/routes/apiRoutes')(app);
require('./develop/routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`Listening on PORT: ${PORT}`)
});