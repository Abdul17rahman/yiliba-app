import mongoose from "mongoose";

const url = "mongodb://localhost:27017/yiliba";

// const connectDb = async () => {
//   try {
//     await mongoose.connect(url);
//     console.log("Database Connected");
//   } catch (error) {
//     console.log(`Error ${error}`);
//   }
// };

export default function connectDb() {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(`Connection Error ${err}`);
    });
}
