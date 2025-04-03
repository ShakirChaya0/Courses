#Funciona para listas, tuplas y conjuntos

animales = ["gato","perro", "loro","cocodrilo"]
numeros = [52,16,14,72]

#Recorriendo la lista animales
for animal in animales:
  print(f'Ahora la variable animal es igual a: {animal}')
  
#Recorriendo la lista numeros y multiplacando cada valor por 10
for numero in numeros:
  resultado = numero * 10
  print(resultado)
  
#Iterando dos listas del mismo tamaño al mismo tiempo 
for numero,animal in zip(animales,numeros):
  print(f'Recorriendo lista 1: {numero}')
  print(f'Recorriendo lista 2: {animal}')
  
#Recorriendo un rango de numeros
for num in range(5,10):
  print(num)
  
#Forma no optima de recorrer una lista con su indice . No funciona en conjuntos
for num in range(len(numeros)):
  print(numeros[num])
  
#Forma correcta de recorrer una lista con su indice
for num in enumerate(numeros):
  indice = num[0]
  valor = num[1]
  print(f'El indice es: {indice} y el valor es: {valor}')
  
#Usando el for/else
for numero in numeros:
  print(f'Ejecutando el ultimo bucle, valor actual: {numero}')
else: 
  print("El bucle termino")
  