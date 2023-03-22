import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos-graficas\mates.csv")

#Creando el gráfico
sns.lineplot(x="Fecha",y="Mates",data=df)

#Creando un punto en el momento de más mates
plt.plot("01-09",17,"o")

#Mostrando el gráfico
plt.show()