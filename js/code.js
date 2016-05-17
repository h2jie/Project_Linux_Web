// //Argumentos de los comandos
// var arg_cat = "cat > archivo.txt --> Si no eiste lo crea y edita y si existe lo sobreescribe";
// var arg_ifconfig = "ifconfig -a --> Muestra todas las interfaces de red aunque esten caidas\n ifconfig -s --> Muestra una lista pequeña de interfaces";
// var arg_ls = "Permite listar el contenido de un directorio o fichero.";
// var arg_top = "Muestra los procesos de linux";
// var arg_mkdir = "Crea un directorio nuevo tomando en cuenta la ubicación actual.";
// var arg_cp = "Copia un archivo o directorio origen a un archivo o directorio destino. ";
//
// var salto = document.getElementsByTagName('<br>')
// var arg_ifconfig = arg_ifconfig.replace('\n', salto);


// descripciones de los comandos
var desc_cat = 'Nos permite visualizar el contenido de un archivo de texto sin la necesidad de un editor.';
var desc_ifconfig = 'Verifica el estado de la red';
var desc_ls = 'Permite listar el contenido de un directorio o fichero.';
var desc_top = 'Muestra los procesos de linux';
var desc_mkdir = 'Crea un directorio nuevo tomando en cuenta la ubicación actual.';
var desc_cp = 'Copia un archivo o directorio origen a un archivo o directorio destino. '

// contenido de las noticias
var cont_not1 = 'Pues sí: ayer se anunció el lanzamiento de Ubuntu 16.04 LTS Xenial Xerus y hoy os contamos las novedades. Sin prisa, pero sin pausa. Sin embargo, ya sabéis que el propósito de las versiones LTS no es el de deslumbrar con nuevas características, sino el de ofrecer un sistema estable y sobre todo de soporte prolongado: hasta 2021, cinco años; ergo, cuanto más tiempo pase y más actualizaciones reciba, más estable será. A nadie se le debería escapar que esa es la principal fortaleza e interés de Ubuntu 16.04 LTS (de ahí que nos empeñemos en acompañar la numeración con el LTS casi sin excepción).'





//imagenes de las noticias
var img_not1 = '../media/images/noticia/noticia1/1.jpg'



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
      {nombre:'cat',      descripcion:desc_cat,      demos:demo_cat,      arg:''},
      {nombre:'ifconfig', descripcion:desc_ifconfig, demos:demo_ifconfig, arg:''},
      {nombre:'ls',       descripcion:desc_ls,       demos:demo_ls,       arg:''},
      {nombre:'top',      descripcion:desc_top,      demos:demo_top,      arg:''},
      {nombre:'mkdir',    descripcion:desc_mkdir,    demos:demo_mkdir,    arg:''},
      {nombre:'cp',       descripcion:desc_cp,       demos:demo_cp,       arg:''},
    ],
    noticias:[
      {visible: false, nombre:'Las novedades de Ubuntu 16.04 LTS', descripcion: cont_not1, imagen:img_not1},
      {visible: false, nombre:'noticia2', descripcion: 'noticia2 descripcion'},
      {visible: false, nombre:'noticia3', descripcion: 'noticia3 descripcion'},
      {visible: false, nombre:'noticia4', descripcion: 'noticia4 descripcion'},
      {visible: false, nombre:'noticia5', descripcion: 'noticia5 descripcion'},
      {visible: false, nombre:'noticia6', descripcion: 'noticia6 descripcion'},
      {visible: false, nombre:'noticia7', descripcion: 'noticia7 descripcion'},
      {visible: false, nombre:'noticia8', descripcion: 'noticia8 descripcion'},
      {visible: false, nombre:'noticia9', descripcion: 'noticia9 descripcion'},
    ],

  },
  methods: {
    toggleNews: function(noticia){
      noticia.visible = !noticia.visible;
    }
  },
})
