---
sidebar_position: 8
---

Loop text
loop By using statements, you can perform repetitive processing.

num a
a: 0

loop a < 5
printf("%d\n", a: a + 1)

loop The statement executes the code inside repeatedly as long as the value of the expression is anything other than , and the code above is code that repeats as long as the value of is less than .0a5printf("%d\n", a: a + 1)

Run the code below in L4T Playground and see how it works!

ffi "C" printf

func main() -> num
num a
a: 0
loop a < 5
printf("%d\n", a: a + 1)
return 0

break and continue statements
The code below has the same behavior as the code above.

num a
a: 0

loop 1
if a < 5
printf("%d\n", a: a + 1)
continue
break

continue is the sentence that returns to the beginning of the loop statement, where is the sentence that breaks out of the loop.break
