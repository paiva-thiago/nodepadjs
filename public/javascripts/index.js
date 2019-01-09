new Vue({
    el: '#nodepad',
    data: {
        input: record.obter()
    },
    computed: {
        compiledMarkdown: function () {
            console.log(this.input);
            var md       = window.markdownit();
            var rendered = md.render(this.input); 
            record.salvar(this.input);
            console.log(rendered);
            return rendered;
        }
    },
    methods: {
        update: _.debounce(function (e) {
        this.input = e.target.value
        }, 300)
    }
    });