import express from 'express'
import { UserActor } from '../actor/UserActor'

export const userRouter = express.Router()

userRouter.post('/signup', UserActor.signup)
userRouter.post('/signin', UserActor.signin)