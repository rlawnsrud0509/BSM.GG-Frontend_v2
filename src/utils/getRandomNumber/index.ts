export const getRandomNumber = (count: number, max: number) => {
  const numbers = Array.from({ length: max + 1 }, (_, index) => index);

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers.slice(0, count);
};
