import multer from "multer"; 

// Configure Multer to save uploaded files to the 'uploads/' directory
// 'dest' specifies the folder where uploaded files will be temporarily stored
const upload = multer({ dest: "uploads/" });


export default upload;
