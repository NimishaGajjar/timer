const args = process.argv.slice(2);

for (const time of args) {
  console.log(time);
  if (time > 0) {
    console.log(time);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
};

// node timer1.js 2 4 -6 nimi  14 16 18 20 
// intresting I loved this one!!