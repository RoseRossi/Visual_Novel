import json from '../endponits.json';

/**
 *  Return success if register user
 */
export const fectUserRegistered = async ({
        email,
        contraseña,
        name
}) => {
    return fetchPostGeneral({
        dataSend: { 
            email: email, 
            password: contraseña,
            name: name,
            lastname: "",
        },
        urlEndPoint: json.registerUser
    })
}

/**
 *  Return data if user is registered
 */
export const fectIsUserRegistered = ({
    email,
    contraseña,
}) => {
    return fetchPostGeneral({
        dataSend: {
            email: email,
            password: contraseña   
        },
        urlEndPoint: json.isUserRegistered
    })
};

/**
 *  General Estruture HTTP REQUEST POST
 * 
 * @param {*} param0 
 * @returns 
 */
const fetchPostGeneral = async ({
    dataSend,
    urlEndPoint
}) =>
{
    try {
        const response = await fetch(urlEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSend),
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}