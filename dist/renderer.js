class Renderer {

        constructor() {
            this.source = $('#recipeT').html();
            this.template = Handlebars.compile(this.source);
        }
    
        render(data) {
            const newHTML = this.template({ recipes: data });
            $('#container').empty().append(newHTML);
        }
    }