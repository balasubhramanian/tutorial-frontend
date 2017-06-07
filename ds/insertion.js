var unsortedList = [6, 5, 3, 2, 1];

method1();

function method1() {

     var len = unsortedList.length;
    for (var i = 1; i < len; i++) {
        var tmp = unsortedList[i]; //Copy of the current element. // 5
        /* Check through the sorted part and compare with the number in tmp. If large, shift the number */
        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp /*6 > 5*/); j--) {
            //Shift the number
            unsortedList[j + 1] = unsortedList[j]; //6,6
            console.log(unsortedList)
        }
        //Insert the copied number at the correct position
        //in sorted part. 
        unsortedList[j + 1] = tmp; //6,5
        console.log('after swap')
        console.log(unsortedList)
        console.log('next')
    }

    console.log(unsortedList)
}