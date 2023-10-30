const Account = require('../schemas/account/accountSchema');
const PersonalData = require('../schemas/account/personalData');
const { getAccount } = require('../repository/repository');

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
        const dataSend = await getAccount({
            email: req.body.email,
            password: req.body.password
        })
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
        console.log(error);
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
        const {
            email,
            password,
            name,
            lastname,
            phone
        } = req.body;
        console.log(req.body);

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
        res.json({ 
            message: 'Account registered',
            register: true
        });
    } catch (error) {
        res.status(400).json({ 
            message: 'Error to register account',
            register: false
        });
        console.log(error);
    }
}

module.exports = {
    isUserRegistered,
    registerPersonalData
};