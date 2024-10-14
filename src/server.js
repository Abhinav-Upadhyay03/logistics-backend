import express from 'express'
const app = express()
const port = process.env.PORT || 4000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/abhi', (req,res) => {
    const abhi = [
    {
        id:1,
        name:"abhinav",
    },
    {
        id:2,
        name: "unico",
    }

]
    res.send(abhi);
}
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})