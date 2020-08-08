import { RouteOptions } from "fastify";
import * as authController from '../controllers/authController';
import { SignupSchema, LoginSchema } from "./documentation/authApi";

const apiPrefix: string = '/apirest2/v2/'; 

const signupRoute: RouteOptions = {
  method: 'POST',
  url: apiPrefix + 'usuarios/registro',
  handler: authController.signup,
  schema: SignupSchema
}

const loginRoute: RouteOptions = {
  method: 'POST',
  url: apiPrefix + 'usuarios/login',
  handler: authController.login,
  schema: LoginSchema
}
const routes = [signupRoute, loginRoute];

export default routes;