#Falto el profesor y los alumnos van a armar su propia clase.


#Creamos una funcion para obtener al asistente y al profesor segun la edad.
def obtener_compañeros(cantidad_de_compañeros):
  
  #Creando la lista con los compañeros
  compañeros = []
  
  #Ejecutando un for para pedir informacion de cada compañero
  for i in range(cantidad_de_compañeros):
    nombre = input("Ingrese el nombre del compañero: ")
    edad = int(input("Ingrese la edad del compañero: "))
    compañero = (nombre,edad)
    
    #Agregando la informacion a la lista
    compañeros.append(compañero)
    
  #Ordenandolos de menor a mayor segun su edad
  compañeros.sort(key=lambda x:x[1])
  
  #Compañeros[x] devuelve una tupla con (nombre,edad) y despues accedemos al nombre 
  #Para definir al asistente y al profesor
  asistente = compañeros[0][0]
  profesor = compañeros[-1][0]
  
  #Retornamos una tupla
  return asistente,profesor

#Desempaquetamos lo que nos retorna la funcion
asistente,profesor = obtener_compañeros(5)

#Mostramos el resultado
print(f"El profesor es: {profesor} y su asistente es: {asistente}")


  