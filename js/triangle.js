function findout() {
  var inp1 = document.getElementById("data1").value
  var inp2 = document.getElementById("data2").value
  var inp3 = document.getElementById("data3").value
  var sides = ["sideA", "sideB", "sideC"]
  var sideA = parseInt("sideA");
  var sideB = parseInt("sideB");
  var sideC = parseInt("sideC");

  if (sideA === sideB && sideB === sideC); {
    alert("Equilateral Triangle");
    else if (sideA !== sideB && sideB === sideC); {
      alert("Equilateral Triangle");
    }
    if (sideA === sideB && != sideC); {
      alert("Isosceles Triangle");
    } else if (sideA !== sideB && sideB !== sideC); {
      alert("Scalene Triangle");
    } else if (sideA + sideB >= sideC); {
      alert("Scalene Triangle");
    } else if (sideA + sideB && >= sideC); {
      alert("Not a triangle at all");
    } else if (sideB + sideC && >= sideA); {
      alert("Not a triangle at all")
    } else if (sideA + sideC && >= sideB); {
      alert("Not a triangle at all");
    }
  }

}
