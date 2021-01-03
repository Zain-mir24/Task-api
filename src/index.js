const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const multer = require("multer");
// const upload = multer({
//     dest: 'images'
// })
const app = express();
const port = process.env.PORT || 3000;

// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// })

// const upload = multer({
//   dest: "avatars",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a file"));
//     }

//     cb(undefined, true);

    //   cb(new Error('File must be PDF'))
    //   cb(undefined,true)
    //   cb(undefined,false)
//   },
// });

// const errorMiddleware = (req, res, next) => {
//   throw new Error("from my middle ware");
// };
// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json());
app.use(taskRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById('5c2e505a3253e18a43e612e6')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)
  // const user = await User.findById('5c2e4dcb5eac678a23725b5b')
  // await user.populate('tasks').execPopulate()
  // console.log(user.tasks)
};

main();
