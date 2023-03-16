with open("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos\Curso_dalto.txt","a",encoding="UTF-8") as archivo:
  
  #Agregando 5 lineas al archivo txt sin borrar lo que ya hay en el 
  for i in range(5):
    archivo.write(f"Linea {i+1} agregada \n")
  