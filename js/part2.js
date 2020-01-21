function ConversionPart2() {

    var SignedDecimalInt = document.getElementById("2_SignedInt").value;
    var number = Math.abs(parseInt(document.getElementById("2_SignedInt").value));

    var outputValue = "";
    while (number != 0)
    {
      outputValue = number % 2 + outputValue;
      number = Math.trunc(number / 2);
    }


    while (outputValue.length<32){
      outputValue = ""+ outputValue;
    }



    

    var outputValueTwosComplement = "";

    for (var i =0; i< outputValue.length; i++){
      if (outputValue.charAt(i)==0){
        outputValueTwosComplement += 1;
      }
      else {
        outputValueTwosComplement += 0;
      }
    }




       FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);

}
