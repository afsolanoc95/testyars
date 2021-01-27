const opts={
    descripcion:{
        demand:true,
        alias:`d`
    },
    completado:{
        alias:`c`
    }
}
const descripcion={
    demand:true,
    alias:`d`
};
const argv=require(`yargs`).command(`crear`,`crear elemento por hacer`,opts)
.command(`actualizar`,`genera archivo`,opts)
.command(`listar`,`listar archivo`,)
.command(`borrar`,`borrar tarea`,{descripcion}).help().argv;

module.exports={
    argv
}