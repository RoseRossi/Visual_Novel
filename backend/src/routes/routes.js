const { Router, application } = require('express');
const { 
    isUserRegistered,
    registerPersonalData
} = require('../control/control');

const router = Router();

router.post('/backend/isUserRegistered', isUserRegistered);
router.post('/backend/registerUser', registerPersonalData);
router.get('/', (req, res) => {
    res.send('This is the backend of the app');
});
router.get('/backend', (req, res) => {
    res.send('This is the backend of the app');
});

// Export the router
module.exports = router;