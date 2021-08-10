import * as mongoose from "mongoose";

export const WordSchema = new mongoose.Schema({
    word:String,
    category:String,
    type:String,
    image:String,
},{timestamps: true});