const Account = require('../schemas/account/accountSchema');
const PersonalData = require('../schemas/account/personalData');
const DialogueSchema = require('../schemas/dialogue/dialogueSchema');
const ProgressUser = require('../schemas/progress/recoveryUserSchema');
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
    const newProgress = new ProgressUser({
        email,
        scene: 0,
        total: 0
    });

    await newPersonal.save();
    await newAccount.save();
    await newProgress.save();
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

const searchProgressData = async (req) =>
{
    const {
        email
    } = req.body;

    return await ProgressUser.find({
        email: email
    });
}

const putProgressUserData = async (req) => {

    const {
        email,
        scene,
        total
    } = req.body;
    
    const update = await ProgressUser.findOneAndUpdate({
        email: email
    }, {
        scene: scene,
        total: total
    }, {
        new: true
    });

    return update;
}

module.exports = {
    isUserRegisteredBody,
    registerPersonalDataBody,
    postSendEmailBody,
    postRegisterDialogue,
    searchProgressData,
    putProgressUserData
}