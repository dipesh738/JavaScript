let a = ((item) => {
  for (let i = item; i > 0; i--) {
    let result = "";
    for (let j = 1; j < i; j++) {
      result = result + "*";
    }
    console.log(result);
  }
})(10);
