#Cambiar el tipo de dato de una columna 
import pandas as pd

df = pd.read_csv("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos-problemas\datos.csv")

#Convertir a srting
df["edad"] =df["edad"].astype(str)

#Remplazando datos dentro de un archivo
df['apellido'].replace("dalto","maestro",inplace=True)

#Eliminando las filas con datos faltantes
df = df.dropna()

#Eliminando las filas repetidas
df = df.drop_duplicates()

#Creando un CSV con el dataframe resultante (limpio)
df.to_csv("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos-problemas\datos-limpios.csv")
