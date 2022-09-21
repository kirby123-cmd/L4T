---
sidebar_position: 6
---

# Function

A function can take an input value called an argument and return one value. L4T can accept up to 6 arguments. An argument can accept a value of any type, but the only types of values that can be returned are num or ptr.

Let's say you declare the following function.

```
func swap(array<num>[100] arr, num index1, num index2) -> num
num tmp
tmp: arr[index1]
arr[index1]: arr[index2]
arr[index2]: tmp
return 0
```

This is similar to the functions written in Chapter 4.4, Code Examples of Pointers, but it is actually a little different.

Let's see what actually happens when you use this function by running the code below in L4T Playground.

```
func swap(array<num>[100] arr, num index1, num index2) -> num
num tmp
tmp: arr[index1]
arr[index1]: arr[index2]
arr[index2]: tmp
return 0


func main() -> num
array<num>[100] arr
arr[20]: 20
arr[70]: 70

printf("arr[20] = %d, arr[70] = %d\n", arr[20], arr[70])

swap(arr, 20, 70)

printf("arr[20] = %d, arr[70] = %d\n", arr[20], arr[70])

return 0
```

I think you can see that the value of the array does not change, because the function written in Chapter 4.4, Code examples of pointers received pointers as arguments, but in the code above you can use deep copy to That is, the reference in the function is another variable at a different address than the function. Obviously rewriting the contents of the array does not change the function .arrayswaparrmainarrmainarr

Receiving such arguments is called passing-by-value, while receiving arguments such as a function written with pointers in Chapter 4.4 is called passing-pointer.

Depending on the application, let's use value passing and pointer passing separately.

Functions allowed in C but prohibited in L4T
this feature is under development
