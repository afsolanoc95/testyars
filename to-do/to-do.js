const {writeFile}= require(`fs`);
let listToDo=[];
const guardarDB =async()=>{
    let data = JSON.stringify(listToDo);
    writeFile(`db/data.json`,data,(err)=>{
        if (err) throw new Error(`no grabo ${err}`);
    })
}
const cargar=()=>{
    return new Promise((resolve,reject)=>{
        listToDo = require(`../db/data.json`);    
    }
    ).catch((err)=>{
        listToDo=[];
    });
}
const crear = async (descripcion)=>{
    cargar();
     letToDo={
        descripcion,
        completado:false
     };
     listToDo.push(letToDo);
    await guardarDB();
     return letToDo;
}
const getListado=()=>{
    cargar();
    return listToDo;
}

const actualizar=(descripcion,completado=true)=>{
    cargar();
    let index=listToDo.findIndex(tarea=> tarea.descripcion==descripcion)
    if(index >= 0){
        listToDo[index].completado=completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}
const borrar=descripcion=>{
    cargar();
    let listnew=listToDo.filter(tarea=> tarea.descripcion !==descripcion)
    if(listToDo.length == listnew.length){
        return false;
    }else{
        listToDo=listnew;
        guardarDB();
        return true;
    }
}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}