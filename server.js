const express = require("express");
const path = require('path');
const authRouter = require("./router/auth");
const contuctRouter = require("./router/Contuct");
const noticRouter = require("./router/notice");
const paymentRouter = require("./router/payment");
const resultRouter = require("./router/resultRouter");
const userRouter = require("./router/user");
const youtubeRouter = require("./router/youtubeVideo");
const fileRouter = require("./router/file-upload-routes");
const fileDesRouter = require("./router/fileDes");
const eventFileRouter = require("./router/eventImg");
const eventDesRouter = require("./router/eventDes");
const connectDB = require("./config/db");
const app = express();
app.use(express.json());

//db
connectDB();



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/result", resultRouter);
app.use("/register", userRouter);
app.use("/login", authRouter);
app.use("/notice", noticRouter);
app.use("/contuct",contuctRouter)
app.use("/payment",paymentRouter)
app.use("/video",youtubeRouter)
app.use('/fileUpload', fileRouter);
app.use('/fileDes', fileDesRouter);
app.use('/eventFile', eventFileRouter);
app.use('/eventDes', eventDesRouter);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

