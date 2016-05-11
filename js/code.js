//Argumentos de los comandos
argumentos=[
  arg_cat = "cat > archivo.txt --> Si no eiste lo crea y edita y si existe lo sobreescribe",
  arg_ifconfig = "ifconfig -a --> Muestra todas las interfaces de red aunque esten caidas\n ifconfig -s --> Muestra una lista pequeña de interfaces",
  arg_ls = "Permite listar el contenido de un directorio o fichero.",
  arg_top = "Muestra los procesos de linux",
  arg_mkdir = "Crea un directorio nuevo tomando en cuenta la ubicación actual.",
  arg_cp = "Copia un archivo o directorio origen a un archivo o directorio destino. ",
]

for (argumento in argumentos){
  argumento.replace("n", "o")
}

// descripciones de los comandos
var desc_cat = 'Nos permite visualizar el contenido de un archivo de texto sin la necesidad de un editor.';
var desc_ifconfig = 'Verifica el estado de la red';
var desc_ls = 'Permite listar el contenido de un directorio o fichero.';
var desc_top = 'Muestra los procesos de linux';
var desc_mkdir = 'Crea un directorio nuevo tomando en cuenta la ubicación actual.';
var desc_cp = 'Copia un archivo o directorio origen a un archivo o directorio destino. '



// videos de los comandos
var demo_cat = "../media/videos/demo_cat.webm";
var demo_top = "../media/videos/demo_top.webm";
var demo_ifconfig = "../media/videos/demo_ifconfig.webm";
var demo_ls = "../media/videos/demo_ls.webm";
var demo_mkdir = "../media/videos/demo_mkdir.webm";
var demo_cp = "../media/videos/demo_cp.webm";



//animaciones
Vue.transition('animacion',{
  enterClass: 'fadeInDown',
  leaveClass: 'fadeOutUp',
});
Vue.transition('animacion2',{
  enterClass: 'bounceInDown',
  leaveClass: 'fadeOutUp',
});

new Vue({
  el: 'body',
  data:{
    mostrar_comando: '',
    mostrar_linux: false,
    mostrar_GNU: false,
    mostrar_mensaje: false,
    comandos:[
      {nombre:'cat',      descripcion:desc_cat,      demos:demo_cat,      arg:argumentos[0]},
      {nombre:'ifconfig', descripcion:desc_ifconfig, demos:demo_ifconfig, arg:argumentos[1]},
      {nombre:'ls',       descripcion:desc_ls,       demos:demo_ls,       arg:argumentos.arg_ls},
      {nombre:'top',      descripcion:desc_top,      demos:demo_top,      arg:argumentos.arg_top},
      {nombre:'mkdir',    descripcion:desc_mkdir,    demos:demo_mkdir,    arg:argumentos.arg_mkdir},
      {nombre:'cp',       descripcion:desc_cp,       demos:demo_cp,       arg:argumentos.arg_cp},
    ],
  },
})
