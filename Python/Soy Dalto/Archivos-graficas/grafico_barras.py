import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos-graficas\ingresos.csv")

#Creando el gráfico
sns.barplot(x="Fuente",y="Ingresos",data=df)

#Obteniendo el total de ingresos
total_ingresos = df['ingresos'].sum()

#Mostrando el total de ingresos
print(f"El total de ingresos es de: ${total_ingresos} USD")

#Mostrando el gráfico
plt.show()