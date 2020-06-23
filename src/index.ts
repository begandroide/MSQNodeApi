import * as fastify from 'fastify';
import swagger from 'fastify-swagger';
import { Options } from './config/swagger';
import cors from 'fastify-cors';
import jwt from 'fastify-jwt';
import cookie from 'fastify-cookie';
import secretAuth from './config/auth.config';
import routes from './routes';
import { config } from './config';
import { initializeDB } from './database';
require('dotenv').config();
console.log(require('dotenv').config())

if (!process.env.DATABASE_PORT) {
	process.exit(1);
}

const app = fastify.default({logger: true});
app.register(swagger, Options);
app.register(cors);
app.register(jwt, 
	{
		secret: secretAuth,
		cookie: { 
			cookieName: 'token'
		}
	});
	
app.register(cookie);

routes.forEach(route => {
    app.route(route);
});

const start = async (): Promise<void> => {
	try {
        await initializeDB();
		await app.listen(config.app.port);
		app.swagger();
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();
export default app;