import mongoose from "mongoose"

mongoose.connect("mongodb+srv://renanffdsouza:winsp1988@cluster01.nag7p.mongodb.net/node-api")
let db = mongoose.connection

export default db