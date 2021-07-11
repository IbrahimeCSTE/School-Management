const express = require('express');
const {upload} = require('../helpers/filehelper');
const EventImg = require('../model/EventImg');
const eventFileRouter = express.Router();

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

eventFileRouter.post('/', upload.single('file'),async(req,res,next)=>{
    try{
        const file = new EventImg({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
            
        });
        await file.save();
        res.status(201).send(file);
        
    }catch(error) {
        res.status(400).send(error.message);
    }
});

eventFileRouter.get('/',async(req,res,next)=>{
    try{
        const files = await EventImg.find({});
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
});

eventFileRouter.delete('/:id',async(req,res)=>{
    const notice=await EventImg.findById(req.params.id)
    if(!notice){
       return res.send("No eventImg Declearaion")
    }
    else{
        await notice.remove()
        res.send('eventImg removed')
    }
})
module.exports = eventFileRouter