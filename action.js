var z=document.querySelectorAll(".e");
var i=0,i1=0;
var j=180,j1=180;
for(var i=0;i<4;i++)
{
  z[i].style.position='relative';
}
setInterval(full,30);
function full()
{

  var x,y,x1,y1;
  x=80+220.5165*Math.cos(i*(Math.PI)/180);
  y=-40+220.5165*Math.sin(i*(Math.PI)/180);
  x1=-88+220.5165*Math.cos(j*(Math.PI)/180);
  y1=83+220.5165*Math.sin(j*(Math.PI)/180);
  z[0].style.top=y+'px';
  z[0].style.left=x+'px';
  z[1].style.top=y1+'px';
  z[1].style.left=x1+'px';
    i++;
    j++;
}
setInterval(full2,60);
function full2()
{

  var x,y,x1,y1;
  x=-100+450.5165*Math.cos(i1*(Math.PI)/180);
  y=200+380.5165*Math.sin(i1*(Math.PI)/180);
  x1=-44+450.5165*Math.cos(j1*(Math.PI)/180);
  y1=350+380.5165*Math.sin(j1*(Math.PI)/180);
  z[2].style.top=y+'px';
  z[2].style.left=x+'px';
  z[3].style.top=y1+'px';
  z[3].style.left=x1+'px';
    i1++;
    j1++;
}
