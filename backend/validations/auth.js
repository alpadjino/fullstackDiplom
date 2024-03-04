import { body } from 'express-validator'

export const registerValidation = [
  body("email", 'Неправильная почта').isEmail(),
  body("password", 'Пароль должен быть больше 5 символов').isLength({ min: 5 }),
  body("fullName", 'Имя пользователя должно быть не менее двух символов').isLength({ min: 2 }),
  body("avatarUrl", 'Некорректная ссылка на аватарку').isURL().optional({ nullable: true }),
];
