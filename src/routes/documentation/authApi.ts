export const SignupSchema = {
	description: 'Create a new user',
	tags: ['auth'],
	summary: 'Creates new user with given values',
	body: {
		type: 'object',
		properties: {
			username: { type: 'string' },
			name: { type: 'string' },
			surname: { type: 'string' },
            email: { type: 'string' },
            password: {type: 'string'}
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				username: { type: 'string' },
				name: { type: 'string' },
				surname: { type: 'string' },
                email: { type: 'string' },
				__v: { type: 'number' },
			},
		},
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
