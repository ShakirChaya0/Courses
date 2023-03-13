diccionario = {
  'nombre' : "Shakir",
  'apellido' : "Chaya",
  'edad' : "17"
}

#Recorriendo un diccionario  para obtener las claves 
for key in diccionario:
  print(f'La clave es: {key}')
  
  
#Recorriendo un diccionario con items() para obtener la clave y los valores
for datos in diccionario.items():
  key = datos[0]
  value = datos[1]
  print(f'La clave es: {key} y el valor es: {value}')