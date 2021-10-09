// check permutation: Given two strings,
//  write a method to decide if one is a permutation of the other

// Javascript program to check if two strings
// are Permutations of each other
let NO_OF_CHARS = 256;

/* Function to check whether two strings
are Permutation of each other */
function arePermutation(str1, str2)
{
	
	// Create 2 count arrays and initialize
	// all values as 0
	let count1 = Array(NO_OF_CHARS);
	let count2 = Array(NO_OF_CHARS);
	count1.fill(0);
	count2.fill(0);
	let i;

	// For each character in input strings,
	// increment count in the corresponding
	// count array
	for(i = 0;
		i < str1.length && i < str2.length;
		i++)
	{
		count1[str1[i]]++;
		count2[str2[i]]++;
	}

	// If both strings are of different length.
	// Removing this condition will make the program
	// fail for strings like "aaca" and "aca"
	if (str1.length != str2.length)
		return false;

	// Compare count arrays
	for(i = 0; i < NO_OF_CHARS; i++)
		if (count1[i] != count2[i])
			return false;

	return true;
}

console.log(arePermutation('jamiu','kamal'))

