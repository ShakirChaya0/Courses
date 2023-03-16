with open("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos\Curso_dalto.txt","w",encoding="UTF-8") as archivo:
  
  #Sobreescribiendo el archivo
  archivo.write("Añadiendo una linea desde escribir_txt con el metodo .write \n")
  
  #Agregando 2 lineas con writelines
  archivo.writelines(["Añadiendo una linea desde escribir_txt con el metodo .writelines \n","Jajajaja \n"])
  
  #Agregando 2 lineas con writelines
  archivo.writelines(["Añadiendo 2 lineas mas \n","Jajajaja \n"])