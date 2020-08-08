export const SignupSchema = {
	description: 'Create a new user',
	tags: ['auth'],
	summary: 'Creates new user with given values',
	body: {
		type: 'object',
		required: ['id_usuario', 'nombre', 'contrasena'],
		properties: {
			id_usuario: { type: 'string', maxLength: 10},
			nombre: { type: 'string', maxLength: 30 },
			contrasena: { type: 'string', maxLength: 10 }
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				estado: { type: 'number' },
				mensaje: { type: 'string' }
			},
			example: {
				estado: 1,
				mensaje: 'Registro con Exito!'
			}
		},
		403: {
			description: 'Error response',
			type: 'object',
			properties: {
				estado: { type: 'number' },
				mensaje: { type: 'string' }
			},
			example: {
				estado: 3,
				mensaje: 'Usuario ya existe'
			}
		}
	},
};
export const LoginSchema = {
	description: 'Login user',
	tags: ['auth'],
	summary: 'Login user given email and password',
	body: {
		type: 'object',
		properties: {
            email: { type: 'string' },
            password: {type: 'string'}
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				token: { type: 'string' },
			},
		},
	},
};
