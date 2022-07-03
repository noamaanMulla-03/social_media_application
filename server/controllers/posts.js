import PostMessagesModel from "../models/postMessages.js";

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessagesModel.find();
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createPosts = async (req, res) => {
    const POST = req.body;
    const newPostMessage = new PostMessagesModel(POST);

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export { getPosts, createPosts };