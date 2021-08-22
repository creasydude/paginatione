import ErrorResponder from '../utils/errorResponder.js';
import post from '../models/post.js';

export const addPost = async (req, res, next) => {
    const { title, content } = req.body;
    if (!title || !content) return next(new ErrorResponder("Enter Post Please.", 400));
    try {
        const savePost = await post.create({
            title,
            content
        })
        res.status(201).json({
            success: true,
            savePost
        })
    } catch (error) {
        next(new ErrorResponder(error));
    }
}

export const posts = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const dataLimit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * dataLimit;
        const totalData = await post.countDocuments();
        const pages = Math.ceil(totalData / dataLimit);
        const result = await post.find().skip(skip).limit(dataLimit);
        if (result.length === 0) return next(new ErrorResponder("No Posts Found.",404))
        res.status(200).json({
            success:true,
            count: result.length,
            page,
            pages,
            data: result
        });
    } catch (error) {
        next(new ErrorResponder(error))
    }
};