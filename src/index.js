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
    counters.wordCount.textContent = `Contagem de palavras: ${analyzer.getWordCount(text)}`;
    counters.characterCount.textContent = `Contagem de caracteres: ${analyzer.getCharacterCount(text)}`;
    counters.characterNoSpacesCount.textContent = `Contagem de caracteres (excluindo espaços): ${analyzer.getCharacterCountExcludingSpaces(text)}`;
    counters.numberCount.textContent = `Contagem de números: ${analyzer.getNumberCount(text)}`;
    counters.numberSum.textContent = `Soma total dos números: ${analyzer.getNumberSum(text)}`;
    counters.wordLengthAverage.textContent = `Comprimento médio das palavras: ${analyzer.getAverageWordLength(text)}`;
  };

  userInput.addEventListener('input', updateCounters);
  resetButton.addEventListener('click', () => {
    userInput.value = '';
    updateCounters();
  });
});