turn=1;
count=0;
winner="false";
function main(i){
b=document.getElementById('square'+i);
if(count<10){
if(b.value==""){
if(turn==1){
b.value="X";
turn=2;
checkresult();
}
else if(turn==2){
b.value="O";
turn=1;
checkresult();
}
count+=1;
}
}
}
function checkresult(){
squares=[
document.getElementById("square11").value,
document.getElementById("square12").value,
document.getElementById("square13").value,
document.getElementById("square21").value,
document.getElementById("square22").value,
document.getElementById("square23").value,
document.getElementById("square31").value,
document.getElementById("square32").value,
document.getElementById("square33").value,
];
if(squares[0]==squares[1] && squares[1]==squares[2]){
if(squares[0]=="X"){
alert("Player 1 wins");
}else if(squares[0]=="O"){
alert("Player 2 wins");
}
if(square[0]!=""){
winner="true";
}
}
if(squares[3]==squares[4] && squares[4]==squares[5]){
if(squares[3]=="X"){
alert("Player 1 wins");
}else if(squares[3]=="O"){
alert("Player 2 wins");
}
if(square[3]!=""){
winner="true";
}
}
if(squares[6]==squares[7] && squares[7]==squares[8]){
if(squares[6]=="X"){
alert("Player 1 wins");
}else if(squares[6]=="O"){
alert("Player 2 wins");
}if(square[6]!=""){
winner="true";
}
}
if(squares[0]==squares[3] && squares[3]==squares[6]){
if(squares[0]=="X"){
alert("Player 1 wins");
}else if(squares[0]=="O"){
alert("Player 2 wins");
}if(square[0]!=""){
winner="true";
}
}
if(squares[1]==squares[4] && squares[4]==squares[7]){
if(squares[1]=="X"){
alert("Player 1 wins");
}else if(squares[1]=="O"){
alert("Player 2 wins");
}if(square[1]!=""){
winner="true";
}
}
if(squares[2]==squares[5] && squares[5]==squares[8]){
if(squares[2]=="X"){
alert("Player 1 wins");
}else if(squares[2]=="O"){
alert("Player 2 wins");
}if(square[2]!=""){
winner="true";
}
}
if(squares[0]==squares[4] && squares[4]==squares[8]){
if(squares[0]=="X"){
alert("Player 1 wins");
}else if(squares[0]=="O"){
alert("Player 2 wins");
}if(square[0]!=""){
winner="true";
}
}
if(squares[2]==squares[4] && squares[4]==squares[6]){
if(squares[2]=="X"){
alert("Player 1 wins");
}else if(squares[2]=="O"){
alert("Player 2 wins");
}if(square[2]!=""){
winner="true";
}
}if(count==8){
alert(winner);
}
}