var row1 = [1, 2, 3];
var row2 = [4, 5, 6];
var row3 = [7, 8, 9];
var col1 = [1, 4, 7];
var col2 = [2, 5, 8];
var col3 = [3, 6, 9];
var diag1 = [1, 5, 9];
var diag2 = [3, 5, 7];

allChecks = [row1, row2, row3, col1, col2, col3, diag1, diag2];

function startGame() {
    document.getElementById("board").style.display = "grid";
    document.getElementById("current-player").style.display = "block";
    document.getElementById("start").style.display = "none";
}

function resetGame(){
    for(var i = 1; i <= 9; i++){
        document.getElementById(i).innerHTML = "-";
        document.getElementById(i).disabled = false;
        document.getElementById("winner-name").innerHTML = "";
    }
}

function BlockAllCells() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).disabled = true;
    }
}

function Checker(){
    for(var i = 0; i < 8; i++){
        var check = allChecks[i];
        var htmlArr = []
        for(var j = 0; j < 3; j++){
            
            x = document.getElementById(check[j]).innerHTML;
            //console.log(check[j]);
            htmlArr.push(x);
        }
        //console.log(i);
        //console.log("tested")
        if(htmlArr[0] == htmlArr[1] && htmlArr[1] == htmlArr[2]){
            if(htmlArr[0] == "X"){
                document.getElementById("winner-name").innerHTML = "X";
                document.getElementById("winner").style.display = "block";
                BlockAllCells();
            }
            else if(htmlArr[0] == "O"){
                document.getElementById("winner-name").innerHTML = "O";
                document.getElementById("winner").style.display = "block";
                BlockAllCells();
            }
        }
    }
    //if all cells are filled set to draw
    var count = 0;
    for(var i = 1; i <= 9; i++){
        if(document.getElementById(i).innerHTML != "-"){
            count++;
        }
    }
    if(count == 9){
        document.getElementById("winner-name").innerHTML = "Draw";
        document.getElementById("winner").style.display = "block";
        BlockAllCells();
    }

}


function ButtonPressed(x) {
    currentPlayer = document.getElementById("curr-player").innerHTML;

    if (currentPlayer == "X") {
        document.getElementById(x).innerHTML = "X";
        document.getElementById("curr-player").innerHTML = "O";
        document.getElementById(x).disabled =  true;
    }
    else {
        document.getElementById(x).innerHTML = "O";
        document.getElementById("curr-player").innerHTML = "X";
        document.getElementById(x).disabled =  true;
    }
    //HtmlToArr();
    Checker();
}