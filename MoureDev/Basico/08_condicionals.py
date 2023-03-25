# Conditionals 

my_condition = False

if my_condition: #Para que el if funcione, la condición tiene que ser TRUE
  print("Se ejecuta la condición del if")
else: 
  print("La condición no se cumplio")


my_new_condition = 5 * 2

if my_new_condition > 10: 
  print("Es mayor que 10")
else:
  print("No es mayor que 10")


if my_new_condition > 9 and my_new_condition < 11:
  print("Es mayor que 9 y menor que 11")
else:
  print("No es mayor que 9 y menor que 11")


if my_new_condition > 9 or my_new_condition < 1:
  print("Es mayor que 9 o es menor que 1")
else:
  print("No es mayor que 9 ni tampoco es menor que 1") 
  

if my_new_condition > 10 and my_new_condition < 20:
    print("Es mayor que 10 y menor que 20")
elif my_new_condition == 10:
    print("Es igual a 10")
else:
  print("No se cumplio ninguno de los if")

my_string_vacio = "" #Un string vacío es False
my_string = "Mi cadena de texto"

if my_string_vacio:
  print("My cadena de texto esta vacía")
if not my_string_vacio:
  print("My cadena de texto esta vacía")

if my_string == "Mi cadena de textoooooo":
  print("Estas cadenas coinciden")