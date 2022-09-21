pointer
ptr The type can store the address of a variable.

````
num a, b
ptr<num> p

a: b: 100

p: &a
\*p: 200

p: &b
\*p: 300 ```
Line 4 assigns variables (and ) to , and line 6 assigns the address of variables to variables. Thus, if you precede a variable with , you can get the address of the variable. Chapter 3 In Variables, I explained that the entity of the variable can be in memory or in registers, but variables that are used in code such as in the like this are guaranteed to be allocated in memory by the L4T compiler.ab100pa&a&&a

Then on line 7 it says , which means that you want to store at the address stored in the pointer, so where the value of the variable is .\*p: 200p200a200

Similarly, in lines 9~10, the value stored in variable is .b300

```
func main() -> num
num a, b
ptr<num> p

a: b: 100

p: &a
\*p: 200

p: &b
\*p: 300
printf(&"a = %d, b = %d\n", a, b)

return 0

```
Run this code in L4T Playground,

a = 200, b = 300
Let's see what appears to be!

In addition, you can handle array pointers, struct pointers, and pointers to pointers.

Pointers are the first concept that many people stumble upon in "low-level" programming, and you can get used to them little by little by looking at code examples using pointers below or writing your own!

Code examples
Example of using pointers as arguments to a function
func swap(ptr<array<num>[100]> arr_p, num index1, num index2) -> num
num tmp
tmp: (*arr_p)[index1]
(*arr_p)[index1]: (*arr_p)[index2]
(*arr_p)[index2]: tmp
return 0

func main() -> num
array<num>[100] arr
arr[20]: 20
arr[70]: 70

printf("arr[20] = %d, arr[70] = %d\n", arr[20], arr[70])

swap(&arr, 20, 70)

printf("arr[20] = %d, arr[70] = %d\n", arr[20], arr[70])

return 0

The function takes an array pointer and two integers and as arguments, and exchanges the second value of the array for the second value. Because it takes the address of the array as an argument, it can rewrite the contents of the array that is a variable in the function. This code is used in the L4T Playground. Let's run in, and make sure the values of are actually swapped!swapindex1index2index1index2mainarrarr[20]arr[70]

Example of allocating memory in the heap area
The code below shows that the heap area contains8×2=16Allocate memory in bytes and place it where the length is2as an array of.

ffi "C" free
ffi "C" malloc
ffi "C" printf

func main() -> num
ptr<array<num>[2]> arr
arr: malloc(16)

(*arr)[0]: 100
(*arr)[1]: 200

printf("%d, %d\n", (*arr)[0], (*arr)[1])

free(arr)
return 0
```
````
