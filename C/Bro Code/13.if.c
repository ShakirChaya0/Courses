#include <stdio.h>

int main() {

  int age;

  printf("\nEnter yout age: ");
  scanf("%d", age);

  if(age >= 18) {
    printf("You are now signed up!");
  }
  else if(age == 0) {
    printf("You can't sing up!, You were just born");
  }
  else if(age < 0)  {
    printf("You haven't been born yet!");
  }
  else{
    printf("\nYou are too young to sing up!");
  }

  return 0;
}