import re

#Detectando un numero en CABA y ocultandolo 
texto = "Hola Juan, mi numero es: +54 11 4321-4321"

pattern = r"\+\d{2}\s\d{2}\s\d{4}\-\d{4}"

resultado = re.findall(pattern, texto)
remplazo = re.sub(pattern,"Número oculto", texto)

print(remplazo)