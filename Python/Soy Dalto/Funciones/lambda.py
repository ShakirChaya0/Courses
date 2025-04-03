numeros = [1,2,3,4,5,6,7,8,9,11,13,14,15,20]

#Creando una funcion lambda para multiplicar por 2
multiplicas_por_dos = lambda x : x*2
print(multiplicas_por_dos(5))

#Creando una funcion comun que diga si es par o no
def es_par(num):
  if (num % 2 == 0 ):
    return True
def es_impar(num):
  if (num % 2 == 1 ):
    return True

#Usando filter con una funcion comun
numeros_pares = filter(es_par,numeros)
numeros_impares = filter(es_impar,numeros)

print(list(numeros_pares))
print(list(numeros_impares))

#Simplificando la misma funcion pero con lambda

numeros_pares = filter(lambda numero:numero%2 == 0, numeros)
numeros_impares = filter(lambda numero:numero%2 == 1, numeros)

print(list(numeros_pares))
print(list(numeros_impares))

