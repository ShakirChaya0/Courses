# Loops 

# While 

my_bucle = 0

while my_bucle <= 10:
  print(my_bucle)
  my_bucle += 2
else: # Es opcional
  print("Ya no se cumple mas la condición del bucle while")

print("--------------------------")

while my_bucle < 20:
  if my_bucle < 16:
    print("Mi condición es menor que 16")
  elif my_bucle > 16:
    print("Mi condición es mayor que 16")
  print(my_bucle)
  my_bucle += 3

print("------------------------")
# For

#Listas
my_list = [35, 24, 62, 52, 30, 30, 17]

for element in my_list:
  print(element)

#Tuplas
my_tuple = (17, 1.81, "Shakir", "Chaya", "Shakir")

for element in my_tuple:
  print(element)
  
#Conjuntos
my_set = {"Shakir", "Chaya", 17}

for element in my_set:
  print(element)

#Diccionario
my_dict = {
    "Nombre": "Shakir",
    "Apellido": "Chaya",
    "Edad": 17,
    "Lenguajes": {"Python", "CSS", "JavaScript"},
    1: 1.81
}
print("---------------")
for element in my_dict.values():
  print(element)
  if element == "Chaya":
    break
else:
  print("El bucle terminó")
