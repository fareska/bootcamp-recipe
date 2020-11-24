
class Renderer{
    loadInfo(data) {
        const source = $("#recipes-template").html()
        const template = Handlebars.compile(source)        
        const newHtml = template({item: data})
        $("#recipesContainer").empty().append(newHtml)

    //     for (let obje of data){
    //         let others = {name: obje.name, link: obje.link, pic: obje.pic}
    //         let list = obje.ingredients
    //         const newHtml = template(others)
    //         const listHtml = template({item: list})
    //         $("#recipesContainer").empty().append(newHtml)
    //         $("#recipesContainer").append(listHtml)

    //     }
    }
}