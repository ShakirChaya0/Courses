# Tuplas 

# Definición

my_tuple = tuple()
my_other_tuple = ()

my_tuple = (17, 1.81, "Shakir", "Chaya", "Shakir")
my_other_tuple = (35, 60, 30)

print(my_tuple)
print(type(my_tuple))

# Acceso a elementos y búsqueda

print(my_tuple[0])
print(my_tuple[-1])


print(my_tuple.count("Chaya"))
print(my_tuple.index("Shakir"))
print(my_tuple.index("Chaya"))


# Concatenación

my_sum_tuple = my_tuple + my_other_tuple
print(my_sum_tuple)

# Subtuplas

print(my_sum_tuple[3:6])

# Tupla mutable con conversión a lista

my_tuple = list(my_tuple)
print(type(my_tuple))

my_tuple[4] = "ShakirDev"
my_tuple.insert(1, "Blanco")
my_tuple = tuple(my_tuple)
print(my_tuple)
print(type(my_tuple))

