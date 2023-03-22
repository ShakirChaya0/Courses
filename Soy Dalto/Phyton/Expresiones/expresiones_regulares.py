import re

texto = '''Hola maestro, esta es la cadena 1. como estas
Esta es la linea  2 de texto
Y Esta es la 3 abababa abababab ab
2323412 hola'''

#Haciendo una busqueda simple
resultado = re.search("Hola",texto)

#\d -> Busca digitos numericos del 1 al 9
resultado1 = re.findall(r"\d",texto)

#\D -> Busca TODO, Menos numericos del 1 al 9
resultado2 = re.findall(r"\D",texto)

#\w -> Busca caracteres alfanumericos [a-z A-Z 0-9 _]
resultado3 = re.findall(r"\w",texto)

#\w -> Busca TODO Menos caracteres alfanumericos [a-z A-Z 0-9 _]
resultado4 = re.findall(r"\W",texto)

#\s -> Busca espacios en blanco -> espacios, tabs, saltos en linea
resultado5 = re.findall(r"\s",texto)

#\S -> Busca TODO Menos espacios en blanco -> espacios, tabs, saltos en linea
resultado6 = re.findall(r"\S",texto)

#. -> Busca TODO Menos saltos de linea
resultado7 = re.findall(r".",texto)

#\n -> Busca saltos en linea
resultado8 = re.findall(r"\n",texto)

#\ -> Cancelar caracteres especiales
resultado9 = re.findall(r"\.",texto)

#Armando una cadena que busque un numero, seguido de un punto y un espacio 
resultado10 = re.findall(r"\d\.\s",texto)

#^ -> busca el principio de una linea con. flags=re.M activa la multilinea
resultado11 = re.findall(r"^Esta",texto,flags=re.M)

#$ -> busca el final de una linea 
resultado12 = re.findall(r"hola$",texto)

#{n} -> busca n cantidad de veces eñ valor de la izquierda (3 numeros juntos esta vez) 
resultado13 = re.findall(r"\d{3}",texto)

#{n,m} -> al menos n, como máximo m
resultado14 = re.findall(r"\d{1,4}",texto)
resultado15 = re.findall(r"(ab){1,4}",texto)
resultado15 = re.findall(r"[ab]{1,4}",texto)

# | -> busca una cosa o la otra 
resultado16 = re.findall (r"\d{2,4}|Hola",texto)

print(resultado16) 