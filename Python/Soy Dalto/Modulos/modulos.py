#Importando un modulo y asignandole el nombre "m_saludar"
import modulo_saludar as m_saludar

#Desde ese modulo, importamos dos funciones y cambiandole el nombre
from modulo_saludar import saludar as saludar_normal,saludar_raro as saludar_como_coscu

#Creamos las variables con los resultados
saludo = saludar_normal("Shakir")
saludo_raro = saludar_como_coscu("Fran")

#Mostramos los resultados
print(saludo)
print(saludo_raro)


