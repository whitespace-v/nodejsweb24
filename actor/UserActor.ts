import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateJWT } from "../utils/generateJWT";
export class UserActor{
    static async signup(req: Request, res: Response){
        try {
            // 1. get signup data
            const {login, password} = req.body
            // 2. validate data
            if (!login || !password){
                res.send("Некорректные данные")
            }
            // 3. validate on unique  
            // const candidate = users.findOne({login}) 
            const candidate = {login: "petya", password: 'vasya'}
            if (candidate) {
                res.send("Логин занят !")
            }
            // 4. hash pwd
            const hashPassword = await bcrypt.hash(password, 5)
            // 5. create User in DB
            const user = {
                id: 0, login, password: hashPassword
            }
            // 6. token 
            res.json({token: generateJWT(user.id, user.login), user})
        } catch (e) {
            console.log(e.message)
        }
    }
    static signin(req: Request, res: Response){
        try {
            // 1. get data
            const {login, password} = req.body
            // 2. find user in DB by login
            const user: {id: number, login: string, password: string} = {
                id: 1, 
                login, 
                password: "$2b$05$WiLFlRU1dIKrOjHiNzk9YekCwFYC9stUelGhn8DCKtyOg32f0DGcu" 
            }
            if (!user) {
                res.send("Пользователь не найден")
            }
            // 3. check password
            let pwd_compare = bcrypt.compareSync(password, user.password)

            if (!pwd_compare) {
                res.send("Неправильный пароль")
            }
            res.json({token: generateJWT(user.id, user.login)})
            
        } catch (e) {
            console.log(e.message) 
        }
    }
}