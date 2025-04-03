import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos-graficas/bigotes.csv")

#Creando el gráfico
sns.boxplot(x="Categoria",y="Valor",data=df)

#Mostrando el gráfico
plt.show()