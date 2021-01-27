const argv=require(`./config/yargs`).argv;
const {crear,getListado,actualizar,borrar}=require(`./to-do/to-do`);
const colors=require(`colors`);


let comando=argv._[0];
switch(comando){
    case `crear`:
        let tarea=crear(argv.descripcion);
        tarea.then(result=>console.log(result));
    break;
    case `listar`:
        console.log(`mapa`);
        let listado =getListado();
        for(let tarea of listado){
            console.log(`=====To do=====`.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log(`===============`.green);
        }
    break;
    case `actualizar`:
        let actualizado =actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
    break;
    case `borrar`:
        let borrado =borrar(argv.descripcion);
        console.log(borrado);
    break;
    default:
        console.log(`tomatela`);
}