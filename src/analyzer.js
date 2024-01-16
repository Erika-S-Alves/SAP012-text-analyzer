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
    const charactersWithoutSpaces = text.replace(/\s/g, '');
    return charactersWithoutSpaces.length;
  },

  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/);
    const totalCharacters = words.join('').length;
    return totalCharacters / words.length || 0;
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  },
  
  getNumberSum: (text) => {
    const numbers = text.match(/\d+/g);
    if (!numbers) return 0;
    const filteredNumbers = numbers.filter(num => /^\d+$/.test(num));
    return filteredNumbers.reduce((acc, num) => acc + parseInt(num, 10), 0);
  },
};

export default analyzer;