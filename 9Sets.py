# sets are just like lists but they are unordered
# they are mutable and do not allow duplicate values

my_set  = {1,2,2,3,4,5}
print(my_set) # output: {1, 2, 3, 4, 5} - duplicate value is removed

# type casting a list to a set
my_list = [1,2,3,4,5,5,6]
my_set2 = set(my_list)
print(my_set2)

# methods of set
my_set.add(6) # it will add 6 to the set
print(my_set)

my_set.remove(3) # it will remove 3 from the set
print(my_set)

verify = 3 in my_set 
print(verify) # output: False - 3 is not in the set

# MATHEMATICAL OPERATIOS ON SET
set4 = {1,2,3,4,5}
set5 = {4,5,6,7,8}
# union of two sets
union_set = set4.union(set5)
print(union_set) # output: {1, 2, 3, 4, 5, 6, 7, 8}

# intersection of two sets
intersection_set = set4.intersection(set5)
# intersection_set = set4 & set5 
print(intersection_set) # output: {4, 5}


