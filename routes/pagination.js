import express from 'express';
import { addPost, posts } from '../controllers/pagination.js';
const Router = express.Router();

Router.post('/addPost', addPost);
Router.get('/posts', posts);

export default Router;