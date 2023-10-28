const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

// Ojos de Jack (dos óvalos)
ctx.beginPath();
ctx.fillStyle = "black";

// Ojo izquierdo
ctx.ellipse(170, 130, 15, 25, 0, 0, Math.PI * 2);
ctx.fill();

// Ojo derecho
ctx.ellipse(230, 130, 15, 25, 0, 0, Math.PI * 2);
ctx.fill();

// Nariz de Jack (triángulo)
ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(200, 140);
ctx.lineTo(190, 160);
ctx.lineTo(210, 160);
ctx.closePath();
ctx.fill();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.moveTo(190, 175);
ctx.quadraticCurveTo(200, 195, 210, 175);
ctx.stroke();

// Cuerpo de Jack (un rectángulo más delgado)
ctx.fillStyle = "black";
ctx.fillRect(180, 230, 40, 80);




ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(160, 230,20,10);
ctx.fillRect(220, 230,20,10);

ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(160, 230, 10, 40); 
ctx.fillRect(230, 230, 10, 40); 

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(165, 280, 10, 0, Math.PI * 2, true); // Mano izquierda
ctx.arc(235, 280, 10, 0, Math.PI * 2, true); // Mano derecha
ctx.fill();


ctx.fillStyle = "black";
ctx.fillRect(185, 310, 10, 40); // Pie izquierdo
ctx.fillRect(205, 310, 10, 40); // Pie derecho

ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(205, 350,30,10);
ctx.fillRect(165, 350,30,10);


ctx.beginPath();
ctx.fillStyle = "red";
ctx.moveTo(197, 230);
ctx.lineTo(203, 230);
ctx.lineTo(200, 240);
ctx.fill();


ctx.beginPath();
ctx.fillStyle = 'orange';
ctx.arc(165, 310, 20, 0, 2 * Math.PI); // Cabeza más ancha
ctx.fill();


ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.arc(165, 295, 15, 0, Math.PI, true);
ctx.stroke();



