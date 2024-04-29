#include <stdio.h>

int main() {

  // switch = A more efficient alternative to using many "else if" statements
  //          allows a value to be tested for equality against many cases.

  char grade;

  printf("Enter a letter grade: ");
  scanf("%c", &grade);

  switch (grade) {
  case 'A':
    printf("Perfect\n");
    break;
  case 'B':
    printf("Good\n");
    break;
  case 'C':
    printf("Okay\n");
    break;
  case 'D':
    printf("Bad\n");
    break;
  case 'F':
    printf("Failed\n");
    break;
  
  default:
    printf("Please enter only valid grade");
    break;
  }

  return 0;
}