#include <stdio.h>
#include <stdbool.h>

int main() {

  // Logical operator =  Symbols used to combine conditions and evaluate their truth values.

  // && (AND) checks if two or more conditions are true.
  float temp = 25;
  bool sunny = true;
  if(temp >= 0 && temp <= 30 && sunny){
    printf("\nThe weather us good!");
  }
  else {
    printf("\nThe weather is bad!");
  }

  // || (OR) checks if at least one condition is true.
  float temp = 40;
  bool sunny = true;
  if(temp <= 0 || temp >= 30 || sunny == false){
    printf("\nThe weather is bad!");
  }
  else {
    printf("\nThe weather is good!");
  }

  // ! (NOT)  reverses the state of a condition.

  bool sunny = true;

  if(!sunny){
    printf("\nIt's cloudy outside!");
  }
  else {
    printf("\nIt's sunny outside!");
  }

  return 0;
}
