import Album from "../models/albumModel.js";

export const getAlbums = async (req, res) => {
  if (req.query.length > 0) {
    getAlbumByQuery(req, res);
    return;
  }
  try {
    const albums = await Album.find();
    console.log(albums);
    res.status(200).json(albums);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

export const createAlbum = async (req, res) => {
  const album = new Album(req.body);
  try {
    await Album.save();
    res.status(200).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};
export const getAlbum = async (req, res) => {
  const album = await Album.findOne({ id: req.params.albumId }).exec();
  if (!album) {
    res.status(404).json({ message: "User Not Found!" });
    return;
  }

  res.status(200).json(album);
};

export const createAlbums = async (req, res) => {
  try {
    await Album.insertMany(req.body);
    res.status(201).json({ message: "Success!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const getAlbumByQuery = async (req, res) => {
  const album = await Album.findOne({ id: req.query.albumId }).exec();
  if (!album) {
    res.status(404).json({ message: "Album Not Found!" });
    return;
  }
  res.status(200).json(album);
};
