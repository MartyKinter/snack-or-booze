function unroll(squareArray) {

    //check for empty array first
    if (squareArray.length === 0) {
        return [];
    }
    let resultArr = [];
    //set grid boundaries
    let startRow = 0;
    let endRow = squareArray.length - 1;
    let startCol = 0;
    let endCol = squareArray[0].length - 1; //assume all rows same length since square array

    while( startRow <= endRow && startCol <= endCol){
        //add top row from left to right
        for(let i=startCol; i<=endCol; i++){
            resultArr.push(squareArray[startRow][i]);
        }
        //move down
        startRow++;
        //add right col from top to bottom
        for(let i=startRow; i<= endRow; i++){
            resultArr.push(squareArray[i][endCol]);
        }
        //move left
        endCol--;

        //make sure still rows left
        if(startRow <= endRow){
            //add bottom row from right to left
            for(let i=endCol; i>= startCol; i--){
                resultArr.push(squareArray[endRow][i])
            }
            //move up
            endRow--;
        }

        //make sure still columns left
        if(startCol <= endCol){
            //add left column from bottom to top
            for(let i= endRow; i >= startRow; i--){
                resultArr.push(squareArray[i][startCol]);
            }
            //move right
            startCol++;
        }
    }

    return resultArr;
}

module.exports = unroll;
