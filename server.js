
const express = require(`express`)
const app = express()
const path = require(`path`)
const url = require(`urllib`)

app.use(express.static(path.join(__dirname, `node_modules`)))
app.use(express.static(path.join(__dirname, `dist`)))

app.get(`/sanity`, function (req, res){
    console.log("Every thing is OK")
    res.send("good for now")
})

let data=[]
app.get(`/recipes/:ingredient`, function (req, resp){
    const ingredient = req.params.ingredient
    url.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, (err, res)=>{
    
        data =JSON.parse(res).results
        let relevantData = data.map(d =>{return{ 
            name:d.title, ingredients:d.ingredients, link:d.href, pic:d.thumbnail
        }})
        resp.send(relevantData)
    })
})

const port = 8080
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})