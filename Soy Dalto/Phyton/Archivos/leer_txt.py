archivo_sin_leer = open("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos\Curso_dalto.txt",encoding="UTF-8")

#Leer archivo completo
archivo = archivo_sin_leer.read()

#Leer linea por linea
lineas = archivo_sin_leer.readlines()

#Leer una sola linea
linea = archivo_sin_leer.readline(1)

#Cerrar el archivo
archivo_sin_leer.close()

print(archivo)


