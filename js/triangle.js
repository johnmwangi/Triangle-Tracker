function findOut() {
  var inp1 = document.getElementById("data1").value;
  var inp2 = document.getElementById("data2").value;
  var inp3 = document.getElementById("data3").value;
  // var sides = [sideA, sideB, sideC];
  var sideA = parseInt(inp1);
  var sideB = parseInt(inp2);
  var sideC = parseInt(inp3);

<<<<<<< HEAD
  if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
    alert("Cannot form a triangle");
  } else {
    if (sideA == sideB && sideB == sideC) {
      alert("Equilateral Triangle");
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
      alert("Isosceles Triangle");
    } else if (sideA !== sideB && sideB !== sideC && sideA !== sideC) {
      alert("Scalene Triangle");

    } else {
      alert("Cannot form a Triangle");
    }
=======
  if (sideA === sideB && sideB === sideC && sideC === sideA) {
    alert("EQUILATERAL TRAIANGLE");
  } else if (sideA === sideB && sideA !== sideC) {
    alert("ISOSCELES TRIANGLE");
  } else if (sideA === sideC && sideA !== sideB) {
    alert("ISOSCELES TRAIANGLE");
  } else if (sideB === sideC && sideB !== sideA) {
    alert("ISOSCELES  TRAIANGLE");
  } else if (sideA !== sideB && sideB !== sideC && sideA !== sideC && sideA + sideB > sideC && sideB + sideC > sideA) {
    alert("SCALENE TRIANGLE");
  } else if (sideA + sideB <= sideC) {
    alert("NOT A TRIANGLE");
  } else if (sideA + sideC <= sideB) {
    alert("NOT A TRIANGLE");
  } else if (sideB + sideC <= sideA) {
    alert("NOT A TRIANGLE");
>>>>>>> gh-pages
  }
}
