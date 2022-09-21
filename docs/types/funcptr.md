Function pointers
funcptr The type can store the address of the function.

Function pointers are declared as shown in the code below.

funcptr (num) -> num fp
This is a function pointer that can store the address of a function that takes a value of type as an argument and returns a value of type.numnum

The code below declares an array of types, assigns the functions and function addresses to them, and calls the function using the array.funcptraddsub
``
ffi "C" printf

func add(num x, num y) -> num
return x + y

func sub(num x, num y) -> num
return x - y

func main() -> num
array<funcptr (num, num) -> num>[2] funcp_arr

funcp_arr[0]: add
funcp_arr[1]: sub

printf("%d\n", funcp_arr[0](100, 200))
printf("%d\n", funcp_arr[1](100, 200))
return 0
``
