/*
*	Awestomates - An awesome place for new ostomates
*	Version: 1.8.0
*	Author: Kaska
*	Author URL: https://github.com/batmanwgd
*	Copyright © Awestomates by Kaska. All Rights Reserved.
*/


/***********************
	Rotating Ostomies
************************/

// set up text to print, each item in array is new line
var aText = new Array(
    "<i class='fa fa-check grn-ck'></i> Urostomies", 
    "<i class='fa fa-check grn-ck'></i> Illeostomies",
    "<i class='fa fa-check grn-ck'></i> Colostomies",
    "<i class='fa fa-check grn-ck'></i> Ostomate caregivers"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typed-txt");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();