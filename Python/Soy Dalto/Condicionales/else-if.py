ingreso_mensual = 92000
gasto_mensual = 80000

#if anidados y elif 

if ingreso_mensual > 10000:
  if ingreso_mensual - gasto_mensual < 0:
    print("Estas en deficit")
  elif ingreso_mensual - gasto_mensual > 3000:
    print("Estas bien")
  else:
    print("Estas gastando mucho")

elif ingreso_mensual > 1000:
  print("Estas bien en latinoamaerica")
  
elif ingreso_mensual > 500:
  print("Estas bien en argentina")
  
elif ingreso_mensual > 200:
  print("Estas bien en venezuela")
  
else:
  print("Estas mal economicamente")