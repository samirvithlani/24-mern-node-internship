const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:"./uploads",
    filename: function(req, file, cb){
        //cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);
    }    
})

const upload  = multer({
    storage: storage,
    limits:{fileSize: 1000000},

}).single('myImage');


const fileUpload = (req, res) => {


        upload(req,res,(err)=>{
            if(err){
                res.status(500).json({
                    message: "Error uploading file"
                })
            }
            else{
                if(req.file == undefined){
                    res.status(400).json({
                        message: "No file selected"
                    })
                }
                else{
                    //data...
                    //console.log(req.file)
                    console.log(req.body)
                    res.status(200).json({
                        message: "File uploaded",
                        file: `uploads/${req.file.filename}`
                    })
                }
            }
        })

}
module.exports = {
    fileUpload
}

