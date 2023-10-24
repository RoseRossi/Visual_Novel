const { Router, application } = require('express');
const { 
    isUserRegistered,
    registerPersonalData
} = require('../control/control');

const router = Router();

router.post('/isUserRegistered', isUserRegistered);
router.post('/registerUser', registerPersonalData);

// Export the router
module.exports = router;