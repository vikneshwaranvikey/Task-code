const arr = [200, 500, -120, 0, 700, 3000, -500];

arr.forEach(function (value, index) {
  if (value > 0) {
    console.log(`Amount Credited = ${value}(${index})`);
  } else if (value < 0) {
    console.log(`Amount Withdrawl = ${Math.abs(value)} (${index})`);
  } else {
    console.log(`Zero Blance = ${value} (${index})`);
  }
});
