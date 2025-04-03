#include <stdio.h>

int main() {

  // Format specifier % = defindes and formats a type of data to be displayed

  // %c  = character
  // %s  = string (Array of characters)
  // %f  = float
  // %lf = double
  // %d  = interger

  // %.1 = decimal precision
  // %1  = minimum field width
  // %-  = left align

  float item0 = 7.75 ;
  float item1 = 5.75;
  float item2 = 10.00;
  float item3 = 100.99;

  printf("Item 0: $%f\n", item0);
  printf("Item 1: $%.2f\n", item1);
  printf("Item 2: $%16.2f\n", item2);
  printf("Item 3: $%-16.2f\n", item3);

}