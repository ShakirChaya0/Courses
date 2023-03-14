numeros = [4,7,1,42,15]


#Encontrando el numero mayor de una lista
numero_mas_alto = max(numeros)
print(numero_mas_alto)


#Encontrando el numero menor de una lista
numero_mas_bajo = min(numeros)
print(numero_mas_bajo)


#Redondeando a 6 decimales
numero = round(12.345678,2)
print(numero)

#Retorna False -> 0, vacio, False, ninguno / True -> distinto a 0, True, cadena, datos no vacios
resultado_bool = bool([13,123]) 

print(resultado_bool)

#Retorna True, si todos los valors son verdaderos
resultado_all = all([0,"true",[344,23]])

print(resultado_all)

#Suma todos los valores de un iterable
suma_total = sum(numeros)

print(suma_total)