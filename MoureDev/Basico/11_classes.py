# Clases 

class MyPerson:
  pass


class Person:
  def __init__(self, name, surname, alias = "Sin alias") -> None:
    self.name = name
    self.surname = surname
    self.full_name = f"{name} {surname} ({alias})"
  
  def walk(self):
    print(f"{self.full_name} está caminando")

my_person = Person("Shakir", "Chaya")
print(my_person.full_name)
my_person.walk()

my_other_person = Person("Shakir", "Chaya", "ShakirDev")
print(my_other_person.full_name)
my_other_person.walk()

my_other_person.full_name = "Juan Rodriguez (Juancito)"
print(my_other_person.full_name)

my_other_person.full_name = 123
print(my_other_person.full_name)