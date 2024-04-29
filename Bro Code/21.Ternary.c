#include <stdio.h>

int findMax(int x, int y) {
  return (x > y) ? x : y;
}

int main(){
  // Ternary operator = shortcut to if/else when assigning/returning a value
  // Formulate = (condition) ? value if true : value if false
  int x;
  int y;
  printf("\nNumber 1: ");
  scanf("%d", &x);
  printf("\nNumber 2: ");
  scanf("%d", &y);

  int max = findMax(x, y);
  printf("\nNumber %d is greater", max);

  return 0;
}
