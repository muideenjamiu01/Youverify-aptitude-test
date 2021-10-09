#  URLify: write a method to replace all spacrs in a string with '%20'. you
#  may assume that the string has sufficient space at the end to hold the additional characters, and 
# that you are given the "true" length of the string.


def URLify(str='');
    strlen = len(str)
    modified = str.replace('', '%20')
    return (strlen, modified)
data = 'Mr John Smith'
length, output = URLify(data)
print(f'{length} {output}')