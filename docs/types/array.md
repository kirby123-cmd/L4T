array
array Types can handle multiple values of any given type.

For example, arrays of types can be handled as follows:num
`` array<num>[3] a, b b[2]: 300 a[0]: 10 a[1]: 20 a[2]: a[0] + a[1] b: a b[0]: 100 b[1]: a[0] + a[1] - b[0] In the above code, the value of the array will eventually be , , and the value of the array will be , , . (The value of will be on line 2, but will be overwritten by on line 6.)a102030b100-7030b[2]30030`  ``
Caution!

After assigning to on line 6, it is set to in line 7, but the value of a[0] does not change at this time. In assignment operations between arrays, deep copy is performed.bab[0]: 100

There are also arrays of arrays (ndimensional arrays), arrays of structures, and arrays of pointers.

The following is2This is an example of a dimensional array.

`array<array<num>[2]>[3] a, c array<num>[2] b a[0][0]: 100 a[0][1]: 200 a[1][0]: 300 a[1][1]: 400 b: a[1] b[1]: 4000 a[2]: b c: a`
Lines 7, 9, and 10 of this code are similarly deep copied.
