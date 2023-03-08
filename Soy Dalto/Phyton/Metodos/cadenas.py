cadena1 = "Hola,soy,Shakir"
cadena2 = "Bienvenido"

#Convierte a mayusculas
mayusc = cadena1.upper()

#Convierte a minusculas
minusc = cadena1.lower()

#Convierte la primer letra a mayuscula
primer_letra_mayusc = cadena1.capitalize()

#Buscamos una cadena en otra cadena, si no hay coincidencias devuelve -1
busqueda_find= cadena1.find("a")

#Buscamos una cadena en otra cadena, si no hay coincidencias nos da error
busqueda_index = cadena1.index("S")

#Si es numerico, devolvemos True, si no devolvemos False 
es_numerico = cadena1.isnumeric()

#Si es alfanumerico, devolvemos True, si no devolvemos False (Es alfa numerico si no tiene espacios)
es_alfanumerico = cadena1.isalpha()

#Contamos las coincidencias de una cadena, dentro de otra cadena y devuelve la cantidad de coincidencias
contar_coincidencia = cadena1.count("Hola")

#Contamos cuantos caracteres tiene una cadena 
contar_caracteres = len(cadena1)

#Verificamos si una cadena empieza con otra cadena dada, si es asi devuelve True
empieza_con = cadena1.startswith("H")

#Verificamos si una cadena termina con otra cadena dada, si es asi devuelve True
termina_con = cadena1.endswith("Shakir")

#Remplaza un pedazo de la cadena dada, por otra dada
cadena_nueva = cadena1.replace(",", " ")

#Separar cadenas con la cadena que le pasemos
cadena_separada = cadena1.split(",")

print(mayusc)
print(minusc)
print(primer_letra_mayusc)
print(busqueda_find)
print(busqueda_index)
print(es_numerico)
print(es_alfanumerico)
print(contar_coincidencia)
print(contar_caracteres)
print(empieza_con)
print(termina_con)
print(cadena_nueva)
print(cadena_nueva)
print(cadena_separada)

