#Abriendo el archivp con with open
with open("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos\Curso_dalto.txt",encoding="UTF-8") as archivo:
  
#Leyendo el archivo
  print(archivo.read())
  
#Al abrirlo con with open no es necesario cerrar el archivo