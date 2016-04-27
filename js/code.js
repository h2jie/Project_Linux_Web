var argLs = 'Argumentos:\n -a--> No ignora archivos ocultos\n -l--> Lista el contenido con informacion extra\n '
argLs.replace('\n', '<br />')
new Vue({
  el: 'body',
  data:{
    message: '',

    comandos:[
      {nombre:'cd', descripcion:'Descripcion: Cambiar de carpetas', flags:''},
      {nombre:'yum', descripcion:'Descripcion: Instalar paquetes', flags:''},
      {nombre:'ls', descripcion:'Descripcion: listar contenido de un directorio', arg:argLs}
    ]
  },
})
