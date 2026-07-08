
tuple1 = (1,2,3,4,5) # Syntax of a tuple
print(tuple1)
print(type(tuple1)) # type of tuple1 is tuple

# tuples are immutable data types in python
# tuple1[1] = 20 # this will give error 
# tuple1[5] = 20 # this will also give error



access = tuple1[0] # this will give first value from the tuple
print(access)
print(tuple1[1]) # this will give second value from the tuple

#  CONCATENATION OF TUPLES USING + OPERATOR
tuple2  = (6,7,8,9,10)
tuple3  =  tuple1 + tuple2 # this will give a new tuple.
print(tuple3)

tuple4 = tuple1 * 3 # this will give a new tuple with tuple1 repeated 3 times
print(tuple4) # this will give a new tuple

# SLICING OF TUPLES: GETTING MUTIPLE VAUES FROM A TUPLE
print(tuple1[0:3]) # this will give first 3 values from the tuple

# NEGATIVE SLICING OF A TUPLE
print(tuple1[-4:-1]) # this will give last 3 values 


# Tuple functions
print(len(tuple1)) # this will give length of the tuple
ratings = (10,2,3,4,5,6,7,8,9,1)

setRatings  = sorted(ratings) #this will sort the tuple
print(setRatings) # this will give a new tuple with sorted values

# NESTED TUPLES IN PYTHON
nestedTuple = (1,2,3,(4,5,6),("hammad","Ali", "Azam"))
print(nestedTuple)
print(nestedTuple[3][1],"And",nestedTuple[4][0]) # this will give the nested tuple (4,5,6[])




