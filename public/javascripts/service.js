const PARAM         = 'data';
const CURR_ID       = 'currentId';

const text  = function(pId,pTitulo,pTexto){
    return {
        id:pId,
        titulo:pTitulo,
        texto:pTexto
    };
} 



const init = function(){
    var data = [];
    var id   = new Date().getTime().toString();
    var item = text(id,'Novo Texto','# olá mundo! \n\n Comece a escrever aqui! \n\n -- \n\n Nodepad 2019');
    data.push(item);
    localStorage.setItem(PARAM,JSON.stringify(data));
    localStorage.setItem(CURR_ID,id);
}

const record = {    
    todos: function(){
        if((localStorage.getItem(PARAM)==undefined)||(localStorage.getItem(PARAM).trim()=='')){
            init();
        }
        return JSON.parse(localStorage.getItem(PARAM));
    },
    porId: function(pId){       
        var data = this.todos();
        var item = data[0];        
        if((pId!=null)&&(pId!=undefined)){
            idx = data.findIndex(function(i){ return i.id==pId});        
            if(idx==-1){
                console.error('Texto não encontrado!');
                item = undefined;
            }else{
                localStorage.setItem(CURR_ID,data[idx]);
                item = data[idx];
            }
        }
        return item;                    
    },
    corrente:function(){
        var id = localStorage.getItem(CURR_ID);
        var item = this.porId(id);
        if(item==undefined){
            return  text(id,'Novo Texto','# olá mundo! \n\n Comece a escrever aqui! \n\n -- \n\n Nodepad 2019');
        }
        return item;
    },
    novoTexto:function(){ 
        var novoId=new Date().getTime();        
        var item =  text(novoId,'Novo Texto','# olá mundo! \n\n Comece a escrever aqui! \n\n -- \n\n Nodepad 2019');        
        localStorage.setItem(CURR_ID,novoId);
        return item;
     },
    salvar : function(pId,pTitulo,pTexto){
        var arrTodos  = this.todos();
        var old       = this.porId(pId);
        var arrNovo   = arrTodos.filter(function(i){ return i.id!=pId});
        var neo = text(pId,pTitulo,pTexto);
        arrNovo.push(neo);        
        localStorage.setItem(PARAM,JSON.stringify(arrNovo));
    }
}