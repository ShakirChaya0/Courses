#Creando una funcion de 3 parametros

def frase(nombre,apellido,adjetivo):
  return f'Hola {nombre} {apellido}, sos muy {adjetivo}'

frase_resultante = frase("Shakir","Chaya","inteligente")
print(frase_resultante)

#Utilizando keywords arguments
frase_resultante = frase(adjetivo = "Crack",nombre = "Shakir", apellido= "Chaya")
print(frase_resultante)

#Creando la misma funcion con un parametro opcional y un valor por defecto 
def frase(nombre,apellido,adjetivo = "capo"):
  return f'Hola {nombre} {apellido}, sos muy {adjetivo}'

frase_resultante = frase("Shakir","Chaya", adjetivo = "Capo")
print(frase_resultante)