structure
array A type could handle multiple values of the same type, whereas a type could handle multiple values that could contain different types.struct

The declaration of the structure is written as follows.

````
struct A
num x
array<num>[2] arr

struct B
num x
ptr<array<num>[2]> arrp
struct A a
ptr<struct B> other

You can now use two types, struct , struct , and you can define and use variables of type struct and struct as follows.ABAB

array<num>[2] arr
struct A a
struct B b1, b2

arr[0]: 300
arr[1]: 400

a.x: 10
a.arr[0]: 100
a.arr[1]: 200

a.arr: arr

b1.x: a.x: 100
b1.arrp: &a.arr
b1.a: a
b1.other: &b2
b2: b1
b2.other: &b1
(_(_(\*b1.other).other).arrp)[0]: 500```
. to access the members of a structure.

Caution!

After assigning to on line 18, it is set to on line 19, but the value of b1.other does not change at this time. In assignment operations between structures, deep copy is performed.b2b1b2.other: &b1

Think about the size of a structure
In L4T, the size of the structure must be determined at compile time, see the struct declaration below.

struct A
num x
struct A other

Of course, L4T also allows struct entities to be members of a struct, but the above code is incorrect. Let's compile the above structure in L4T Playground and see if you get the following error!

line:3/pos:10: cannot determine size of struct A
struct A other
^
This is an error that the size of the structure cannot be determined. Now consider the size of the struct.AAA

sizeof(A)=8+sizeof(A)
and again to the rightsizeof(A)Therefore, it is not possible to calculate the size of the structure.A

Similarly, code like the following will not compile: (Try it out at L4T Playground!) )

struct A
num x
struct B b

struct B
array<struct C>[3] c

struct C
struct A a

sizeof(A)=8+sizeof(B)
sizeof(B)=3×sizeof(C)
sizeof(C)=sizeof(A)
So,
sizeof(A)=8+3×sizeof(A)
It comes to.

However, the following code is correct.

struct A
num x
ptr<struct A> other

ptr<struct A> is a pointer, and is 8 bytes regardless of the size of the structure.A
````
