// descripciones de los comandos
var desc_cat = 'Nos permite visualizar el contenido de un archivo de texto sin la necesidad de un editor.';
var desc_ifconfig = 'Verifica el estado de la red';
var desc_ls = 'Permite listar el contenido de un directorio o fichero.';
var desc_top = 'Muestra los procesos de linux';
var desc_mkdir = 'Crea un directorio nuevo tomando en cuenta la ubicación actual.';
var desc_cp = 'Copia un archivo o directorio origen a un archivo o directorio destino. '

// contenido de las noticias
var cont_not1 = 'Pues sí: ayer se anunció el lanzamiento de Ubuntu 16.04 LTS Xenial Xerus y hoy os contamos las novedades. Sin prisa, pero sin pausa. Sin embargo, ya sabéis que el propósito de las versiones LTS no es el de deslumbrar con nuevas características, sino el de ofrecer un sistema estable y sobre todo de soporte prolongado: hasta 2021, cinco años; ergo, cuanto más tiempo pase y más actualizaciones reciba, más estable será. A nadie se le debería escapar que esa es la principal fortaleza e interés de Ubuntu 16.04 LTS (de ahí que nos empeñemos en acompañar la numeración con el LTS casi sin excepción).'

var cont_not2 = 'OpenExpo 2016 concentrará en Madrid el próximo 2 de junio a empresas representativas del mundo de las tecnologías abiertas nacionales e internacionales (provenientes de países como Italia, Reino Unido, Francia y Portugal). Estas empresas participantes consiguen abarcar todo el espectro de soluciones de tecnologías Open Source del mercado.'

var cont_not3 = 'Hoy se anunciado el lanzamiento de Electron 1.0, un framework diseñado para crear aplicaciones multiplataforma para el escritorio empleando HTML, CSS y JavaScript. Dicho de otro modo, sirve para crear webapps que puedan ejecutarse en GNU/Linux, Windows y Mac.'

//imagenes de las noticias
var img_not1 = '../media/images/noticia/ubuntuLTS.jpg'
var img_not2 = '../media/images/noticia/openexpo.jpg'
var img_not3 = '../media/images/noticia/electron-1.0.jpg'


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
      {nombre:'Las novedades de Ubuntu 16.04 LTS', descripcion: cont_not1, imagen:img_not1},
      {nombre:'OpenExpo 2016 calienta motores',    descripcion: cont_not2, imagen:img_not2},
      {nombre:'Disponible Electron 1.0',           descripcion: cont_not3, imagen:img_not3},
    ],
    activeNews: 'Las novedades de Ubuntu 16.04 LTS'

  },
  methods: {
    setActiveNews: function(newsName){
      this.activeNews = newsName;
    },
    isActive: function(newsName){
      return (this.activeNews==newsName);
    }
  },
})
