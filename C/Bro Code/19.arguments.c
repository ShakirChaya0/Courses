#include <stdio.h>

void birthday(char X[],int Y){ // Parameters

  printf("\nHappy birthday dear %s!",X);
  printf("\nYou are %d years old!",Y);
}

int main(){

  char name[25];
  int age;

  printf("\nWhat is your name?: ");
  scanf("%s", &name);
  printf("\nHow old are you?: ");
  scanf("%d", &age);

  birthday(name, age); // Arguments

  return 0;
}
