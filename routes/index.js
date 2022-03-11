// this file allows import of user-routes.js to server.js
// this will run those routes we set(POST, UPDATE, CREATE, DELETE)
const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;