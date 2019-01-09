new Vue({
    el: '#nodepad',
    data: {
        input: record.obter(),
        displayPreview:true
    },
    computed: {
        compiledMarkdown: function () {
            var md       = window.markdownit();
            var rendered = md.render(this.input); 
            record.salvar(this.input);
            return rendered;
        }
    },
    methods: {
        togglePreview:function () {
            this.displayPreview=!this.displayPreview;
        },
        update: _.debounce(function (e) {
            this.input = e.target.value
        }, 300)
        
    },
    });