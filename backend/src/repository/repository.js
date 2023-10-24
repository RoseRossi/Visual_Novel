const Account = require('../schemas/account/accountSchema');
const PersonalData = require('../schemas/account/personalData');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns {Object} account
 */
const getAccount = async ({
    email,
    password
}) =>
{
    try {
        return await Account.aggregate([
            {
              $lookup:
              {
                  from: 'personaldatas',
                  localField: 'email',
                  foreignField: 'email',
                  as: 'personalData'
              }
            },
            {
              $unwind: '$personalData'
            },
            {
              $project: {
                email: 1,
                password: 1,
                'personalData.name': 1,
                'personalData.lastname': 1,
                'personalData.phone': 1
              }
            },
            {
              $match: {
                email: email,
                password: password
              }
            }
        ]);
    } catch (error) {
        console.log(error);
        return {
            data: []
        }
    }
};

module.exports = {
    getAccount
};