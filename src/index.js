import analyzer from './analyzer.js';

document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.querySelector('textarea[name="user-input"]');
  const resetButton = document.getElementById('reset-button');

  const counters = {
    wordCount: document.querySelector('[data-testid="word-count"]'),
    characterCount: document.querySelector('[data-testid="character-count"]'),
    characterNoSpacesCount: document.querySelector('[data-testid="character-no-spaces-count"]'),
    numberCount: document.querySelector('[data-testid="number-count"]'),
    numberSum: document.querySelector('[data-testid="number-sum"]'),
    wordLengthAverage: document.querySelector('[data-testid="word-length-average"]'),
  };

  const updateCounters = () => {
    const text = userInput.value;
    
    if (text.trim() === '') {
      Object.values(counters).forEach(counter => {
        counter.innerText = counter.innerText.replace(/\d+/, '0');
      });
      return;
    }

    counters.wordCount.innerText = `Contagem de palavras: ${analyzer.getWordCount(text)}`;
    counters.characterCount.innerText = `Contagem de caracteres: ${analyzer.getCharacterCount(text)}`;
    counters.characterNoSpacesCount.innerText = `Contagem de caracteres (excluindo espaços): ${analyzer.getCharacterCountExcludingSpaces(text)}`;
    counters.numberCount.innerText = `Contagem de números: ${analyzer.getNumberCount(text)}`;
    counters.numberSum.innerText = `Soma total dos números: ${analyzer.getNumberSum(text)}`;
    counters.wordLengthAverage.innerText = `Comprimento médio das palavras: ${analyzer.getAverageWordLength(text).toFixed(2)}`;
  };

  userInput.addEventListener('input', updateCounters);
  resetButton.addEventListener('click', () => {
    userInput.value = '';
    updateCounters();
  });
});