for(let i=1; i<=50; i++){
    // document.write(`${i} <br>`);

    let result = "";
    let stringNum = i.toString();

    for(let j=0; j<stringNum.length; j++){
       if(stringNum[j]=="3" || stringNum[j]=="6" || stringNum[j]=="9"){
        result += "짝!";
       };
    };
    document.write(result.length>0 ? result+"<br>" : i +"<br>"); 
};