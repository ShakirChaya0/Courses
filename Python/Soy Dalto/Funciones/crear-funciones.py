#Creando una funcion simple

def saludar():
  print("Hola Shakir, ¿Como andas?")
  
#Ejecutando una funcion simple
saludar()


#Creando una funcion que tenga parametros
def saludo(nombre,sexo):
  sexo = sexo.lower()
  if (sexo == "mujer"):
    adjetivo = "amiga"
  elif (sexo == "hombre"):
    adjetivo = "amigo"
  else:
    adjetivo = 'crack'
  
  
  print(f'Hola {nombre}, mi {adjetivo} ¿Como estas?')
  
saludo("María","Mujer")
saludo("Pedro","Hombre")
saludo("Fran","No binario")



#Creando una funcion que nos retorne multiples valores
def crear_contraseña_random(num):
  chars = "abcdefghij"
  num_entero = str(num)
  num = int(num_entero[0])
  c1 = num - 2
  c2 = num
  c3 = num - 5
  contraseña = f"{chars[c1]}{chars[c2]}{chars[c3]}{num*2}"
  
  return (contraseña,num)

#Desempaquetando la función
password,primer_numero = crear_contraseña_random(4)

#Mostrabdo los resultados obtenidos y los datos utilizados para obtenerlos
print(f'Tu contraseña nueva es: {password}')
print(f'El numero utilizado para crearla fue: {primer_numero}')