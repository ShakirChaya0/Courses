#Creando una Lista (Se pueden modificar)
lista = ["Shakir Chaya", "17", True, 1.82, "Shakir Chaya"]
#Creando una Tupla (No se puede modificar)
tupla = ("Shakir Chaya", "17", True, 1.82, "Shakir Chaya")

print(lista)
print(lista[0])

lista[3] = 1.75

print(lista)
#tupla[3] = 1.75 (No se puede)
print(tupla)

#Creando un conjunto Set (No se puede llamar a los elementos por indice, no almacena datos duplicados)

conjunto = {"Shakir Chaya", "17", True, 1.82, "Shakir Chaya"}
print(conjunto)

#Creando un Dict
diccionario = {
  'nombre' : "Shakir Chaya",
  'esta_emocionado' : True,
  'altura' : 1.82,
  'dato_duplicado' : "Shakir Chaya"
  }
print(diccionario['nombre'])