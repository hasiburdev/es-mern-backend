import Comment from "../models/commentModel.js";

export const getComments = async (req, res) => {
  if (req.query.length > 0) {
    getCommentByQuery(req, res);
    return;
  }
  try {
    const comments = await Comment.find();
    console.log(comments);
    res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

export const createComment = async (req, res) => {
  const comment = new Comment(req.body);
  try {
    await comment.save();
    res.status(200).json(req.body);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};
export const getComment = async (req, res) => {
  const comment = await Comment.findOne({ id: req.params.userId }).exec();
  if (!comment) {
    res.status(404).json({ message: "User Not Found!" });
    return;
  }

  res.status(200).json(comment);
};

export const createComments = async (req, res) => {
  try {
    await Comment.insertMany(req.body);
    res.status(201).json({ message: "Success!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const getCommentByQuery = async (req, res) => {
  const comment = await Comment.findOne({ id: req.query.commentId }).exec();
  if (!comment) {
    res.status(404).json({ message: "Comment Not Found!" });
    return;
  }
  res.status(200).json(comment);
};
