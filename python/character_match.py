# Don't forget to run the tests (and create some of your own)

# Part 1
def is_character_match(string1, string2):
	match1 = ""
	match2 = ""
	
	for i in string1.lower():
		if i.isalnum() and i in string2.lower():
			match1 += i

	for i in string2.lower():
		if i.isalnum() and i in string1.lower():
			match2 += i
	
	if len(match1) == len(match2):
		return True
	else:
		return False

# Part 2
def anagrams_for(word, list_of_words):
	result = []
	for item in list_of_words:
		matches = ""
		for j in item:
			if j in word:
				matches += j
		if len(matches) == len(word):
			result.append(matches)
	print(result)
	return result


