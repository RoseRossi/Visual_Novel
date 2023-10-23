
/**
 * verificate if the user is registered
 * @param {*} req 
 * @param {*} res 
 */
const isUserRegistered = async (req, res) =>
{
    try {
        res.send('Hello World');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    isUserRegistered
};