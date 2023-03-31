# Dates

from datetime import datetime

now = datetime.now()

print(now.year)
print(now.month)
print(now.day)
print(now.hour)
print(now.minute)
print(now.second)

timestamp = now.timestamp()

print(timestamp)

print("--------------------------")

new_year_2023 = datetime(2023, 1, 1)

def print_date(date):
  print(date.year)
  print(date.month)
  print(date.day)
  print(date.hour)
  print(date.minute)
  print(date.second)
  print(date.timestamp())

print_date(new_year_2023)

print("--------------------------")

from datetime import time

current_time = time(22, 58 , 37)

print(current_time.hour)
print(current_time.minute)
print(current_time.second)

print("--------------------------")

from datetime import date

current_date = date(2005, 4, 1)

print(current_date.year)
print(current_date.month)
print(current_date.day)

print("--------------------------")

current_date = date.today()

print(current_date.year)
print(current_date.month)
print(current_date.day)

#Modificando estos datos 

current_date = date(current_date.year - 1, current_date.month + 1, current_date.day - 3)

print(current_date)

print("--------------------------")

#Operando con dates

diff = new_year_2023 - now
print(diff)

difff = new_year_2023.date() - current_date
print(difff)

print("--------------------------")

from datetime import timedelta

time_delta = timedelta

start_timedelta = timedelta(200, 100, 100, weeks = 10)
end_timedelta = timedelta(300, 100, 100, weeks = 13)

print(end_timedelta - start_timedelta)
print(end_timedelta + start_timedelta)

