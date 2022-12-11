let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

window.onload=function(){
  let aleatorioAnimal =Math.floor(Math.random()*3)+1;

  let aleatorioAcction =Math.floor(Math.random()*3)+1;

  let aleatorioTime = Math.floor(Math.random()*4)+1;
 

document.querySelector('body').innerHTML="<h1>"+who[aleatorioAnimal]+" "+what[aleatorioAcction]+" "+when[aleatorioTime]+"<h1/>"

}



