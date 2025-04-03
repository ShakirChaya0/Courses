lista = ["hola", "shakir", 17]
lista2 = [17, 71, 3,True, False]

#Devuelve la cantidad de elementos de una lista
resultado = len(lista)

print(resultado)

#Agrega un elemento a la lista 
lista.append("JAJAJAJA")

print(lista)

#Agrega un elemento a la lista en un indice especifico
lista.insert(2,"TOMA")

print(lista)

#Agrega varios elementos a la lista
lista.extend([False,2023])

print(lista)

#Elimina un elemento de la lista
lista.pop(3) #-1 para eliminar el ultimo, -2 el anteultimo y asi sucesivamente

print(lista)

#Remueve un elemento de la lista por su valor
lista.remove("TOMA")

print(lista)

#Elimina todos los elemento de la lista
lista.clear()

print(lista)

#Ordena la lista, reverse=True lo ordena al reves
lista2.sort() 

print(lista2)

#Invierte los elementos
lista2.reverse()

print(lista2)



#Las tuplas en cambio solo se pueden contar y buscar elementos en ella
metodos_de_tuplas = dir(["Jajaja", 71])
print(metodos_de_tuplas)

#Los Conjuntos se pueden sacar y remover elementos
metodos_de_tuplas = dir({"jaja", 3})
print(metodos_de_tuplas)

