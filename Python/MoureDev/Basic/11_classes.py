# Clases 


class MyPerson:
  pass


class Person:
  def __init__(self, name, surname, alias = "Sin alias") -> None:
    self.__name = name #Propiedad privada
    self.surname = surname
    self.full_name = f"{name} {surname} ({alias})"
  
  def walk(self):
    print(f"{self.full_name} está caminando")
   
  def get_name(self):
    return self.__name

my_person = Person("Shakir", "Chaya")
print(my_person.full_name)
print(my_person.get_name)
my_person.walk()

my_other_person = Person("Shakir", "Chaya", "ShakirDev")
print(my_other_person.full_name)
my_other_person.walk()

my_other_person.full_name = "Juan Rodriguez (Juancito)"
print(my_other_person.full_name)

my_other_person.full_name = 123
print(my_other_person.full_name)