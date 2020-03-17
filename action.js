var z=document.querySelectorAll(".e");
var i=0,i1=0;
var j=180,j1=180;
for(var i=0;i<4;i++)
{
  z[i].style.position='absolute';
}
setInterval(full,40);
function full()
{

  var x,y,x1,y1;
  x=6+13.5165*Math.cos(i*(Math.PI)/180);
  y=12+23.5165*Math.sin(i*(Math.PI)/180);
  x1=6+13.5165*Math.cos(j*(Math.PI)/180);
  y1=12+23.5165*Math.sin(j*(Math.PI)/180);
  z[0].style.top=y+'vh';
  z[0].style.left=x+'vw';
  z[1].style.top=y1+'vh';
  z[1].style.left=x1+'vw';
    i++;
    j++;
}
setInterval(full2,70);
function full2()
{

  var x,y,x1,y1;
  x=10+32.5165*Math.cos(i1*(Math.PI)/180);
  y=32+39.5165*Math.sin(i1*(Math.PI)/180);
  x1=10+32.5165*Math.cos(j1*(Math.PI)/180);
  y1=32+39.5165*Math.sin(j1*(Math.PI)/180);
  z[2].style.top=y+'vh';
  z[2].style.left=x+'vw';
  z[3].style.top=y1+'vh';
  z[3].style.left=x1+'vw';
    i1++;
    j1++;
}
var cnt=0,u;
var o=document.querySelector(".register");
var p=document.querySelector(".orbit.nucleus_circle")
z[2].addEventListener("click",()=>{
  for(var i=0;i<4;i++)
  {
    z[i].style.display='none';
  }
  document.querySelector(".orbit").style.display="none";
  p.style.display="none";
u=setInterval(expand,50);
  o.style.display="block";
});
function expand()
{
  if(cnt===90)
  {
  clearInterval(u);
  cnt=0;
  }
  else{
    cnt+=.01;
  o.style.opacity=cnt;
}
}
window.addEventListener("load",playvid);
function playvid()
{
   document.querySelector("#vid").style.display="inline-block";
document.querySelector("video").play();                 
  for(var i=0;i<4;i++)
  {
    z[i].style.display='none';
  }
  setTimeout(()=>{
    document.querySelector("#vid").style.display="none";
  for(var i=0;i<4;i++)
  {
    z[i].style.display='inline-block';
  }
  document.querySelector(".orbit").style.display='inline-block';
  p.style.display="inline-block";
  },10000);
};
