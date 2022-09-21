Hello, world!
ffi "C" printf

func main() -> num
printf(&"Hello, world\n")
return 0

When I run the above code, I get to standard output

Hello, world!
Let's actually run this code in L4T Playground and see how it works!

The third line, defines the function. In L4T, a program is executed from the contents of a function. The first place in the program that the computer executes is called the entry point. In other words, the entry point in L4T is a function, and code without a function is not compiled in L4T.func main() -> nummainmainmain

-> num indicates that the return value of this function is of type, which is easy to understand!mainnum

Lines 4~5 are preceded by two spaces, which is called indentation, and means that the code in lines 4 and 5 is the work in this function.main

In line 4, we call the function , but the definition of the function is not in the code. This has to do with the first line. This is explained in detail in Chapter 6, FFI. Let's just assume that is a function that displays strings.printfprintfffi "C" printfprintf

Line 5 is a statement that returns the value and exits the function. The return value of the function is the exit code of the program, which ends with an exit code .return 00mainmain0
