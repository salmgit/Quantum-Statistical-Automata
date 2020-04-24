
var newElement = document.createElement('p');
var L = 1000000;
var w=1000;
var f1  =0;
var f = 0;
var q = 0;
var en = 0;
var en1 = 0;
var edx = 0;
var edx1 = 0;
var kj = 50000000; // increase for accuracy
var m = 0;
var km = 20000000;

var d0 = 13.3;
var d1 =13.3;
var intr = .50 ;

var rand = new Random();

// create an array 's' and 'l' and initialize all elements to 0
var fr = new Array();
for (var i = 0; i <= km;i++) {
    fr.push([0,0]);
}
var mp =13.3*2;
for ( var m=1; m <2; m++) {
    var S = new Array();
    var Sy = new Array();

    for (var i = 0; i <= w*d0;i++) {
      S.push(0);
      Sy.push(0);
    }

    var dist = 2*mp*intr + d0;
    var st1 =(L/2)  - mp*intr;
    var st0 =(L/2) + d0 + mp*intr ;	

    f = 0;	f1 = 0;	edx = 0;	edx1 = 0;	en = 0.0;  en1=0;  ent=0;

  for ( var i = 1; i <kj; i++) {
    // throw random lines
    var p = d0 * rand.random();
    var li =  (dist + d0) *rand.random();
    var p1 =  d1 *rand.random();
    var li1 = (dist +d1)* rand.random();
    // p=Math.round(p)
    // li=Math.round(li)
    // p1=Math.round(p1)
    // li1=Math.round(li1)

    // put random lines through conditions


    if ( st1+p1 + li1 > st0+ p - li) {
      // do nothing
    }
    else
    {
      // f++;
      if (p-li>0) {
        li1=li
        en1=en1+li1;
        f1++;
        S[Math.floor(w*p)]=S[Math.floor(w*p)]+1;
      }
      else {
        en = en+(li);
        f++;
      }
    }
  }


  en = f/en;
  en1 = f1/en1;

  //document.lf.log.value += m+" "+dist+" "+en+"\n";

  for ( var ind = 0; ind<=Math.floor(w*d0); ind++)
  {
  
    // CALCULATE EXPECTATION VALUE AFTER INTERACTION HAS TAKEN PLACE
    edx = edx + (ind) * S[ind];
    edx1 = edx1 + (ind) * Sy[ind];
    
  }

  //	fr[m][0] = dist;
  //	fr[m][1] = en;	

  edx1 = (edx1 / f) ;
  edx = (edx / f);

  var table = document.getElementById("results");
  var row = table.insertRow(m);
  var distCell = row.insertCell(0);
  var chargeCell = row.insertCell(1);
  var enCell = row.insertCell(2);
  var en1Cell = row.insertCell(3);
  var expectCell = row.insertCell(4);
  var expect1Cell = row.insertCell(5);
  var expectAvgCell = row.insertCell(6);
  
  distCell.innerHTML = dist;
  chargeCell.innerHTML = en*dist;
  enCell.innerHTML = en;
  en1Cell.innerHTML = en1;
  expectCell.innerHTML =  edx/w;
  expect1Cell.innerHTML = edx1/w;
  expectAvgCell.innerHTML = (edx-edx1)/(2*w);
  
}
