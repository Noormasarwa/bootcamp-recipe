const renderer = new Renderer()
const model = new Model()
$('button').on('click', function () {
    const ingredient = $('input').val()
    if (!ingredient) {
        return
    }
    model.loadIngredient(ingredient).then(data => renderer.render(data))
})


$('#container').on('click', 'img', function () { 
    alert($(this).siblings('ul').find('li').html())
})
