function findUniqueChar(text) {
    const words = text.split(" ");
    const uniqueChars = [];
  
    for (const word of words) {
      const charCount = {};
      for (const char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
  
      for (const char of word) {
        if (charCount[char] === 1) {
          uniqueChars.push(char);
          break;
        }
      }
    }
  
    for (const char of uniqueChars) {
      if (uniqueChars.filter((c) => c === char).length === 1) {
        return char;
      }
    }
  
    return null; // Якщо унікальний символ не знайдено
  }
  
  // Приклад використання
  const text =
    "C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup";
  const result = findUniqueChar(text);
  console.log(result); // Виведе: "m"
