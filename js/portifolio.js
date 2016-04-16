
var tab1;
var tab2;
var tab3;
var scrl = " ALAN NASCIMENTO -->";

window.onload = function(){
	
	scrlsts();
	
	tab1 = document.getElementById("tab1");
	tab2 = document.getElementById("tab2");
	
	tab2.onclick = mostrartab1;
	
	tab2.classList.add("escondido");

	
}

function mostrartab2(){
	tab2.classList.remove("escondido");
	tab1.classList.add("escondido");
	
}

function mostrartab1(){
	tab1.classList.remove("escondido");
	tab2.classList.add("escondido");

	
}
	
	function t1(){
    document.getElementById('tab-2').style.display = 'none';
    document.getElementById('tab-1').style.display = 'block';
}

	function t2(){
    document.getElementById('tab-1').style.display = 'none';
    document.getElementById('tab-2').style.display = 'block';
}

	function ft(){
	document.getElementById('ft1').style.transform= "rotate(500grad)";	
	document.getElementById('ft1').style.transition= "3s ease";
}

function scrlsts() {
	 scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
	 document.title = scrl;
	 setTimeout("scrlsts()", 300);
 }