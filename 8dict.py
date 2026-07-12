# dictionaries also works same as list and tuples
# It stores data in key value pairs
# It is mutable and unordered
# keys are immutable and unique
# they are represented by curly brackets {}

dict = {"name": "hammad", "age": 20, "city": "Peshawar"}
print(dict)
print(type(dict))
print(dict["name"])
print(dict.keys())
print(dict.values())

other_dict = dict.copy()
print(other_dict)

# methods of dictionary
dict.clear()
print(dict)

del other_dict["age"]
print(other_dict) 

