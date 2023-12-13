import axios from 'axios';
import json from '../src/endponits.json';

jest.mock('axios');

const userData = [
	{
		correo: 'pepitoperez@gmail.com',
    contraseña: 123123
	}
];

test('post new user', async () => {
	axios.post.mockResolvedValue('/backend/isUserRegistered', {data: userData});
});

const obtenerTexto = require('../src/endponits.json');

test('la cadena cumple con el patrón esperado', () => {
  const resultado = obtenerTexto.registerUser;
  const regex = /^http:\/\/34\.160\.13\.13\/backend\/[a-zA-Z]+\/$/;

  expect(resultado).toMatch(regex);
});

test('la cadena cumple con el patrón esperado', () => {
	const resultado = obtenerTexto.isUserRegistered;
	const regex = /^http:\/\/34\.160\.13\.13\/backend\/[a-zA-Z]+\/$/;
  
	expect(resultado).toMatch(regex);
});

test('la cadena cumple con el patrón esperado', () => {
	const resultado = obtenerTexto.sendEmail;
	const regex = /^http:\/\/34\.160\.13\.13\/backend\/[a-zA-Z]+\/$/;
  
	expect(resultado).toMatch(regex);
});

test('la cadena cumple con el patrón esperado', () => {
	const resultado = obtenerTexto.getDataProgressUser;
	const regex = /^http:\/\/34\.160\.13\.13\/backend\/[a-zA-Z]+\/$/;
  
	expect(resultado).toMatch(regex);
});

test('la cadena cumple con el patrón esperado', () => {
	const resultado = obtenerTexto.updateProgressUser;
	const regex = /^http:\/\/34\.160\.13\.13\/backend\/[a-zA-Z]+\/$/;
  
	expect(resultado).toMatch(regex);
});