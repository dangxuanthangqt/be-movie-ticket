const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const multer = require("multer");

cloudinary.config({
  cloud_name: "dfuvuibxy",
  api_key: "543552719365385",
  api_secret: "ucmlGs3Vy2_Wy3Ub1LcJgu9Q4po",
});

const storage = (folder) =>
  new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folder,
      format: async (req, file) => "png", // supports promises as well
      public_id: (req, file) => "computed-filename-using-request",
    },
  });
const uploadCloud = (folder) => multer({
    storage: storage(folder)
});
module.exports = uploadCloud;
