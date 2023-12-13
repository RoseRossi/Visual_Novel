import axios from 'axios';

jest.mock('axios');

const userData = [
	{
		correo: 'pepitoperez@gmail.com',
    contraseña: 123123
	}
];

test('post new user', async () => {
	axios.post.mockResolvedValue('/backend/isUserRegistered', {data: userData});
	//render(<Todos />);

	//const todoList = await waitFor(() => screen.findAllByTestId("todo"));

	//expect(todoList).toHaveLength(3);
});

//Hola me gusta la fresa

// const loginData = [
// 	{
// 		correo: 'velasquez.cesar@correounivalle.edu.co',
// 		contraseña: 'A80875147',
// 	},
// ];

// test('Log user', async () => {
// 	axios.post.mockResolvedValue(endPoints.login, {data: loginData});
// });

// const asignatureData = [
// 	{
// 		cod_asignatura: '750080M',
// 		nombre_asignatura: 'Matematicas Discretas',
// 		creditos: 3,
// 		malla_curricular: '048',
// 		tipo: 'Pregrado',
// 		semestre: 4,
// 		horas_semana: 3,
// 	},
// ];

// test('Create asignature', async () => {
// 	axios.post.mockResolvedValue(endPoints.asignaturas.create, {data: asignatureData});
// });
// const ChooseClassData = [
// 	{
// 		cedula: '66901114',
// 		nombre_grupo: 'G02',
// 		cod_asignatura: '750001M',
// 	},
// ];

// test('choose Class', async () => {
// 	axios.post.mockResolvedValue(endPoints.profesor.elegirclase.post, {data: ChooseClassData});
// });

// const solicitudData = [
// 	{
// 		cod_asignatura: '701003C',
// 		cod_grupo: '701003C-02',
// 		cupos: 30,
// 		horario: [{cod_aula: 'sala_1', dia: 'miercoles', hora_entrada: '2:00 PM', hora_salida: '4:00 PM'}],
// 		nombre_grupo: 'G02',
// 		cod_periodo_academico: '2023-1',
// 	},
// ];
// test('Crear solicitud', () => {
// 	axios.post.mockResolvedValue(endPoints.grupos.create, {data: solicitudData});
// });

// const notificateData = [
// 	{
// 		tipo: 'Todos',
// 		fecha_inicio: '10-mayo-2023',
// 		fecha_cierre: '15-mayo-2023',
// 	},
// ];

// test('Notificar usuarios', () => {
// 	axios.post.mockResolvedValue(endPoints.user.notificate, {data: notificateData});
// });