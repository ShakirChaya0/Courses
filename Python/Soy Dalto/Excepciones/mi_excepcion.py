#Creando mi propia excepcion personalizada
class MiExcepcion(Exception):
  def __init__(self,err):
    print(f"Impresionate, cometiste el siguiente error: {err}")


#Manejandola
try:
  raise MiExcepcion("jajajajaja, persona poco culta")
except:
  print("Como vas a cometer ese error")

#Lanzando mi propia excepcion
raise MiExcepcion("Jajajajaja, persona poco culta")