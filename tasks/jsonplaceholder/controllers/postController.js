import Post from "../models/postModel.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  if (!posts.length) {
    res.status(404).json({ message: "No Post Found!" });
    return;
  }
  res.status(200).json(posts);
};

export const createPost = async (req, res) => {
  const post = new Post(req.body);
  await post
    .save()
    .catch((err) =>
      res.status(500).json({ message: "Internal Server Error!" })
    );
  res.status(201).json(post);
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ id: req.params.postId }).exec();
  if (!post) {
    res.status(404).json({ message: "Post Not Found!" });
    return;
  }
  res.status(200).json(post);
};

export const createPosts = async (req, res) => {
  try {
    await Post.insertMany(req.body);
    res.status(201).json({ message: "Success!" });
  } catch (error) {
    console.log(error);
    res.end;
  }
};
