# Variables 

my_string_variable = "My String variable"
print(my_string_variable)

my_int_variable = 5
print(my_int_variable)

my_int_to_str_variable = str(my_int_variable)
print(type(my_int_to_str_variable))

my_bool_variable = False
print(my_bool_variable)

# Concatenación de variable en un print
print(my_string_variable,my_int_to_str_variable,my_bool_variable)
print("Este es el valor de:", my_bool_variable)

# Variables en una sola línea
name, surname, alias, age = "Shakir", "Chaya", "ShakirDev", 17
print(f"Me llamo: {name} {surname}. Mi edad es: {age}. Y mi alias es {alias}.")

# Algunas funciones del sistema
print(len(my_string_variable)) #Cuenta la cantidad de caraceres de una cadena

# Inputs
name = input("What is your name: ")
age = input("How old are you: ")

print(name)
print(age)

# Cambiamos su tipo
name = 35
age = "Shakir"
print(name)
print(age)

# ¿Forzamos el tipo?
address: str = "Mi dirección"
address = 32
address = 5
address = 1.2
print(type(address))

