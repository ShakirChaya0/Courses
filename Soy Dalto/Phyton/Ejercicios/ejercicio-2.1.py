#Falto el profesor y los alumnos van a aramar su propia clase


#Pedir el nombre y la edad de los compañeros que vinieron a clases
def obtener_compañeros(cantidad):
  compañeros = []
  for i in range(cantidad_de_compañeros):
    nombre = input("Ingrese el nombre")
    edad = int(input("Ingrese la edad"))
    compañero = (nombre,edad)
    compañeros.append(compañero)
  compañeros.sort(key=lambda x:x[1])