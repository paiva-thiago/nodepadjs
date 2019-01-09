const record = {
    salvar : function(txt){
        localStorage.setItem('texto',txt);
    },
    obter : function(){
        if((localStorage.getItem('texto')==undefined)||(localStorage.getItem('texto').trim()=='')){
            localStorage.setItem('texto','# olá mundo! \n\n Comece a escrever aqui');
        }
        return localStorage.getItem('texto');

    }
}