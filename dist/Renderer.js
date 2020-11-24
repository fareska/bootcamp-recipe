
class Renderer{
    loadInfo(data) {
        const source = $("#recipes-template").html()
        const template = Handlebars.compile(source)        
        const newHtml = template({item: data})
        $("#recipesContainer").empty().append(newHtml)
    }
}