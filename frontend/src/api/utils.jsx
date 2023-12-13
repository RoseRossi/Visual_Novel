/**
 * 
 * @param {string} token
 */
export const isUserLoggedIn = () =>
{
    let data = JSON.parse(localStorage.getItem("default"));
    return (data && data.isLogged);
}

/**
 * 
 * @param {*} scene 
 */
export const canNextScene = (scene) =>
{
    const response = false;
    if (localStorage.getItem("default")) {
        let data = JSON.parse(localStorage.getItem("default"));
        return (data.scene <= scene);
    }
    return response;
}