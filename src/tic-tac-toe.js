class TicTacToe {
    constructor() {
        this.PlayerSymbol='x';
        this.winner=null;
        this.matrix=[
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ]
    }

    getCurrentPlayerSymbol() {
        return this.PlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        
        if (this.matrix[rowIndex][columnIndex]==null){
            this.matrix[rowIndex][columnIndex]=this.PlayerSymbol;
            
            if (this.PlayerSymbol==='o'){
                this.PlayerSymbol='x';
            } else {
                this.PlayerSymbol='o';
            }
 
        } 
    }

    isFinished() {
        if (this.getWinner()!==null || this.isDraw()==true) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        for (let i=0; i<=2; i++){
            if (this.matrix[i][0]==this.matrix[i][1] && this.matrix[i][1]==this.matrix[i][2]){
                this.winner=this.matrix[i][1];
            } 

            if (this.matrix[0][i]==this.matrix[1][i] && this.matrix[1][i]==this.matrix[2][i]){
                this.winner=this.matrix[1][i];
            } 

        }

        if (this.matrix[0][0]==this.matrix[1][1] && this.matrix[1][1]==this.matrix[2][2]){
            this.winner=this.matrix[1][1];
        }
        
        if (this.matrix[0][2]==this.matrix[1][1] && this.matrix[1][1]==this.matrix[2][0]){
            this.winner=this.matrix[1][1];
        } 
        return this.winner;
    }

    noMoreTurns() {
        let n=true;
        for (var i=0; i<=2; i++){
            for (var j=0; j<=2; j++) {
                if (this.matrix[i][j]==null){
                    n=false;
                }
            }
        }
        return n;
    }

    isDraw() {
        if (this.getWinner()==null && this.noMoreTurns()==true) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
