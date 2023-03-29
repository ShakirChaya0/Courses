# Exception Handling 

number_one = 5
number_two = "1"

# try except 
try: #Intenta hacer algo sin devolver una excepción en caso de no poder hacerse
  print(number_one + number_two)
  print("No se ha producido error")
except: #Se ejecuta si se produce una excepción
  print("Se ha producido error")

print("----------------------")

# try except else finally
number_two = 1

try:
  print(number_one + number_two)
  print("No se ha producido error")
except: 
  print("Se ha producido error")
else: #Opcional
  #Se ejecuta si no se produce una excepción
  print("La ejecución continúa correctamente")
finally: #Opcional
  #Se ejecuta siempre al final
  print("Finalmente termino")

print("----------------------")

# Excepciones por tipo
number_two = "1"

try:
  print(number_one + number_two)
  print("No se ha producido error")
except ValueError:
  #Se ejecuta si se produce un error
  print("Se ha producido un ValueError")
except TypeError:
  #Se ejecuta si se produce un error
  print("Se ha producido un TypeError")

print("----------------------")

# Captura de la información de la excepción

try:
  print(number_one + number_two)
  print("No se ha producido error")
except ValueError as e:
  #Se ejecuta si se produce un error
  print(f"Se ha producido un {e}")
except Exception as exception:
  print(exception)