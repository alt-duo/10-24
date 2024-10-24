
let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;
document.getElementById("submitguess").onclick = function () {
    let x = document.getElementById("guessField").value;
    x = x.toLowerCase();
    
    if (x == "green") {
        x = "go";
        let j = "";    
        for(let i = 0;i<100; i++){
            j += (x + " ");
        }
        document.getElementById("custom-div").innerHTML = j;
    }
    if(x == "yellow"){
        x = "slow";
        let j = "";    
        for(let i = 0;i<100; i++){
            j += (x + " ");
        }
        document.getElementById("custom-div").innerHTML = j;
    }
    if(x == "red"){
        x = "stop";
        let j = "";    
        for(let i = 0;i<100; i++){
            j += (x + " ");
        }
        document.getElementById("custom-div").innerHTML = j;
    }
}

//avg 5 numbers
let arr = [];
let nums = 0;
let sum = 0;
let evens = 0;
document.getElementById("submitguess2").onclick = function () {
    let x = document.getElementById("guessField2").value;

    let arr2 = x.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );

    if (nums !=4) {
        for(let i = 0;i<arr2.length;i++){
            arr.push(arr2[i]);
            nums++;
        }
        
        document.getElementById("custom-div2").innerHTML = "you've given me " + nums + " numbers";
        
    }
    if(arr.length>=5){
        var size = arr2.length;
        if(size>5){
            document.getElementById("custom-div2").innerHTML = "you've give me more than 5 numbers, so i'm only going to use the first 5 numbers";

        }
        for (let i = 0; i < 5; i++) {
            sum = sum + parseInt(arr[i], 10);
            if(arr[i]%2==0){
                evens++;
            }
        }
        document.getElementById("custom-div2").innerHTML = "the average for all 5 numbers is: " + (sum/5) + " and there are "+ evens + " even numbers in this array<br> array numbers: " + arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] + " " + arr[4];
        //resetting everything
        arr2 = [];
        arr = [];
        size = 0;
        nums = 0;
        evens = 0;
        sum = 0;
    }
}
