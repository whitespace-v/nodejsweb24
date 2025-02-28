import jwt from 'jsonwebtoken';
import 'dotenv/config'
export const generateJWT = (id: number, login: string) => jwt.sign({id,login}, process.env.SECRET_KEY || "SOME_DEFAULT_TOKEN", {expiresIn: '24h'})