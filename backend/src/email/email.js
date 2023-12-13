const { remindEmail ,  correoToken } = require('./../env');
const nodeMailer = require('nodemailer');

//peticion post
const enviarCorreo = async (email,data) => 
{
    let code = '',
    isSend = true;
    try {
        //sacar hora y fecha en variables const aparate
        const date = new Date();
        const hora = date.getHours();
        const fecha = date.getDate();

        data.hora = hora;
        data.fecha = fecha;
        code = getCodeSecurity();
        data.code = code;
        const config = {
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: remindEmail,
                pass: correoToken
            }
        };

        const transporter = nodeMailer.createTransport(config);

        const mailOptions = {
            from: remindEmail,
            to: email,
            cc: '',
            subject: `Codigo de verificacion - DACE`,
            text: '',
            html: menssageEmail(data)
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
            }
        });
    } catch (error) {
        //throw new Error('Fallo el envio del correo' + error);
        console.log('Fallo el envio del correo' + error);
    }

    return {
        code: code,
        isSend: isSend
    }
}

const menssageEmail = ({
    ipPub,
    dispositivo,
    hora,
    fecha,
    code
}) => {
    const menssaje = `
        <table style="width: 100%; height: 100%; background-color: #f2f2f2;">
            <tbody>
                <tr>
                    <td style="text-align: center;">
                        Estas Iniciando sesión en ${ipPub} desde un dispositivo ${dispositivo} a las ${hora} horas del dia ${fecha}
                    </td>
                    <td style="text-align: center;">
                        <h1 style="color: #000;">Codigo de verificacion</h1>
                        <h2 style="color: #000;">${code}</h2>
                    </td>
                </tr>
            </tbody>
        </table>
    `
    return menssaje;
}

const getCodeSecurity = () => {
    let code = '';
    for (var i = 0; i < 8; i++) {
        code += Math.floor(Math.random() * 10);
    }
    return code;
}

module.exports = {
    enviarCorreo
}