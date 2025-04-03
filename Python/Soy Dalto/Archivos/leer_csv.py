import csv

with open("F:\Shakir (Disco Rígido F)\Programación\Course\Soy Dalto\Phyton\Archivos\datos.csv") as archivo:
    reader = csv.reader(archivo)
    for row in reader:
      print(row)