for (let i = 0; i <= 20; i++) {
  if (i % 2) {
  } else {
    console.log(i);
  }
}

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
