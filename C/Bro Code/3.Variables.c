#include <stdio.h>

int main() {
  /*
    Variables = Allocated space in memory to store a value. 
    We refer to a variable's name to access the stored value.
    That variable now behaves as if it was the value it contains.
    BUT we need to declare what type of date we are storing.
  */

  int x;       // Declaration
  x = 123;     // Initialization
  int y = 321; // Declaration + Initialization

  int age = 19;        // Interger
  float gpa = 2.05;    // Floating point number
  char grade = 'C';    // Single character
  char name[] = "Bro"; // Array of characters

  printf("Hello %s\n", name);
  printf("You are %d years old\n", age);
  printf("Your average grade is %c\n", grade);
  printf("Your gpa is %f", gpa);

  return 0;
}