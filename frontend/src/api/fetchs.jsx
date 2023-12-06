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
 *  Send email to user
 * 
 * @param {*} param0 
 * @returns 
 */
export const fetchSendEmail = ({
    email
}) =>
{
    return fetchPostGeneral({
        dataSend: {
            email: email
        },
        urlEndPoint: json.sendEmail
    })
}

/**
 *  Send email to user
 * 
 * @param {*} param0 
 * @returns 
 */
export const fetchPostProgressUser = ({
    email
}) =>
{
    return fetchPostGeneral({
        dataSend: {
            email: email
        },
        urlEndPoint: json.getDataProgressUser
    })
}

/**
 *  Send email to user
 * 
 * @param {*} param0 
 * @returns 
 */
export const fetchPutDataProgressUser = ({
    email,
    scene,
    total
}) =>
{
    return fetchPutGeneral({
        dataSend: {
            email: email,
            scene: scene,
            total: total
        },
        urlEndPoint: json.updateProgressUser
    })
}


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

/**
 * General Structure HTTP REQUEST PUT
 * 
 * @param {*} param0 
 * @returns 
 */
const fetchPutGeneral = async ({
    dataSend,
    urlEndPoint
}) => {
    try {
        const response = await fetch(urlEndPoint, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSend),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};