import pandas as pd 

#Usando la fuincion read_csv para leer el archivo CSV
df = pd.read_csv("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos\leer_csv.py")

df2 = pd.read_csv("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos\leer_csv.py")

#Obteniendo el nombre
nombres = df["name"]

print(df)

#ordenando el dataframe por la edad 
df_ordenado = df.sort_values('edad')

#ordenando el forma descendente
df_ordenado_descendente = df.sort_values('edad',ascending=False)

#Concatenando los 2 dataframes
df_concatenado = pd.concat([df,df2])

#Accediendo a las primeras 3 filas con head()
primeras_fila = df.head(3)

#Accediendo a las ultimas 3 filas con tail()
ultimas_filas = df.tail(3)

#Accediendo a la cantidad de filas y columnas con shape
filas_totales,columnas_totales = df.shape

#Obtebiendo data estadistica del dataframe:
df_info = df.describe()

#Accediendo a un elemento especifico con loc
elemento_especifico = df.loc[2,"edad"]

#Accediendo a un elemento especifico con iloc
elemento_especifico = df.iloc[2,2]

#Accediendo a todas las filas de una columna
apellidos = df.iloc[:,1]

#Accediendo a todas las columnas de una fila con loc 
fila_3 = df.loc[2,:]

#Accediendo a todas las columnas de una fila cpn iloc
fila_3 = df.iloc[2,:]

#Accediendo a filas con edad mayor que 30 
mayor_que_30 = df.loc[df["edad"]>30,:]

print(df)