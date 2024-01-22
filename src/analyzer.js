const analyzer = {

  getWordCount: (text) => {
    if (!text || typeof text !== 'string') return 0;
    const words = text.trim().split(/\s+/);
    return words.length;
  },

  getCharacterCount: (text) => {
    if (!text || typeof text !== 'string') return 0;
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    if (!text || typeof text !== 'string') return 0;
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      const currentChar = text[i];
      if (/\w/.test(currentChar)) {
        count++;
      }
    }
    return count;
  },

  getNumberCount: (text) => {
    if (!text || typeof text !== 'string') return 0;
    const numbers = text.match(/[-+]?\b\d*\.?\d+\b/g);
    if (!numbers) return 0;
    return numbers.length;
  },
  
  getNumberSum: (text) => {
    if (!text || typeof text !== 'string') return 0;
    const numbers = text.match(/[-+]?\b\d+(\.\d+)?\b/g);
    if (!numbers) return 0;
    const filteredNumbers = numbers.map(num => parseFloat(num)).filter(num => !isNaN(num));
    return filteredNumbers.reduce((acc, num) => acc + num, 0);
  },

  getAverageWordLength: (text) => {
    if (!text || typeof text !== 'string') return 0;
    const words = text.trim().split(/\s+/);
    const totalCharacters = words.join('').length;
    const averageLength = totalCharacters / words.length;
    return parseFloat(averageLength.toFixed(2));
  },
};

export default analyzer;