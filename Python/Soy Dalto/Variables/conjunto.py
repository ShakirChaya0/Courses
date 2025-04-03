#Creando un conjunto con set()
conjunto = set(["Dato 1", "Dato 2"])

#Metiendo un conjunto dentro de otro conjunto
conjunto1 = frozenset(["dato 1", "dato 2"])
conjunto2 = {conjunto1, "dato 3"}
print(conjunto2)

#Teoría de conjuntos

conjunto1 = {1,3,5,7}
conjunto2 = {1,3,7}

#Verificando si es un sub conjunto
resultado = conjunto2.issubset(conjunto1)
resultado = conjunto2 <= conjunto1

print(resultado)

#Verificando si es un sub conjunto
resultado = conjunto1.issuperset(conjunto2)
resultado = conjunto1 >= conjunto2

print(resultado)

#Verificar si hay algun número en común
conjunto1 = {1,3,5,7}
conjunto2 = {2,4,6,8}

resultado = conjunto2.isdisjoint(conjunto1)

print(resultado)