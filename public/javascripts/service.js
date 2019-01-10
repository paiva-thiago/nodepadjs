const text  = function(pId,pTitulo,pTexto){
    return {
        id:pId,
        titulo:pTitulo,
        texto:pTexto
    };
} 

const novo = function(pId){
    return text(pId,'Novo Texto','# olá mundo! \n\n Comece a escrever aqui! \n\n -- \n\n Nodepad 2019');
}

const PARAM         = 'data';
const CURR_ID       = 'currentId';



const init = function(){
    var data = [];
    var id   = new Date().getTime();
    var item = novo(id);
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
        if(pId==undefined){
            pId=new Date().getTime();
        }
        var data = this.todos();
        var item = data.filter(function(i){ return i.id==pId});
        if(item==undefined){
            item=novo(pId);
            this.salvar(item.id,item.titulo,item.texto);
        }else{
            item=item[0];
        }
        return item;

    },
    corrente:function(){
        return this.porId(localStorage.getItem(CURR_ID));
    },
    salvar : function(pId,pTitulo,pTexto){
        var arrTodos  = this.todos();
        var old       = this.porId(pId);
        var arrNovo   = arrTodos.filter(function(i){ console.log(i.id+' != '+pId+' = '+(i.id!=pId)); return i.id!=pId});
        var neo = text(pId,pTitulo,pTexto);
        arrNovo.push(neo);        
        localStorage.setItem(PARAM,JSON.stringify(arrNovo));
    }
}