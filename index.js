import axios from "axios"
import express from "express"

const app = express()
const port = 3000

app.use(express.static("public"))

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://api.breakingbadquotes.xyz/v1/quotes")
        console.log(result)
        res.render("index.ejs", {
            content: JSON.stringify(result.data[0].quote),
            author: JSON.stringify(result.data[0].author)
    })
    } catch (error) {
        console.log(error.response.data)
    }
    
})



app.listen(port, () => {
    console.log(`Server running on the port ${port}`)
})