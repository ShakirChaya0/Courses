frutas = ["banana","manzana","ciruela","pera","naranja","granada","durazno"]
cadena = "Hola dalto"
numeros = [2,5,8,10]


#Evitando que se coma una granada con la sentencia continue
for fruta in frutas:
  if fruta == 'granada':
    continue
  print(f'Me voy a comer una: {fruta}')
  

#Evitar que el buvle siga ejecutandose
for fruta in frutas:
  print(f'Me voy a comer una: {fruta}')
  if fruta == 'pera':
    break
 
 #Recorrer una cadena de texto
for letra in cadena:
  print(letra)
  
  
#for en una sola linea de codigos
numeros_duplicados = [x*2 for x in numeros]
print(numeros_duplicados)


 