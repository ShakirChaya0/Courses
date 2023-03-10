#Creando diccionario con dict()
diccionario = dict(nombre="Shakir",apellido="Chaya",edad=17)

#Las listas no pueden ser claves y usamos frozenset para meter conjuntos
diccionario = {frozenset(["Shakir","Chaya"]): "Develloper"}

#Creando un diccionario con fromkeys()
diccionario = dict.fromkeys(["Nombre","Apellido"])

print(diccionario)