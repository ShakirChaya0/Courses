#include <stdio.h>
#include <string.h>


int main()
{
  char name[25];
  int age;


  printf("What's your name: ");
  //scanf("%s", &name);  Lee solo una palabra
  fgets(name, 25, stdin);
  name[strlen(name) - 1] = '\0';

  printf("How old are you: ");
  scanf("%d", &age);

  printf("\nHello %s, How are you?\n", name);
  printf("You are %d years old", age);
  
  return 0;
}
