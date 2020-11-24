

const getFood = function() {
    const input = $("#input").val()
    $("#input").val("")
    $.get(`/recipes/${input}`, function(foodData){        
        render(foodData)
    })
}