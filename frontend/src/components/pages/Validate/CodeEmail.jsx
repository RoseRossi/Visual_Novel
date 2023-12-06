import React  from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchPutDataProgressUser ,  fetchPostProgressUser } from "../../../api/fetchs.jsx";

/**
 * Validate user code email.
 * 
 * @param {*} param0 
 * @returns void
 */
const CodeEmail = ({
    stateChange,
    codeValue,
    dataUser
}) => {

    // States.

    const navigate = useNavigate();
    const [disabled, setdisabled] = React.useState(true);
    const [code, setCode] = React.useState("000000");
    const [ dataProgressUser, setDataProgressUser ] = React.useState({
        email: ""
    });
    const scene_ = [
        '/Prologue',
        '/Scene1-parts',
        '/Scene2-parts',
        '/Scene3-parts',
        '/Scene4-parts1',
       '/Scene4-parts2'
    ]

    // Handlers.

    const closePopup = () =>
    {
        stateChange.setIsSendEmail(false);
    }

    const onCodeChange = (event) =>
    {
        setdisabled(event.target.value.length < 8);
    }

    const onSubmit = async (event) =>
    {
        event.preventDefault();
        const value = event.target[0].value;
        if (code !== value) { alert("Codigo incorrecto"); return;}
        const data = await fetchPostProgressUser({
            email: dataProgressUser.email
        });
        const continueScene = (data.data)[0].scene;
        
        if (continueScene >= (scene_.length -1)) {
            navigate(scene_[continueScene]);
        }
        else {
            navigate(scene_[0]);
        }
    }

    // Effects.

    React.useEffect(() => {
        setCode(codeValue);
    }, [codeValue]);


    React.useEffect(() => {
        if (dataUser.email) {
            setDataProgressUser(dataUser);
        }
    }, [dataUser]);

    return (
        <>
            <main className="_code_email_container">
             <a onClick={closePopup} />
              <section>
                    <section>
                            <h1>Validar Cuenta</h1>
                            <p>Te hemos enviado un codigo a tu correo electronico</p>
                    </section>
                    <section>
                        <form onSubmit={onSubmit}>
                            <input onChange={onCodeChange} 
                                   type="text" 
                                   placeholder="Codigo"
                            />
                            <button className="boton" 
                                    disabled={disabled}>
                                        Validar
                            </button>
                        </form>
                    </section>
              </section>
            </main>
        </>
    );
}

export default CodeEmail;
