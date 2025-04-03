#include <stdio.h>
#include <stdbool.h>

int main() {

  char a = 'C';                          // Single Character             -->  %c
  char b[] = "Bro";                      // Array of Characters          -->  %s

  float c = 3.141592;                    // 4 bytes, 6-7 digits          -->  %c
  double d = 3.1415922653589793;         // 8 bytes, 15-16 digits        -->  %s

  bool e = true;                         // 1 byte(true or false)        -->  %d

  char f = 100;                          // 1 byte (-128 to +127)        -->  %c or %d
  unsigned char g = 255;                 // 1 byte (o to +255)           -->  %c or %d

  short int h = 32767;                   // 2 bytes(-32,768 to +32,767)  -->  %d
  unsigned short int i = 65535;          // 2 bytes (0 to +65.535)       -->  %d

  int j = 2147483647;                    // 4 bytes (-2^31 to +2^31)     -->  %d
  unsigned int k = 4294967295;           // 4 bytes (0 to +2^32)         -->  %u

  long long int l = 9223372036854775807; // 8 bytes (-2^63 to 2^63)      -->  %lld
  unsigned long long int m = 18446744073709551615; // 8 bytes (0 to 2^64)-->  %llu

  printf("%lld\n", l);
  printf("%llu\n", m);

  return 0;
}