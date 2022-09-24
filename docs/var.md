---
sidebar_position: 3
---

# Variable

A variable is like a box that temporarily stores values, sometimes in memory such as stack space, heap area, data area, etc., or it can be registers. Programmers can write programs without being particularly aware of it, let's look at an example!

```
ffi "C" printf

num g

func main() -> num
  num a, b
  a: 1
  b: 10
  g: a + b + 100
  printf("%d\n", g)
  return 0

```

The declaration of a variable is written as , and the third and sixth lines of the code above declare a variable of type.型名 変数名 1, 変数名 2, ...num

Lines 7~9 assign values to variables. You can also perform operations using variables already declared, as in line 9. In this way, variables are very useful for complex calculations.

When you run this code, it will appear.111

## Global and local variables

Lines 3 and 6 of the above code both declare variables, but the declaration is in a different place: variables declared outside the function as in line 3 are called global variables, and variables declared in functions as in line 6 are called local variables.

The global variable can be used anywhere below the declared line, but the local variable can only be used within the function (strictly speaking, a block) in which it is declared.

```Level up!

The L4T compiler allocates the global variable to the data area and the local variable to the stack area and registers.

The value of the data area is valid until the end of the program, but the value of the stack area and registers is temporary. Variables that are referenced in other functions are global, variables whose values you do not want to be changed by other functions should be used differently, and so on.
```
