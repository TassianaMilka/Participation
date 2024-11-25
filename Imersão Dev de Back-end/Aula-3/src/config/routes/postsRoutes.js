//Importar os dados do post da lista.

import express from "express";
import { listarPosts } from "../controllers/postsController.js";
import { getTodosPosts } from "../models/postsModels.js";

const routes = (app) => {
    app.use(express.json());
    //Lista de todos os cados armazenados do posts.
    app.get("/posts",async(req,res)=>{

    const posts = await getTodosPosts();

    res.status(200).json(posts);
});
}

export default routes;