function checkout()
{
inp1 = parseInt(document.Triangle_inputs.input 1.value);
inp2 = parseInt(document.Triangle_inputs.input 2.value);
inp3 = parseInt(document.Triangle_inputs.input 3.value);
    side A = (inp1 + inp2);
    side B = (inp1 + inp3);
    side C = (inp + inp3);

    if (sideA === sideB && sideB === sideC); {
      alert("Equilateral Triangle");
    } else if (sideA === sideB && != sideC); {
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
  }
