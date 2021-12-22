function chessBoard(size){
    var val = ""
    var sp = " "
    for(var i = 0; i < size ; i++){
	    val += '\n'
        for(var j = 0; j < size ; j++){
            if((i +j) % 2 == 0){
                val += sp
            }else{
                val  += "#"
            }
        } 
    }
    console.log(val)  
}
let size = prompt("Enter size:")
chessBoard(size)