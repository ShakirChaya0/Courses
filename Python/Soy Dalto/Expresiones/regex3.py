import re

text = "Remplazando todas las vocales por el asterisco"

new_text = re.sub("[aeiou]", "*", text)

print(new_text)