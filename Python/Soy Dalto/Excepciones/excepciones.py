#Creando una función que suma dos numeros
def sumar_dos():
  #Iniciando un bucle
  while True:
    #Pidiendo numeros
      a = input("Numero 1: ")
      b = input("Numero 2: ")
      #Intentandos convertirlos a enteros y sumarlos
      try: 
        resultado = int(a) + int(b)
      #Si lanzo una excepcion, pedimos que reingrese los datos
      except Exception as e:
        print("Te pedi un numero salame")
        print(f"ERROR: {type(e)}")
        print(f"ERROR: {e}")
      #Si todo salio bien terminamos el buclase
      else:
        break
      finally:
        print("Manejo de excepcion finalizado")
        
  return resultado
  
print(sumar_dos())
      