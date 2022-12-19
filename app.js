for (let num = 0; num <= 20; num += 2) console.log(num);

var blacklist = [
  "baiaz",
  "jamaldin",
  "ali",
  "dastan",
  "Baiaz",
  "Jamaldin",
  "Ali",
  "Dastan",
  "BAIAZ",
  "JAMALDIN",
  "ALI",
  "DASTAN",
];

var name = prompt("type ur name:");

do {
  if (blacklist.includes(name)) {
    name = prompt("Type your name:");
  } else {
    alert(`Welcom ${name}`);
    break;
  }
} while (true);
