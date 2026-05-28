
# name = 'hamma'
# name = '''hammad'''
# name = """hammad"""

name = "hammad"
length = len(name) # this will give length of the string
index  = name[0] # this will give the first character of the string

# STRING IS IMMUTABLE IN PYTHON 
# name[0] = 'H' # this will give error because string is immutable

# STRING SLICING
nameshort = name[0:4] # this will give 'hamm'
print(nameshort)