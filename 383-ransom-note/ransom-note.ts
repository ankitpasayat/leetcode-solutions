function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazine_counter = new Map();
    for (const ch of magazine) {
        const count = magazine_counter.get(ch) ?? 0;
        magazine_counter.set(ch, count + 1);
    }
    console.log(magazine_counter);
    for (const letter of ransomNote) {
        const letter_remaining = magazine_counter.get(letter) ?? 0;
        if (letter_remaining < 1) {
            return false;
        } else {
            magazine_counter.set(letter, (magazine_counter.get(letter) ?? 0) - 1);
        }
    }
    return true;
};