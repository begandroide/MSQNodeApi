import { FastifyRequest, FastifyReply } from "fastify";
import { ServerResponse } from 'http';
import { User } from "../models";
import boom from 'boom';
import bcrypt from 'bcrypt';
import app from "..";

/// Login Request
export const login = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
	try {
        var user = await User.query().findOne({
            email: req.body.email
        });
        if (!user) {
          return reply.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
          );
    
        if (!passwordIsValid) {
          return reply.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
      
        var token = app.jwt.sign({ id: user.id }, {
          expiresIn: 86400 // 24 hours
        });
        return reply
          .setCookie('token', token, {
          domain: 'localhost',
          path: '/',
          // secure: true, // send cookie over HTTPS only
          httpOnly: true,
          sameSite: true // alternative CSRF protection
          })
          .status(200).send({
              token: token
          });
	} catch (err) {
		throw boom.boomify(err);
	}
};

/// Signup Request
export const signup = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    try {
        let body = req.body;
        const user = new User();
        user.name = body.nombre;
        user.id_user = body.id_usuario;
        user.password = bcrypt.hashSync(body.contrasena, 0); 
        const userUp = (await User.query().insert(user).onError(err => {
          reply.status(500).send({message: err});
        }));

        if (userUp) {
          reply.send({ message: "User was registered successfully!" });
        }

        //           await user.save((err, user) => {
        //     if(err){
        //     } else {
        //     }
        // })
        return await reply.code(204);
    } catch (error) {
        throw boom.boomify(error);        
    }
}
