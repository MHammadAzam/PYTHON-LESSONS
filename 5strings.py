
# name = 'hamma'
# name = '''hammad'''
# name = """hammad"""

name = "hammad"
length = len(name) # this will give length of the string
index  = name[0] # this will give the first character of the string

# STRING IS IMMUTABLE IN PYTHON 
# name[0] = 'H' # this will give error because string is immutable

# (1) STRING SLICING
nameshort = name[0:4] # this will give 'hamm'
print(nameshort)

# Negative slicing
#  h  a  m  m  a  d
#  0  1  2  3  4  5
# -6 -5 -4 -3 -2 -1
nameshort1 = name[-5:-1] # this will give 'hamma'
print(nameshort1)

print(name[0:]) # this will give the whole string, 0 to end
print(name[:]) # this will also give the whole string
print(name[:4]) # this will give 'hamm', start to 4 
print(name[-4:]) # this will give 'mmad', -4 to end

# STEP IN SLICING
print(name[0:6:2]) # this will give 'hmd', 0 to 6 with step of 2
print(name[::2]) # this will also give 'hmd', start to end with

# /////////////////////////////////////////////////////////////////////////////////////////////////////////
# STRING FNCTIONS 
# (2) 