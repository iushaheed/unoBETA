var allCards=new Array("b1","b2","b3","b4","b5","b6","b7","b8","b9","b10",
						  "g1","g2","g3","g4","g5","g6","g7","g8","g9","g10",
						  "r1","r2","r3","r4","r5","r6","r7","r8","r9","r10",
						  "y1","y2","y3","y4","y5","y6","y7","y8","y9","y10" );
	

	var arrayForOnClick=new Array();

	var pcCards =new Array();
	var pclength=pcCards.length;

	var userCards=new Array();
	var userlength=userCards.length;

	var usedCards=new Array();
	var usedlength=usedCards.length;

	 var clickedOnes=new Array();
	 for (var i = 0; i < 10 ; i++) 
	 {
	 	clickedOnes[i]=false;
	 }
	// var wentlength=wentTable.length();


	var running=new Array();

	var counter=0;

		function play()
		{
			distribute2user();
			// playPc();
			printUserCards();
			setTimeout(
				function(){
				playPc();
				document.getElementById('turn').innerHTML = "<p>YOUR TURN</p>";
			}
			,1500);
		}



function printUserCards()
{
					//global userCards;
					
					var c=0;
					while(c<userlength)
					{
						var one=userCards[c];
						arrayForOnClick[c]=one;
						//alert(one);
						if (c==0)
						{
							
								document.getElementById('use0').innerHTML="<img src='cards/" +one + ".jpg' onclick=goToTable('0') />";
							
						}
						else if (c==1)
						{
							document.getElementById('use1').innerHTML="<img src='cards/" +one + ".jpg' onclick=goToTable('1') />";
						}
						else if (c==2) 
						{
							document.getElementById('use2').innerHTML="<img src='cards/" +one + ".jpg' onclick=goToTable('2') />";
						}
						else if (c==3) 
						{
							document.getElementById('use3').innerHTML="<img src='cards/" +one + ".jpg' onclick=goToTable('3') />";
						}
						else if (c==4) 
						{
							document.getElementById('use4').innerHTML="<img src='cards/" +one + ".jpg' onclick=goToTable('4') />";
						}
						else if (c==5) 
						{
							document.getElementById('use5').innerHTML="<img src='cards/" +one + ".jpg' onclick=goToTable('5') />";
						}
						else if (c==6) 
						{
							document.getElementById('use6').innerHTML="<img src='cards/" +one + ".jpg' onclick=goToTable('6') />";
						}
						else if (c==7) 
						{
							document.getElementById('use7').innerHTML="<img src='cards/" +one + ".jpg' onclick=goToTable('7') />";
						}
						else if (c==8) 
						{
							document.getElementById('use8').innerHTML="<img src='cards/" +one + ".jpg' onclick=goToTable('8') />";
						}
						else if(c==9)
						{
							document.getElementById('use9').innerHTML="<img src='cards/" +one + ".jpg' onclick=goToTable('9') />";
						}
						else{}
						c++;
				}
}




function goToTable(x)
	{
		// //alert(x);
		var pass=0;
		for(var i=0; i<arrayForOnClick.length; i++)
		{
			if (arrayForOnClick[i]==x) 
			{
			pass++;
			}
		}
		if(pass==0)
		{

			var tableCard=arrayForOnClick[x];

			showCard(tableCard);

			arrayForOnClick.push(x);

			update(x);

		 }
		else
		{
			alert("ALERT !! used card !! Choose a new card");
		}
	}


function update(y)
	{
		userCards[y]="z";
		printUserCards();
		document.getElementById('turn').innerHTML = "<p>PC TURN</p>";
		setTimeout(function(){playPc();
		document.getElementById('turn').innerHTML = "<p>YOUR TURN</p>";},1500);

		// playPc();

	}


function playPc()
	{
		var match=pGiveMeCard(running);
		if(match=="no")
		{
			//alert(match);
			showCard(running);
		}else
		{
			//alert(match);
			showCard(match);
		}
	}

function matching(pcC)
{
	if(running[0]==pcC.charAt(0) || running[running.length-1]==pcC.charAt(pcC.length-1))
		return true;
	return false;

}
function pGiveMeCard(run){
	for (var i = 0; i < pclength; i++) {
		if(pcCards[i].charAt(0)==run.charAt(0) || pcCards[i].charAt(pclength-1)==run.charAt(run.length-1)){
			var temp=pcCards[i];
			pcCards[i]="z";
			return temp;
		}
	};
	return "no";

}

function uCheckMyCard(hello,run){
	for (var i = 0; i < hello.length; i++) 
	{
		if(hello[i].charAt(0)==run.charAt(0) || hello[i].charAt(hello.length-1)==run.charAt(run.length-1))
		{
			return true;
 		}
	};
	return false;

}


function skip()
{
	//alert("skipped");


		document.getElementById('turn').innerHTML = "<p>PC TURN</p>";
		setTimeout(function(){playPc();
		document.getElementById('turn').innerHTML = "<p>YOUR TURN</p>";},1500);
}


function showCard(pcC)
	{
			document.getElementById('tableDiv').innerHTML = "<img src='cards/"+ pcC +".jpg' alt='card loading'/>";
			running=pcC;

			var fullU=0;
			for (var i = 0; i < userlength; i++) {
				if(userCards[i]=="z")
					fullU++;
			};
			if(fullU==10){
				alert("CONGRATS !!! you won !");
				window.location = "login.php";
			}
			var fullP=0;
			for (var i = 0; i < pclength; i++) {
				if(pcCards[i]=="z")
					fullP++;
			};
			if(fullP==10){
				alert("YOU LOSE!\n better luck next time\n BTW...thanks for playing :P ");
				window.location = "index.php";
			}
//			the most important line
			// alert(running);
			
			// alert(running[0]);

			// alert(running[running.length-1]);
	}


function printThis(){
// print();
       var divElement0 = document.getElementById('use0').innerHTML;
       var divElement1 = document.getElementById('use1').innerHTML;
       var divElement2 = document.getElementById('use2').innerHTML;
       var divElement3 = document.getElementById('use3').innerHTML;
       var divElement4 = document.getElementById('use4').innerHTML;
       var divElement5 = document.getElementById('use5').innerHTML;
       var divElement6 = document.getElementById('use6').innerHTML;
       var divElement7 = document.getElementById('use7').innerHTML;
       var divElement8 = document.getElementById('use8').innerHTML;
       var divElement9 = document.getElementById('use9').innerHTML;

        var oldPage = document.body.innerHTML;

        document.body.innerHTML = 
          "<html><head><title></title></head><body>" + 
        divElement0+divElement1+divElement2+divElement3+divElement4+
		divElement5+divElement6+divElement7+divElement8+divElement9 + "</body>";

        //Print Page
        window.print();

        //Restore orignal HTML
        document.body.innerHTML = oldPage;

}
function rules(){
	alert("1.Release all cards to win.\n\n2. Match either the color or the number of the running card on board.\n\n3. Press 'SKIP' if there is no matching card.");
}

function distribute2user()
		{
			var countP=0;
			var countU=0;
			var countAll=0;
			while (countAll<20)
			{
				var combinationArray=new Array("b","g","r","y");
	 			var arrayGhor=Math.floor((Math.random()*4));
	 			var temp=combinationArray[arrayGhor]+Math.floor((Math.random()*10)+1);
	 			
	 			var unique=true;
//	 			unique = usedCards.indexOf("temp");
	 			for (var i = 0; i < usedCards.length; i++) 
	 			{
	 				if (usedCards[i]==temp)
	 					unique=false;
	 			}
	 			if(unique)
	 			{
	 				//alert(temp);
	 				if (countAll<10) 
 					{
	 					pcCards[countP]=temp;
	 					//alert(pcCards[countP]);
	 					countP++;
	 					pclength++;

	 					
 					}
					else
 					{
	 					userCards[countU]=temp;
	 					//alert(userCards[countU]);
		 				countU++;
		 				userlength++;

	 				}
				usedCards[countAll]=temp;
		 		countAll++;
	 			
		 		}
		 		else
		 		{}
			}
		}

		function submitted(){
			alert("thanks for your comment\nTHANK YOU");
//			document.comForm.msg.value =" ";
//			document.getElementById('textField').innerHTML = "<p>PC TURN</p>";
		}

