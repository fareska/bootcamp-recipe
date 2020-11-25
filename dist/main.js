const renderer = new Renderer()

const getFood = function() {
    const input = $("#input").val()
    $("#input").val("")
    
    $.get(`/recipes/${input}`, function(foodData){        
        renderer.loadInfo(foodData)
    })
}

$('#recipesContainer').on('click',".pic" ,function() {
    const text = ($(this)).next().find(".list")[0].innerText
    alert(text)
})
