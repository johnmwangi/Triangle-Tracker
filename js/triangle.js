function findOut() {
  var inp1 = document.getElementById("data1").value;
  var inp2 = document.getElementById("data2").value;
  var inp3 = document.getElementById("data3").value;
  // var sides = [sideA, sideB, sideC];
  var sideA = parseInt(inp1);
  var sideB = parseInt(inp2);
  var sideC = parseInt(inp3);

  if (sideA == sideB && sideB == sideC) {
    alert("Equilateral Triangle");
  } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    alert("Isosceles Triangle");
  } else if (sideA !== sideB && sideB !== sideC && sideA !== sideC) {
    alert("Scalene Triangle");
  } else {
    alert("Cannot form a Triangle");
  }
}
