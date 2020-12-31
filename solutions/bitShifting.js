function add(x, y) {
  while (y !== 0) {
    let carry = x & y;

    x = x ^ y;

    y = carry << 1;
  }

  return x;
}

console.log(add(3, 2));
