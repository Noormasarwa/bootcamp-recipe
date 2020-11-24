class Model {

    loadIngredient(ingredient){
        return $.get(`/recipes/${ingredient}`, function(data){
            return data;
        })
    }
}