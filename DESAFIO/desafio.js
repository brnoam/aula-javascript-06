var mensagemSecreta = ['Aprender',
'não','é','Sobre','o','que','você','consegue','facilmente','na','primeira','vez','mas','sobre','o','que','você','pode','descobrir.','- 2015,','Chris','Pine,','Aprenda','JavaScript.']




mensagemSecreta.pop();
mensagemSecreta.push ("a","programar.")
mensagemSecreta.splice (8,1,"certo")
mensagemSecreta.shift ();
mensagemSecreta.unshift ("Programação");
mensagemSecreta.splice (7,1,"sabe,") 
mensagemSecreta.splice (8,4)

console.log(mensagemSecreta.join("  " ) )

