import { RouteOptions } from "fastify";
import * as authController from '../controllers/authController';
import { SignupSchema, LoginSchema } from "./documentation/authApi";

const signupRoute: RouteOptions = {
  method: 'POST',
  url: '/api/auth/signup',
  handler: authController.signup,
  schema: SignupSchema
}

const loginRoute: RouteOptions = {
  method: 'POST',
  url: '/api/auth/login',
  handler: authController.login,
  schema: LoginSchema
}
const routes = [signupRoute, loginRoute];

export default routes;