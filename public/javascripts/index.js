var page = record.corrente();
new Vue({
    el: '#nodepad',
    data: {
        titulo: page.titulo,
        texto: page.texto,
        displayPreview:true
    },
    computed: {
        compiledMarkdown: function () {
            var md       = window.markdownit();
            var rendered = md.render(this.texto); 
            record.salvar(record.corrente().id,this.titulo,this.texto);
            return rendered;
        }
    },
    methods: {
        togglePreview:function () {
            this.displayPreview=!this.displayPreview;
        },
        update: _.debounce(function (e) {
            this.texto = e.target.value
        }, 300),
        updateTitle: _.debounce(function (e) {
            this.titulo = e.target.value
        }, 300)
        
    },
    });