import { validationResult } from "express-validator";
import PostModel from '../models/PostModel.js'

export const createPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors });
    }

    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId,
        });

        const post = await doc.save();
        console.log(req.userId)
        res.json(post)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Ошибка при создании поста'
        });
    }
};

export const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.json(posts)
    } catch (err) {
        return res.status(500).json({
            message: "Не удалось получить посты"
        })
    }
};

export const getOnePost = async (req, res) => {
  try {
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { viewsCount: 1 } } ,
        { returnDocument: 'after' }
    );

    if (!post){
        return res.status(404).json({
            message: "Такого поста нет"
        })
    }

    res.json(post);
  } catch (err) {
    return res.status(500).json({
      message: "Не удалось получить пост",
    });
  }
};

export const deletePost = async (req, res) => {
  try {  
    const post = await PostModel.findOne({ _id: req.params.id });

    if (!post) {
      return res.status(404).json({ message: "Страница не найдена" });
    }

    if (post.user.toString() === req.userId) {
      await PostModel.deleteOne(post);
      return res.json({ message: "Статья удалена" });
    } 

    return res.json({message: "Нет прав на удаление"})
  } catch (err) {
    return res.status(500).json({ message: "Не получилось удалить пост" });
  }
};

export const updatePost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors });
    }
    try {
    const post = await PostModel.findOneAndUpdate(
        { _id: req.params.id, user: req.userId },
        { $set:
            {
            title: req.body.title,
            text: req.body.text,
            tags: req.body.tags } },
        { new: true }
        );

    if (!post) {
        return res.status(404).json({ message: "Страница не найдена" });
    }

    return res.json({ message: "Статья обновлена" });
  } catch (err) {
    return res.status(500).json({ message: "Не получилось обновить пост" });
  }
};