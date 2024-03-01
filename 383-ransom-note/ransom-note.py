class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        magazine_counter = Counter(magazine)
        for letter in ransomNote:
            letter_remaining = magazine_counter.get(letter, 0)
            if letter_remaining < 1:
                return False
            else:
                magazine_counter[letter] -= 1
        return True
