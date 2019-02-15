function check - triangle() {
    var input1 = document.getElementById("element1").value
    var input2 = document.getElementById("element2").value
    var input3 = document.getElementById("element3").value
    var forms = ['input1', 'input2', 'input3']
    var sideA = parseInt("input1");
    var sideB = parseInt("input2");
    var sideC = parseInt("input3");
    if (sideA === sideB && sideB === sideC); {
      alert("Equilateral Traiangle");
    } else if (sideA === sideB); {
      alert("Isosceles Triangle");
    } else if (sideA !== sideB && sideB !== sideC); {
      alert("Scalene Triangle");
    } else if (sideA + sideB >= sideC); {
      alert("Scalene Triangle");
    } else if (sideA + sideB && >= sideC); {
      alert("Not a triangle at all");
    }else if(sideB + sideC && >= sideA); {
      alert("Not a triangle at all")
    }else if(sideA + sideC && >= sideB); {
      alert("Not a triangle at all");
    }
