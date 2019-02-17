function triangl.html:27() {
  var inp1 = document.getElementById("formatedAddress").value;
  var inp2 = document.getElementById("formatedAddress").value;
  var inp3 = document.getElementById("formatedAddress").value;
  var sides = ["side A", "side B", "side C"]
  var side A = parseInt("data1");
  var side B = parseInt("data2");
  var side C = parseInt("data3");

  if (side A === side B && side B === side C); {
    alert("Equilateral Triangle");
    else if (side A !== side B && side === side C); {
      alert("Equilateral Triangle");
    }
    if (side A === side B && != side C); {
      alert("Isosceles Triangle");
    } else if (side A !== side B && side B !== side C); {
      alert("Scalene Triangle");
    } else if (side A + side B >= side C); {
      alert("Scalene Triangle");
    } else if (side A + side B && >= side C); {
      alert("Not a triangle at all");
    } else if (side B + side C && >= side A); {
      alert("Not a triangle at all")
    } else if (side A + side C && >= side B); {
      alert("Not a triangle at all");
    }
  }

}
