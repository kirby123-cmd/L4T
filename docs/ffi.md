---
sidebar_position: 7
---

# FFI

In the chapters up to this point, there may be some people who have come up with sentences like this many times, and each time they have been hazy, and here we will explain this.ffi "C" printfffi

A Foreign Function Interface (FFI) is a mechanism for using functions defined in one programming language to another. FFI is a common term regardless of L4T, and other languages such as Rust and Go have the same functionality.

In L4T, you can use functions defined in C by writing , and when I wrote in the previous chapters, I think I was using functions even though there was no definition of a function in the code, because I was calling a function defined in the C standard library, not in the code.ffi "C" ????ffi "C" printfprintfprintfprintf

By writing in the same way, you can call other functions in the C standard library, and we have used and in previous chapters.mallocfree

Compiler Responsibility and Programmer Responsibility

ffi "C" printf As you can see, the interface (arguments and return values) of functions defined in C cannot be guaranteed by L4T. Therefore, the use of these functions is outside the control of the L4T compiler, and it is the programmer's responsibility to check the safety of that part. If used incorrectly, errors will occur at run time. This is one of the things we programmers fear the most, so be sure to check it carefully when using it.

The following is an example of incorrect code, and you can also think about where and how it goes wrong.

ffi "C" free
ffi "C" malloc
ffi "C" printf

```
func main() -> num
array<num>[2] arr
arr: malloc(16)

arr[0]: 100
arr[1]: 200

printf("%d, %d\n", arr[0], arr[1])

free(arr)
return 0

```

- Show answer
  free(arr) frees the memory of the variable in the stack area, not the memory of the heap space allocated in , soarrmalloc(16)

munmap_chunk(): invalid pointer
This is an error that occurs when you try to free in a location that is not a memory area allocated by or .malloccallocfree

Let's actually run this code in L4T Playground and see that the compilation passes but the error occurs at runtime!
