import mongoose from "mongoose";
export default async function ConnectionDB() {
  mongoose
    .connect("mongodb+srv://root:root@cluster0.baa79lo.mongodb.net/")
    .then(() => {
      console.log("connected to database");
    })
    .catch((e) => {
      console.log("error while connecting to database", e);
    });
}
