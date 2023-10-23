const { Router, application } = require('express');
const { 
    isUserRegistered
} = require('../control/control');

const router = Router();

router.get('/', isUserRegistered);

// Export the router
module.exports = router;