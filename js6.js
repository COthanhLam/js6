function domId(id){
    document.getElementById(id);

}

//bai tap 1
function findNum(arr){
    var sum=0;
    for (i=0;i<arr.length;i++){
        sum=sum+arr[i];
        if(sum>1000){
            console.log(arr.pop())
            return;
        }

    }
};
//bai 2; 
function Check1(){
    var xNum=+domId("number1" ).value ;
    var xNumY=+domId("number2" ).value ;
    var sum2=0;
    for (i=1;i<=xNumY;i++){
        sum2+=Math.pow(xNum,i);


    }
 
    domId("result1").innerHTML=sum;}
    
    //bai 3 ;
    function Check2(){
        var num3=+domId("num3").value;
        var sum3=0;
        for (i=1;i<num3;i++){
            sum3*=sum3*i;
        }
        domId("result2").innerHTML=sum3;
       
    }
//bai 4;
function Check3(){
    var out=""
    for (i=1;i<=10;i++){
     if (i&2===0){
        var div1= ' <div class="bg-danger"></div>'
        out+=div1
}else (i%2!==0)
     {var div2= '<div class="bg-success"></div>'
      out+=div2

     }
    }
    domId("result4").innerHTML=out;

}
//bai 5;

   function findNt(arr){
    var count=0;
    var next=0
    for(i=1;i<arr;i++){
        if(arr%i===0){
            count++
        }
        if(count===2){
            next= arr
        }
        return next;
    }

   }


   function Check5(){
    var getNum=+domId("num5").value;
    var outp=""
     for (i=0;i<getNum;i+){
        if (i=findNt(i)){
            outp+=i+" "
        }
     }
     domId("result5").innerHTML=outp;
   }