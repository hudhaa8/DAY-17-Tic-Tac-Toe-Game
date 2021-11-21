var body=document.createElement("body")

var currentPlayer="X";
        var board=document.createElement("div");
        board.style.width="300px";
        board.style.display="flex";
        board.style.flexDirection="row";
        board.style.flexWrap="wrap";

        for(let id1=1; id1<=9; id1++) {

            var box=document.createElement("div");
            box.style.height="100px";
            box.style.width="32%";
            box.setAttribute("id",id1);
            box.style.border="1px solid pink";
            box.style.backgroundColor="green";
            box.addEventListener("click",function() {

                if(this.innerText.length==0) {
                    if(currentPlayer=="X") {
                        this.innerText=currentPlayer;
                        currentPlayer="O";
                    }else{
                        this.innerText=currentPlayer;
                        currentPlayer="X";
                    }
                }
            })

            board.appendChild(box);
    
        }

        document.body.appendChild(board)