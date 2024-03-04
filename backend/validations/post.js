import { body } from "express-validator";

export const postValidation = [
  body("title", "Заголовок должен быть не менее 4 символов").isLength({
    min: 4
  }),
  body("text", "Текст статьи должен быть не менее 5 символов").isLength({
    min: 5
  }),
  body("tags").isArray().optional(),
  body("imageUrl").isURL().optional(),
];
