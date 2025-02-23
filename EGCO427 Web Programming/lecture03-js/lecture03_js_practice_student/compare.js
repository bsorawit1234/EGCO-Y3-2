const comparenum = (a, b) => {
  a = Number(a);
  b = Number(b);
  if (a > b) {
    document.getElementById("c").value = "A > B";
    document.getElementById("d").value = a - b;
  } else if (a < b) {
    document.getElementById("c").value = "A < B";
    document.getElementById("d").value = b - a;
  } else if (a == b) {
    document.getElementById("c").value = "A = B";
    document.getElementById("d").value = b - a;
  }
};
