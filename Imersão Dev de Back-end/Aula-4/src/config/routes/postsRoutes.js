//Importar os dados do post da lista.
//Importar imagens do post.


import express from "express"; 
import multer from "multer"; 
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
   
        cb(null, file.originalname); 
    }
});


const upload = multer({ storage: storage });


const routes = (app) => {
   
    app.use(express.json());

   
    app.get("/posts", listarPosts);


    app.post("/posts", postarNovoPost);

    // Rota para upload de imagens (assumindo uma única imagem chamada "imagem")
    app.post("/upload", upload.single("imagem"), uploadImagem);

};

export default routes;