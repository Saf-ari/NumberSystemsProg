function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
    var int;
    var length = UnsignedInt.toString().length;
      if(UnsignedIntBaseFrom != 10)
    {
      int = 0;
      for(var i = 0; i < length; i++){
        int2=Math.trunc(UnsignedInt/(Math.pow(10, length)));
        length--;
        int = int*UnsignedIntBaseFrom+int2;
        UnsignedInt=UnsignedInt-int2;
      }
    }
    else{
      int=UnsignedInt;
    }
    var output="";
    while(int!=0)
    {
      var next=int%UnsignedIntBaseTo;
      if(next >= 10){
        if(next == 10)
          next="A";
        else if(next == 11)
          next="B";
        else if(next == 12)
          next="C";
        else if(next == 13)
          next="D";
        else if(next == 14)
          next="E";
        else if(next == 15)
          next="F";
      }
      else{
        next=next.toString();
      }
      output=next+output.substring(0);
      int=Math.trunc(int/UnsignedIntBaseTo);
    }

  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, output], 1);

}
