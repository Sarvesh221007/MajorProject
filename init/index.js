const mongoose = require("mongoose");
const initData = require("./data .js")
const Listing = require("../models/listing.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    try {
        initData.data = initData.data.map((obj) => ({...obj,owner:"67414e177e59a3a49cc485ee"}))
        await Listing.insertMany(initData.data);
    } catch (err) {
        console.log("Error inserting data: ",err)
    }
    console.log("Data was insert");
}

initDB();