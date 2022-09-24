# integer

`num ` The type can handle 8-byte signed integers. The following operations can be performed between types.num

## Binomial arithmetic

### Assignment

The assignment operation is performed in .:

```
a: 10
```

a is assigned to .10

```
b: a
```

b is assigned the value of .a
`

```
a: b: 100

```

`b` After is assigned to , is also assigned to , because the assignment of L4T is not an assignment "statement" but an assignment "expression" and is evaluated as an assigned value.100a100

### Logical Or

First, the left expression is evaluated, and only when the left expression is , and both are evaluated as , and the rest are evaluated as . It is useful to use in combination with if-elif-else statements and loop statements.0001

```
a: 5
b: 10
c: a < 4 || b > 10
c is assigned to .0

```

### Logical And

It evaluates the left expression first, evaluates the right expression only when the left expression is not , evaluates to if neither is , and evaluates to , otherwise evaluates to . It is useful to use in combination with if-elif-else statements and loop statements.0010

```
a: 3
b: 10
c: a < 4 && b > 10
c is assigned to .0
```

Bitwise Or
this feature is under development

Bitwise Xor
this feature is under development

Bitwise And
this feature is under development

### Equality

First, the left expression is evaluated, followed by the right expression, which evaluates to when the two values are equal and when they are different. It is useful to use in combination with if-elif-else statements and .10

```
a: 3
b: a = 3
```

b is assigned to .1

```
a: 3
b: a != 3
b is assigned to .0
```

### Relational

It first evaluates the left expression, followed by the right expression, which evaluates to or is based on the relationship between the magnitudes of the two values. It is useful to use in combination with if-elif-else statements and .10

```
a: 3
b: a < 3
b is assigned to .0
```

```
a: 3
b: a <= 3
b is assigned to .1
```

```
a: 3
b: a > 3
b is assigned to .0
```

```
a: 3
b: a >= 3
b is assigned to .1
```

Shift
this feature is under development

Additive
The sum is ,the difference is done by .+-

```
a: 10
b: 20
c: a + b - 200
```

c is assigned to .-170

Multiplicative
The product is , the quotient is by , and the remainder is .\*/%

```
a: 10 / 5
```

a is assigned to .2

```
a: 10
b: 3
c: a % b
```

c is assigned to .1

```
a: 12
b: a \* 200
```

b is assigned to .2400
