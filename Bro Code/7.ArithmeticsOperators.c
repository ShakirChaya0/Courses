#include <stdio.h>

int main() {

  // Arithmetics Operators

  // + (addition)
  // - (subtraction)
  // * (multiplication)
  // / (divison)
  // % (modulus)
  // ++ (increment)
  // -- decrement

  int x = 5;
  int y = 2;

  printf("El resultado de 5 +   2 es: %d\n", x + y);
  printf("El resultado de 5 -   2 es: %d\n", x - y);
  printf("El resultado de 5 *   2 es: %d\n", x * y);
  printf("El resultado de 5 /   2 es: %d\n", x / y);
  printf("El resultado de 5 °/. 2 es: %d\n", x % y);
  x++;
  printf("El resultado de 5++     es: %d\n", x);
  y--;
  printf("El resultado de 2--     es: %d\n", y);

  return 0;
}