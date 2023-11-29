const { 
    isUserRegisteredBody,
    registerPersonalDataBody,
    postSendEmailBody,
    postRegisterDialogue
} = require('./utils');

/**
 * verificate if the user is registered
 * 
 * @author Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @param {*} req 
 * @param {*} res 
 */
const isUserRegistered = async (req, res) =>
{
    try {
        const dataSend = await isUserRegisteredBody(req.body);
        res.json({
            message: 'User registered',
            data: dataSend,
            isLogged: dataSend.length > 0
        });
    } catch (error) {
        res.status(400).json({ 
            message: 'Error to register account',
            data: [],
            isLogged: false
        });
        //throw new Error('Fallo algo al verificar en la logica de isUserRegisteredBody' + error);
        console.log('Fallo algo al verificar en la logica de isUserRegisteredBody' + error);
    }
};

/**
 * Insert the personal data of the user
 * 
 * @author Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @param {*} req 
 * @param {*} res 
 */
const registerPersonalData = async (req, res) => 
{
    try {
        res.json({ 
            message: 'Account registered',
            register: await registerPersonalDataBody(req.body)
        });
    } catch (error) {
        res.status(400).json({ 
            message: 'Error to register account',
            register: false
        });
        //throw new Error('Fallo algo al verificar en la logica de registerPersonalDataBody' + error);
        console.log('Fallo algo al verificar en la logica de registerPersonalDataBody' + error);
    }
}

/**
 * Insert the personal data of the user
 * 
 * @author Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @param {*} req 
 * @param {*} res 
 */
const postSendEmail = async (req, res) =>
{
    try {
        const dataSend = await postSendEmailBody(req);
        res.json({ 
            message: 'Email sended',
            isSend: dataSend.isSend,
            code: dataSend.code
        });
    } catch (error) {
        res.status(400).json({ 
            message: 'Error to register account',
            isSend: false,
            code: ''
        });
        //throw new Error('Fallo algo al verificar en la logica de postSendEmailBody' + error);
        console.log('Fallo algo al verificar en la logica de postSendEmailBody' + error);
    }
}

/**
 * Insert the personal data of dialogue
 * 
 * @author Cristian Machado <cristian.machado@correounivalle.edu.co>
 * @param {*} req 
 * @param {*} res 
 */
const postDialogueNew = async (req, res) =>
{
    try {
        res.json({ 
            message: 'Dialogue registered',
            isDialogue:  await postRegisterDialogue(req)
        });
    } catch (error) {
        res.status(400).json({ 
            message: 'Error to register dialogue',
            isDialogue: false
        });
        //throw new Error('Fallo algo al verificar en la logica de postSendEmailBody' + error);
        console.log('Fallo algo al verificar en la logica de postRegisterDialogue' + error);
    }
}

module.exports = {
    isUserRegistered,
    registerPersonalData,
    postSendEmail,
    postDialogueNew
};