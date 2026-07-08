# List is also similar to array or a tuple but it is mutable and also it is closed in square brackets

list1 = [1,2,3,4,5]
print(list1) 
print(type(list1)) # type of list1 is list

# concatenation of lists using + operator
list2 = [6,7,8,9,10] + list1
print([list2])

# lists are mutable date types in python
list1[0] = 20 # this will change the first value 
print(list1)

list1[4] = 20 #
print(list1) # this will give error because index 9 is not present in the list

# Funtions of list in python
print(len(list1))
print(max(list1)) # this will give maximum value from the list
print(min(list1)) # this will give minimum value from the list

# slicing of lists in python
print(list1[0:3]) # this will give first 3 values from the list

# negative slicing of a list
print(list1[-4:-1]) # this will give last 3 values from the list

# EXTEND KEYWORD IN LISTS
list1.extend(["hammad", "ali", "ahmed"])
print(list1)

# APPEND KEYWORD IN LISTS
list1.append("hammad")
print(list1)
# DIFFERENCE BETWEEN APPEND AND EXTEND
# append will add the whole list as a single element in the list
# extend will add each element of the list as a separate element in the list

# DELETE AND SPLIT
print(list1)
del list1[0]
print(list1) # this will delete the first element.

name ="hammmad".split() # this will split the string into a list of words
name2 ="hammad,ali,ahmed".split(",")

print(name) # this will print the list of words
print(name2) # this will print the list of words