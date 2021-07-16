const singleFileUpload = async (req, res, next) => {
  try {
    // const file = new SingleFile({
    //     fileName: req.file.originalname,
    //     filePath: req.file.path,
    //     fileType: req.file.mimetype,
    //     fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
    // });
    // await file.save();
    const file = req.file;
    console.log(file);

    res.status(201).send("File Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = { singleFileUpload };
