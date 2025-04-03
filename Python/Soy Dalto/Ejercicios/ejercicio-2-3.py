#Creamos una funcion que cumpla la serie de fibonacci

def fibonacci(num):
  numeros = [0,1]
  for i in range(1,num):
    numero = numeros[i] + numeros[i - 1] 
    if numero < num:
      numeros.append(numero) 
    else:
      return numeros

print(fibonacci(100))
