let total = 0;
let a;

a = +prompt(`Сколько будет 2+2?`);
if (a === 4) total += 10;

a = confirm("Солнце встает на востоке?");
if (a) total += 10;

a = prompt(`Сколько будет 5 / 0?`);
if (a.toLowerCase().includes("infinity") || a.toLowerCase().includes("бескон"))
  total += 10;

a = prompt(`Какого цвета небо?`);
if (a.toLowerCase().includes("голубо") || a.toLowerCase().includes("син"))
  total += 10;

a = +prompt(
  `Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.`
);
if (a === 42) total += 10;

alert(`Ваш результат - ${total} баллов! Спасибо за потраченное время;)`);
