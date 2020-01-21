function ConversionPart2() {

    var SignedDecimalInt = document.getElementById("2_SignedInt").value;
    var number = Math.abs(parseInt(document.getElementById("2_SignedInt").value));

    var outputValue = "";
    var outputValueTwosComplement = "";

    //make binary of decimal
    var signedBinary;

    var UnsignedInt = parseInt(document.getElementById("2_SignedInt").value);
    var UnsignedIntBaseFrom = 10;
    var UnsignedIntBaseTo = 2;
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
    signedBinary = output;







    // part 2
    for (var i = 0; i < signedBinary.length; i++){
//      outputValueTwosComplement = "" + signedBinary.charAt(i) + outputValueTwosComplement;
      if (signedBinary.charAt(i)== 0){
        outputValueTwosComplement = "" + outputValueTwosComplement + "1";
      }
      else{
        outputValueTwosComplement = "" + outputValueTwosComplement +"0";
      }
    }









       FormatAndShowOutput([signedBinary, outputValueTwosComplement, SignedDecimalInt], 2);

}
