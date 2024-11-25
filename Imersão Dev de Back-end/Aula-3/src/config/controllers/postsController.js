//Importar o método dos dados da lista armazenada.

import { getTodosPosts } from "../models/postsModels.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}