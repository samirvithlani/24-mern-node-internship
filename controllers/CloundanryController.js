const cloundanry = require("cloudinary").v2;

const uploadImage = async (file) => {
  
  cloundanry.config({
    cloud_name: "dpjoxqisl",
    api_key: "292199526794599",
    api_secret: "KKZHWhEwjA1Q0zUx4gVfcsvcVRY",
  });
  
  const result = await cloundanry.uploader.upload(file)
  return result;
  
};
module.exports = {
    uploadImage,
}