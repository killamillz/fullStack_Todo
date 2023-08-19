import express from "express";

const PORT = 5020
const app = express();


app.listen(PORT, () => {
     console.log(`server is listening on port ${PORT}`)
})
