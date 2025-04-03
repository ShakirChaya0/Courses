#include <stdio.h>

int square(double x){
  return x * x;
}

int main(){
  // return = A value back to a calling function.

  double x = square(3.14);
  printf("\nResult: %lf", x);

  return 0;
}
