
function npbackFunction() {
location.reload();
}
function tiptobeornot() {
	var a=document.getElementById('chkHideHelp').checked;
	if (document.getElementById('chkHideHelp').checked) {document.getElementById('tuto').style.display = 'block';} else {document.getElementById('tuto').style.display = 'none';}
	
}
function npFunction() {
	document.getElementById('imgTablehead').style.visibility="visible";
	document.getElementById('txtNumberofpossibilities').disabled='true';
	document.getElementById('NPbtn').style.display="none";
	document.getElementById('NPbtnback').style.display="";
	var np = document.getElementById("txtNumberofpossibilities").value;
	var pp = Math.pow(2, np);
	var npcounter = pp;
	var bn='';
	for (i = 0; i < pp; i++) { 
		
		//shoro
		var itm=document.getElementById('PDType');
		var divPD = itm.cloneNode(true); 
		
		//dragtargetType	
		var itm=document.getElementById('dragtargetType');
		var div = itm.cloneNode(true); 
		//tamam
		
		
		//var div = document.createElement("div");
		div.className="divsatr";
		var es = '';
		es = dec2bin(i); 
		var lngbin = es.length;
		if (lngbin<8) {
			for (j=0; j<(8-lngbin); j++) {
				es = '0'+es;
			}
		}
		div.setAttribute("id", 'div'+es);

		var divinnerES = document.createElement("div");
		divinnerES.setAttribute("id", 'divinnerES'+es);
		divinnerES.className="bloc2ES";
		var npp=(8-np)*9;
		if (np==0) {npp='82';}
		divinnerES.style.paddingLeft=npp+'px';
		divinnerES.style.paddingRight=npp+'px';

		var divinner = document.createElement("div");
		divinner.setAttribute("id", 'divinner'+es);
		divinner.className="bloc2";
		
		var divinnertxt = document.createElement("div");
		divinnertxt.setAttribute("id", 'divinnertxt'+es);
		divinnertxt.className="bloc2";
		
		document.getElementById("tuto").innerHTML="<div id='texttutotext' style='text-align:left;padding-left:115px;'><div><div id='texttutotext' style='text-align:left;width:349px;padding-left:20px;border:1px solid #cfcfcf;'><font color='gray'>-input the mass distribution! <br> </font> <font color='cccccc'>  ! (notice the sum of masses should be one)</font><br><font color='#cccccc'> The sum of inputs is in 'Mass Sum' &#8593;<br>&#8598; tick the textbox for no-tip</font></div></div></div><hr width='580px'>";
		document.getElementById("imgTablehead").style.display="";
		document.getElementById("lineheadtable").width="580px";
		document.getElementById("divTips").style="padding-left:115px";
		
		var mass=0;
		var opEStxt= "&nbsp;&nbsp;<img src='images/brco.png' width='4px';> <img src='images/pro.png' width='4px';> ";
		var Corebelief="";
		var mdEPtxt= " <img src='images/prc.png' width='4px';> ";
		var clEStxt= " <img src='images/brcc.png' width='4px';>&nbsp;&nbsp;&nbsp;&nbsp;";
		var Noncorebelief="";
		var atom=["<img src='images/og/o0.png' width='15px';>","<img src='images/og/o1.png' width='15px';>","<img src='images/og/o2.png' width='15px';>","<img src='images/og/o3.png' width='15px';>","<img src='images/og/o4.png' width='15px';>","<img src='images/og/o5.png' width='15px';>","<img src='images/og/o6.png' width='15px';>","<img src='images/og/o7.png' width='15px';>"];
		var Natom=["<img src='images/og/g0.png' width='15px';>","<img src='images/og/g1.png' width='15px';>","<img src='images/og/g2.png' width='15px';>","<img src='images/og/g3.png' width='15px';>","<img src='images/og/g4.png' width='15px';>","<img src='images/og/g5.png' width='15px';>","<img src='images/og/g6.png' width='15px';>","<img src='images/og/g7.png' width='15px';>"];
		for (k=0; k<np;k++){
			if (es.substring(7-k, 7-k+1)==1){ 
				Corebelief=Corebelief+atom[k];
			}
			else
			{
				Noncorebelief=Noncorebelief+Natom[k];
			}
		}
		var eschr=opEStxt+Corebelief+mdEPtxt+Noncorebelief+clEStxt;
		divinnerES.innerHTML = eschr;
		divinner.innerHTML="<font color='#c7cdd3'>|&nbsp;&nbsp;&nbsp;&nbsp;"+es+"&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;</font>";
		divinnertxt.innerHTML="";
		divPD.setAttribute("id", "divPD"+es);
		
		
		
		//document.getElementById('divDragablerobotja').appendChild(divPD);
		//document.getElementById("divPD"+es).appendChild(div);
		div.className="sortclassdragicon";
		document.getElementById('sortable').appendChild(div);
		document.getElementById('div'+es).appendChild(divinnerES);
		document.getElementById('div'+es).appendChild(divinner);
		document.getElementById('div'+es).appendChild(divinnertxt);
		
		
		
			
		txt=document.createElement("input");   //creating the mass textbox
		txt.setAttribute("id", 'txtmass'+es);
		txt.className="txtmass";
		txt.type="number";
		txt.min="0";
		txt.max="1";
		txt.step=".01";
		txt.width="135px";
		
		document.getElementById('divinnertxt'+es).appendChild(txt);
		
		txt=document.createElement("input");     //creating the belief textbox
		txt.setAttribute("id", 'txtbelief'+es);
		txt.className="txtbeliefcss";
		txt.type="number";
		txt.min="0";
		txt.max="1";
		txt.step=".01";
		txt.width="135px";
		txt.disabled="true";
		document.getElementById('divinnertxt'+es).appendChild(txt);
		txt=document.createElement("input");     //creating the plausibility textbox
		txt.setAttribute("id", 'txtplausibility'+es);
		txt.className="txtplausibilitycss";
		txt.type="number";
		txt.min="0";
		txt.max="1";
		txt.step=".01";
		txt.width="135px";
		txt.disabled="true";
		document.getElementById('divinnertxt'+es).appendChild(txt);
		txt=document.createElement("input");     //creating the commonality textbox
		txt.setAttribute("id", 'txtcommonality'+es);
		txt.className="txtcommonalitycss";
		txt.type="number";
		txt.min="0";
		txt.max="1";
		txt.step=".01";
		txt.width="135px";
		txt.disabled="true";
		document.getElementById('divinnertxt'+es).appendChild(txt);
		document.getElementById('div00000000').style.display="none";
		
			
		
	}
	
	$(".txtmass").focus(function() {
		
		var np=document.getElementById("txtNumberofpossibilities").value;
		var enp=0;
		enp=Math.pow(2,np);
		var ent=this.id;
		ent=ent.substring(ent.length-8);
		var ment=0; var plki="";var commki="";
		ment=parseInt(ent, 2);
		ent="txtbelief"+ent;
		for (ki=0; ki<enp; ki++ ) {
			var OrPropositions=ment|ki;
			var AndProposition=ment&ki;
			var mki=ki.toString(2);
				mki="00000000"+mki;
				mki=mki.substring(mki.length-8);
				plki="txtplausibility"+mki;
				commki='txtcommonality'+mki;
				mki="txtbelief"+mki;
			if (AndProposition==ki) {				
				document.getElementById(mki).style.background="#fffc38";
				}
			if (AndProposition>0) {
					document.getElementById(plki).style.background="rgb(244, 253, 131)";//#ffca38";		
				}
			
			if (OrPropositions==ment) {
				
					document.getElementById(commki).style.background="#F6FBBC"; //#ff9838";		
				}
			}
		
		});
		
	$(".txtmass").focusout(function() {
		var np=document.getElementById("txtNumberofpossibilities").value;
		var enp=0;
		enp=Math.pow(2,np);
		var oldmass=document.getElementById("txtPerspective").value;
		/*if (this.value<oldmass) {
			document.getElementById("div"+this.id.substring(this.id.length-8)).style.background="#e5f2ff";
		
		} else {	document.getElementById("txtPerspective").value=this.value;
			for (kdsi=0; kdsi<enp; kdsi++ ) {
				var mdski=kdsi.toString(2);
				var mdski="00000000"+mdski;
				mdski=mdski.substring(mdski.length-8);
				var txtmdski="txtmass"+mdski;
				var binbin=this.value;
				var dindin=document.getElementById(txtmdski).value;
				if(!isNaN(dindin) && dindin.length!=0 && !isNaN(binbin) && binbin.length!=0) {
					if (binbin==dindin) {
					document.getElementById("div"+mdski).style.background="rgb(0, 147, 255)";
					
					} else {document.getElementById("div"+mdski).style.background="#e5f2ff";}
				}	
			}		
		}
		*/
		
		var ent=this.id;
		ent=ent.substring(ent.length-8);
		var ment=0; var plki="";var commki="";
		ment=parseInt(ent, 2);
		ent="txtbelief"+ent;
		for (ki=0; ki<enp; ki++ ) {
			var OrPropositions=ment|ki;
			var AndProposition=ment&ki;
			var mki=ki.toString(2);
				mki="00000000"+mki;
				mki=mki.substring(mki.length-8);
				plki="txtplausibility"+mki;
				commki='txtcommonality'+mki;
				mki="txtbelief"+mki;
			if (AndProposition==ki) {				
				document.getElementById(mki).style.background="white";
				}
			if (AndProposition>0) {
					document.getElementById(plki).style.background="white";		
				}
			
			if (OrPropositions==ment) {
				
					document.getElementById(commki).style.background="white";		
				}
			}
	
		
	  
	});
		
			
			
	$(document).ready(function(){
		
		
		$(function() {
			$("#sortable").sortable(); 
			var isFirefox = typeof InstallTrigger !== 'undefined';
			if (isFirefox){} else{$("#sortable").disableSelection();}
			});
		var dimm=0;
			//iterate through each textboxes and add keyup
			//handler to trigger sum event
			$(".txtmass").each(function() {
				$(this).keyup(function(){
					
					
					
					/*var perspectivestateholder="";
					var np=document.getElementById("txtNumberofpossibilities").value;
					var enp=0;
					enp=Math.pow(2,np);
					var oldmass=document.getElementById("txtPerspective").value;
					if(!isNaN(this.value) && this.value.length!=0) {
						if (this.value<oldmass) {
							document.getElementById("div"+this.id.substring(this.id.length-8)).style.background="#e5f2ff";
						
						} else {	
							for (kdsi=0; kdsi<enp; kdsi++) {
								var mdski=kdsi.toString(2);
								var mdski="00000000"+mdski;
								mdski=mdski.substring(mdski.length-8);
								var txtmdski="txtmass"+mdski;
								var binbin=this.value;
								var dindin=document.getElementById(txtmdski).value;
								if(!isNaN(dindin) && dindin.length!=0 && !isNaN(binbin) && binbin.length!=0) {
									if (binbin==dindin) {
									document.getElementById("div"+mdski).style.background="rgb(0, 147, 255)";
									perspectivestateholder+='|'+kdsi.toString();
									document.getElementById("txtPerspectivestate").value=perspectivestateholder;
									
									} else {document.getElementById("div"+mdski).style.background="#e5f2ff";}
								}	
							}		
						}
					}
				*/
				//check
				
				
				
				//check
					calculateSum();
					massFunction();
				});
			});		 
		});
		
		function calculateSum() {
			var sum = 0;maxma=0;PrsSt="";
			//iterate through each textboxes and add the values
			$(".txtmass").each(function() {
				$("#txtmass").css("background-color", "yellow");
				//add only if the value is number
				if(!isNaN(this.value) && this.value.length!=0) {
					maxma=Math.max(maxma,this.value);
					
					
					sum += parseFloat(this.value);
					
				}
			});
			$('#txtmass').val(sum.toFixed(2));
			//document.getElementById("txtPerspectivestate").style.color="rgb("+parseInt(sum*177, 10)+",208,"+247+")";
			if (sum<1.001 && sum>.999) {document.getElementById("txtmass").style.background="white";}
			$('#txtPerspective').val(maxma.toFixed(2))
			
			$(".txtmass").each(function() {
			
				//add only if the value is number
				if(!isNaN(this.value) && this.value.length!=0) {
				var kola=this.id.substring(this.id.length-8);
				var dolla=parseInt(kola, 2);
								
					if (this.value>=maxma) {
						document.getElementById('div'+kola).style.background="rgb(198, 237, 247)";PrsSt=PrsSt+dolla+'.';
						} 
					else {
						document.getElementById('div'+kola).style.background="#e5f2ff";
						}	
				}
			});
			document.getElementById('txtPerspectivestate').value=PrsSt;
			PrsSt="";
			//.toFixed() method will roundoff the final sum to 2 decimal places
			
			//$('#txtmass').val(maxma.toFixed(2));
		}
	}
function decimalToHexString(number) {
    if (number < 0)
    {
    	number = 0xFFFFFFFF + number + 1;
    }

    return number.toString(16).toUpperCase();
}
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
function massFunction() {
	
	
	
	var np=document.getElementById("txtNumberofpossibilities").value;
	var npd=Math.pow(2,np);
	var valsum=0; var valpl=0; valcomm=0;
	for (i=0; i<npd; i++){
			for (j=0; j<npd; j++){
				var itxt="00000000"+i.toString(2);
				var jtxt="00000000"+j.toString(2);
				itxt="txtbelief"+itxt.substring(itxt.length-8);
				jtxt="txtmass"+jtxt.substring(jtxt.length-8);
				ktxt="txtplausibility"+itxt.substring(itxt.length-8);
				commtxt="txtcommonality"+itxt.substring(itxt.length-8);
				var OrPropositions=i|j;
				var AndProposition=i&j;
				
				
				if (AndProposition==j) {
					//var val1=document.getElementById(itxt).value;
					var ob=document.getElementById(jtxt);
					if(!isNaN(ob.value) && ob.value.length!=0) {
						
					valsum += parseFloat(ob.value);	
					
					}
				
				}
				if (AndProposition>0) {
					//var val1=document.getElementById(itxt).value;
					var ob=document.getElementById(jtxt);
					if(!isNaN(ob.value) && ob.value.length!=0) {
					valpl += parseFloat(ob.value);	
					
					}	
					
				}
				
				if ((AndProposition==i) && (j==j)) {
					//var val1=document.getElementById(itxt).value;
					var ob=document.getElementById(jtxt);
					if(!isNaN(ob.value) && ob.value.length!=0) {
					valcomm += parseFloat(ob.value);	
					
					}	
					
				}
				
			}
			document.getElementById(itxt).value=valsum.toFixed(2);
			document.getElementById(ktxt).value=valpl.toFixed(2);
			document.getElementById(commtxt).value=valcomm.toFixed(2);
			
			valsum=0; valpl=0;valcomm=0;
	}
	
	
}
function allrelatives() {
	
}

function allrelativesChange() {
	
}

		
		
		
	