# Functions

def my_function(num):
  for i in range(0,num):
    print("hola")
    
my_function(3)

print("------------------------")

def sum_two_values(num1, num2):
  print(num1 + num2)

sum_two_values(2,5)

print("------------------------")

def return_sum(num1, num2):
  return num1 + num2

my_result = return_sum(1,5)

print(return_sum(1, 3))

print("------------------------")

def print_name(name, surname):
  print(f"{name}, {surname}")

print_name(surname = "Chaya", name = "Shakir")

print("------------------------")

def name_with_default(name, surname, alias = "Sin alias"):
  print(f"{name}, {surname}. {alias}")

name_with_default("Shakir", "Chaya", "ShakirDev")
name_with_default("Shakir", "Chaya")

print("------------------------")




