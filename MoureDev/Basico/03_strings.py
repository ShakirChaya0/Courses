# String

my_string = "Mi string"
my_other_string = "Mi otro String"

print(len(my_string))
print(len(my_other_string))

my_new_line_string = "Este es un String \ncon salto de línea"
my_tab_string = "\tEste es un String con tabulción"


#Formateo 

name, surname, age = "Shakir", "Chaya",17
print("Mi nombre es {} {} y mi edad es {}".format(name, surname, age))
print("Mi nombre es %s %s y mi edad es %d" % (name, surname, age))
print("Mi nombre es " + name + " " + surname + " y mi edad es " + str(age))
print(f"Mi nombre es {name} {surname} y mi edad es {age}")

#Desempaquetado de caracteres
language = "Phyton"
a, b, c, d, e, f = language
print(a,b,c,d,e,f)
# a = P | b = h | c = y | d = t | e = o | f = n |

#División
language_slice = language[1:3]
print(language_slice)

#Reverse
reverse_language = language[::-1]
print(reverse_language)

# Funciones del lenguaje

print(language.capitalize())
print(language.upper())
print(language.count("t"))
print(language.isnumeric())
print("1".isnumeric())
print(language.lower())
print(language.lower().isupper())
print(language.startswith("Py"))
print("Py" == "py")  # No es lo mismo
