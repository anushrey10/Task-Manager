const express = require ("express");
const mongoose = require ("mongoose");
const cors = require ("cors");
const dotenv = require ("dotenv");

dotenv.config(); //load environment variables from the dotenv file

//initialize express app
const app = express();

app.use(cors());
app.use(express.json());

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Error connecting to MongoDB",err));

//define PORT
const PORT = process.env.PORT || 6000;

//start server
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});