function myGeeks() {
  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }
  const arr = [
    "12 might 45% internship 2022",
    "array of 5 elements",
    "best fo[23]%6c abc 45",
  ];

  // console.log(sliceIntoChunks(arr, 1));

  const str = sliceIntoChunks(arr, 1);

  const regex = /\d+/gm;

  let m;
  const filter = [];
  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      filter.push(parseInt(match));
    });

    filter.sort(function (a, b) {
      return a - b;
    });
  }

  // console.log(filter);
  matches = filter;
  if (matches) {
    document.getElementById("GFG").innerHTML = matches;
  }
}
