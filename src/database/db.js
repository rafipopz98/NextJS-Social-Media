import mongoose from "mongoose";
import dburl from './config.env'
const ConnectionDB = async () => {
  console.log(dburl)
  mongoose
    .connect(dburl)
    .then(() => {
      console.log("connected to database");
      return;
    })
    .catch((e) => {
      console.log("error while connecting to database", e);
      return;
    });
};

module.export = { ConnectionDB };
