import Photo from "../models/photoModel.js";

export const getPhotos = async (req, res) => {
  if (req.query.length > 0) {
    getPhotoByQuery(req, res);
    return;
  }
  try {
    const photos = await Photo.find();
    console.log(photos);
    res.status(200).json(photos);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

export const createPhoto = async (req, res) => {
  const photo = new Photo(req.body);
  try {
    await photo.save();
    res.status(200).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};
export const getPhoto = async (req, res) => {
  const photo = await Photo.findOne({ id: req.params.photoId }).exec();
  if (!photo) {
    res.status(404).json({ message: "Photo Not Found!" });
    return;
  }
  res.status(200).json(photo);
};

export const createPhotos = async (req, res) => {
  try {
    await Photo.insertMany(req.body);
    res.status(201).json({ message: "Success!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};

const getPhotoByQuery = async (req, res) => {
  const photo = await Photo.findOne({ id: req.query.photoId }).exec();
  if (!photo) {
    res.status(404).json({ message: "Photo Not Found!" });
    return;
  }
  res.status(200).json(photo);
};
