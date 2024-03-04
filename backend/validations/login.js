import { body } from 'express-validator'

export const loginValidation = [
    body('email', 'Неправильная почта').isEmail(),
    body('password').isLength({ min: 5 })
]