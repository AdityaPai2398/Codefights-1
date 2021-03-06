function sequenceElement(a, n) {

  var seq = [];
  for (var i = 0; i < 5; i++) {
    seq.push(a[i]);
  }

  var lastFive =  1 ;
  var was = {};
  was[lastFive] = 4;

  for (var i = 5;; i++) {
    seq.push((seq[i - 1] + seq[i - 2] +
              seq[i - 3] + seq[i - 4] + seq[i - 5]) % 10);
    lastFive = (lastFive * 10 + seq[i]) % 100000;
    if (lastFive in was) {
      var last = was[lastFive];
      return seq[n % (i - last)];
    } else {
      was[lastFive] = i;
    }
  }
}
