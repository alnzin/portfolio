
	var canvas, ctx, ALTURA, LARGURA, frames = 0;

	function clique(event){
		alert("clicou!");
	}
		
	function roda(){
		atualizar();
		desenhar();
		window.requestAnimationFrame(roda);
			
	}
		
	function atualiza(){
		frames++;
			
	}
		
	function desenha(){
		ctx.fillStyle= "#50beff";
		ctx.fillRect(0, 0, LARGURA, ALTURA);
	}
		
	function main(){
		ALTURA = window.innerHeight;
		LARGURA = window.innerWidth;
			
		if(LARGURA >= 500){
			LARGURA = 600;
			ALTURA = 600;
		}
			
		canvas = document.createElement("canvas");
		canvas.width = LARGURA;
		canvas.height = ALTURA;
		canvas.style.border = "1px solid #000";
				
		ctx = canvas.getContext("2d");
		document.body.appendChild(canvas);
		document.addEventListener("mousedown", clique);
				
		roda();
	}
main();
