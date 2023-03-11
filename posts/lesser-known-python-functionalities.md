---
title: Some Lesser Known but Extremely Useful Python
date: 2023-03-11
---

Python is a versatile and user-friendly programming language that offers a wide range of built-in functions to help developers accomplish various tasks with ease. In addition to the well-known functions, there are several lesser-known yet highly useful functions that can simplify complex tasks and save time. In this article, we'll explore some of these functions and provide code examples to demonstrate their usage.

## 1. Counter()

The Counter() function from the collections module is an efficient way to count the occurrence of items in a list. It returns a dictionary where the keys are the items in the list and the values are the number of occurrences.

```
from collections import Counter

fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'mango', 'apple']
count = Counter(fruits)
print(count)

```

Output:

```
Counter({'apple': 3, 'banana': 2, 'orange': 1, 'mango': 1})

```

The Counter function is extremely useful in situations where you want to count the number of occurrences of each element in a list. It can also be used on other iterable objects such as tuples and strings.

```
from collections import Counter

word = 'hello'
count = Counter(word)
print(count)

```

Output:

```
Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})

```

## 2. zip()

The zip() function is used to combine multiple lists into a single list of tuples. It takes any number of iterable objects as arguments and returns a list of tuples where the i-th tuple contains the i-th element from each of the argument sequences.

```
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
zipped_list = zip(list1, list2)
print(list(zipped_list))

```

Output:

```
[(1, 'a'), (2, 'b'), (3, 'c')]

```

The zip() function can also be used with more than two lists:

```
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = ['x', 'y', 'z']
zipped_list = zip(list1, list2, list3)
print(list(zipped_list))

```

Output:

```
[(1, 'a', 'x'), (2, 'b', 'y'), (3, 'c', 'z')]

```

## 3. all() and any()

The all() function returns True if all elements in an iterable are true, otherwise it returns False. The any() function returns True if at least one element in an iterable is true, otherwise it returns False.

```
lst1 = [True, True, False, True]
lst2 = [False, False, False]
print(all(lst1))
print(all(lst2))
print(any(lst1))
print(any(lst2))

```

Output:

```
False
False
True
False

```

The all() and any() functions can be used to simplify complex conditions in your code. For example, you can use the all() function to check if all elements in a list are less than a certain value:

```
numbers = [1, 2, 3, 4, 5]
print(all(x < 6 for x in numbers))

```

Output:

```
True

```

## 4. filter()

The filter() function is used to filter out elements from an iterable based on a given condition. It returns a new iterable with the elements that satisfy the condition.

```
numbers = [1, 2, 3, 4, 5, 6]
filtered_list = list(filter(lambda x: x % 2 == 0, numbers))
print(filtered_list)

```

Output:

```
[2, 4, 6]

```

The filter() function is an efficient way to extract elements from an iterable that meet a certain condition. For example, you can use it to extract all the even numbers from a list:

```
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)

```

Output:

```
[2, 4, 6]

```

## 5. map()

The map() function applies a given function to each element of an iterable and returns a new iterable with the results.

```
numbers = [1, 2, 3, 4, 5, 6]
squared_numbers = list(map(lambda x: x**2, numbers))
print(squared_numbers)

```

Output:

```
[1, 4, 9, 16, 25, 36]

```

The map() function is useful when you need to apply a function to each element in a list and store the results in a new list. For example, you can use it to convert a list of strings to uppercase:

```
words = ['hello', 'world', 'python']
upper_words = list(map(lambda x: x.upper(), words))
print(upper_words)

```

Output:

```
['HELLO', 'WORLD', 'PYTHON']

```

Python offers a wide range of built-in functions that can simplify complex tasks and save time. The functions we explored in this article may not be as well-known as some of the others, but they are extremely useful and worth knowing. As you continue to explore the language, you'll likely discover even more hidden gems that can make your life as a developer much easier.