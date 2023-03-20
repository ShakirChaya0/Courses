#Creando 2 listas, una con nombres, otra con apellidos
nombres = ["Shakir", "Pedro","Camila","Lucas","Juan"]
apellidos = ["Chaya","Zing","Dalto","Rotre","tatan"]

#Registrar informacion en un txt de forma optima

with open("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos-problemas\Escribiendo.txt","w") as arch:
  
  arch.writelines("Los datos son: \n\n")
  
#Como lo hice yo
  for i in range(0,len(nombres)):
    arch.writelines("--------------- \n")
    arch.writelines(f"Nombre: {nombres[i]},\nApellido: {apellidos[i]} \n")
    
  arch.writelines("--------------- \n")
#Como lo hace dalto

  [arch.writelines(f"Nombre: {n}\nApellido: {a}\n ------------\n") for n,a in zip(nombres,apellidos)]
  
  
   
  
  
  