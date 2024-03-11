const cloundanry = require("cloudinary").v2;

const uploadImage = async (file) => {
  
  cloundanry.config({
    cloud_name: "dpjoxqisl",
    api_key: "add your key",
    api_secret: "add your key",
  });
  
  const result = await cloundanry.uploader.upload(file)
  return result;
  
};
module.exports = {
    uploadImage,
}