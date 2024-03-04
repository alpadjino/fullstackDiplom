import express from 'express';
import mongoose from 'mongoose';

import { registerValidation } from "./validations/auth.js";
import { loginValidation } from "./validations/login.js";
import { postValidation } from "./validations/post.js"

import checkAuth from "./utils/checkAuth.js";

import * as UserHandlers from "./handlers/UserHandlers.js";
import * as PostHandlers from "./handlers/PostHandlers.js";

mongoose.connect("mongodb://localhost:27017/DiplomDatabase?")
.then(() => (console.log("DB OK")))
.catch(() => console.log("DB error", err));

const app = express();

app.use(express.json());

app.get("/auth/me", checkAuth, UserHandlers.checkMe);
app.post("/auth/login", loginValidation, UserHandlers.login);
app.post("/auth/register", registerValidation, UserHandlers.register);


app.get("api/api_v1/posts", PostHandlers.getAllPosts);
app.get("api/api_v1/posts/:id", PostHandlers.getOnePost);
app.post("api/api_v1/posts", checkAuth, postValidation, PostHandlers.createPost);
app.delete("api/api_v1/posts/:id", checkAuth, PostHandlers.deletePost);
app.put("api/api_v1/posts/:id", checkAuth, postValidation, PostHandlers.updatePost);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
     
    console.log('Server OK');
});