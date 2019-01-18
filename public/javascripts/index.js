var page = record.corrente();
var list = record.todos();
new Vue({
    el: '#nodepad',
    data: {
        titulo: page.titulo,
        texto: page.texto,
        gravados:list,
        displayPreview:true
    },
    computed: {
        compiledMarkdown: function () {
            var md       = window.markdownit();
            var rendered = md.render(this.texto); 
            record.salvar(page.id,this.titulo,this.texto);
            return rendered;
        }
    },
    methods: {
        selectText:function(pId){
            var item=record.porId(pId);
            this.titulo=item.titulo;
            this.texto=item.texto;
        },
        novoTexto:function(){
            console.log(record.todos());
            var n = record.novoTexto();
            this.gravados=record.todos();
            this.titulo=n.titulo;
            this.texto=n.texto;
            console.log(record.todos());
        },
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