self.onmessage = function (e) {
  if (e.data === "START") {
    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += i;
    }

    self.postMessage(result);
  }
};
