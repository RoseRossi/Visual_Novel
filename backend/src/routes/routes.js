const { Router, application } = require('express');
const { 
    isUserRegistered,
    registerPersonalData,
    postSendEmail,
    postDialogueNew,
    postProgressUserData,
    putProgressData
} = require('../control/control');

const router = Router();

// Post routes
router.post('/backend/isUserRegistered', isUserRegistered);
router.post('/backend/registerUser', registerPersonalData);
router.post('/backend/sendEmail', postSendEmail);
router.post('/backend/registerDialogue', postDialogueNew);
router.post('/backend/progressUserData', postProgressUserData);

// Put routes
router.put('/backend/updateProgress', putProgressData);

// Get routes
router.get('/', (req, res) => {
    res.send('This is the backend of the app');
});
router.get('/backend', (req, res) => {
    res.send('This is the backend of the app');
});

// Export the router
module.exports = router;