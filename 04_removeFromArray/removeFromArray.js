const removeFromArray = function (array, ...otherArgs) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < otherArgs.length - 1; j++){
            if(array[i]=== otherArgs[j]){
                array.splice(i,1);
            }
        }




    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;