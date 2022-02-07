function check() {
    var c=0
var q1=document.test1.question1.value;
var q2=document.test1.question2.value;
var q3=document.test1.question3.value;
var q4=document.test1.question4.value;
var q5=document.test1.question5.value;
var result=document.getElementById("result");
if  (q1=="script") {c++}
if (q2=="script") {c++}
if (q3=="let") {c++}
if (q4=="for loop") {c++}
if (q5=="if not") {c++}
    test1.style.display= "none";
    
     if (c==1) {
         result.textContent="your score is 20%. there you go being an idiot! lets do it again!!"
     }
    else if (c==2) {
        result.textContent= "your score is 40%. below average but still can do it. try again"
    } else if (c==3) {
        result.textContent="your score is 50%. average score. nice work."
    }
      else if (c==4) {
          result.textContent="your score is 80% percent CONCRATULATINS for the nice work."
      }
       else if (c==5){
           result.textContent="you have scored 100%. EXELENT work keep it up!!!"
       }
     

} 