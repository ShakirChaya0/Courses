diccionario = {
  'nombre' : "Shakir",
  'apellido' : "Chaya",
  'edad' : 17
}
claves = diccionario.keys() #Devuelve un objecto dict_item
obtener = diccionario.get("edad") #Obtiene el valor de un elemento
Eliminar = diccionario.pop("nombre")
diccionario_iterable = diccionario.items()


print(claves)
print(obtener)
print(diccionario)
print (diccionario_iterable)


diccionario.clear() #Elimina todos los elementos del diccionario

print(diccionario)


