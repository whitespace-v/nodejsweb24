import { Request, Response } from "express";
import bcrypt from "bcrypt";
export class UserActor{
    static async signup(req: Request, res: Response){
        // 1. get signup data
        const {login, password} = req.body
        // 2. validate data
        if (!login || !password){
            return res.send("Некорректные данные")
        }
        // 3. validate on unique  
            // const candidate = users.findOne({login}) 
            const candidate = {login: "petya", password: 'vasya'}
            if (candidate) {
                return res.send("Логин занят !")
            }
        // 4. hash pwd
        const hashPassword = await bcrypt.hash(password, 5)
        // 5. create User in DB
        const user = {
            login, password: hashPassword
        }
        // 6. token 
    }
    static signin(){
        
    }
}