const Account = require('../schemas/account/accountSchema');
const PersonalData = require('../schemas/account/personalData');
const DialogueSchema = require('../schemas/dialogue/dialogueSchema');
const { getAccount } = require('../repository/repository');
const { enviarCorreo } = require('../email/email');

const isUserRegisteredBody = async (body) =>
{
    const {
        email,
        password
    } = body;

    return await getAccount({
        email: email,
        password: password
    })
}

const registerPersonalDataBody = async (body) =>
{
    const {
        email,
        password,
        name,
        lastname,
        phone
    } = body;

    const newPersonal = new PersonalData({ 
        email,
        password,
        name,
        lastname,
        phone
    });
    const newAccount = new Account({ 
        email,
        password
    });

    await newPersonal.save();
    await newAccount.save();
    return true;
}

const postSendEmailBody = async (req) =>
{
    const {
        email
    } = req.body;

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const dispositivo = req.headers['user-agent'];

    return enviarCorreo(email, {
           ipPub: ip,
           dispositivo: dispositivo
     });
}

const postRegisterDialogue = async (req) =>
{
    const data = validateALlDialogue(req);
    console.log(data);
    const newDialogue = new DialogueSchema(data);

    await newDialogue.save();
    return true;
}

const validateALlDialogue = (req) =>
{
    const {
        questions = {},
        scene = 0,
        sequence = 0,
        nextScene = 0,
        nextSequence = 0
    } = req.body;
    
    return {
        questions: {
            a: {
                text: questions?.a?.text ?? '',
                score: questions?.a?.score ?? 0
            },
            b: {
                text: questions?.b?.text ?? '',
                score: questions?.b?.score ?? 0
            },
            c: {
                text: questions?.c?.text ?? '',
                score: questions?.c?.score ?? 0
            },
            d: {
                text: questions?.d?.text ?? '',
                score: questions?.d?.score ?? 0
            },
            description: questions?.description ?? ''
        },
        scene: scene ?? 0,
        sequence: sequence ?? 0,
        nextScene: nextScene ?? 0,
        nextSequence: nextSequence ?? 0
    }
}

module.exports = {
    isUserRegisteredBody,
    registerPersonalDataBody,
    postSendEmailBody,
    postRegisterDialogue
}