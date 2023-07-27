let count = 0;

document.getElementById("decraseBtn").onclick = function(){
    count -= 1
    document.getElementById("countLabel").innerHTML = count
};

document.getElementById("resetBtn").onclick = function(){
     count = 0
    document.getElementById("countLabel").innerHTML = count
};

document.getElementById("increase").onclick = function(){
    count += 1
    document.getElementById("countLabel").innerHTML = count
}