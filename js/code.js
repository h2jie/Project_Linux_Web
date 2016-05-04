var demo_top = "media/videos/demo_top.webm";
var demo_ifconfig = "media/videos/demo_ifconfig.webm";
var demo_ls = "media/videos/demo_ls.webm";

new Vue({
  el: 'body',
  data:{
    message: '',

    comandos:[
      {nombre:'cat', descripcion:'Funcion: Nos permite visualizar el contenido de un archivo de texto sin la necesidad de un editor', demos:'' },
      {nombre:'ifconfig', descripcion:'Funcion: Verificar estado de la red', demos:demo_ifconfig},
      {nombre:'ls', descripcion:'Funcion: permite listar el contenido de un directorio o fichero', demos:demo_ls},
      {nombre:'top', descripcion:'Funcion: Muestra los procesos de linux', demos:demo_top},
    ],
  },
})
