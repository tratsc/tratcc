// находит в масиве наибольшое число
var Bubble_sorting = (arr) => {
    var len = arr.length - 1
    var index = 0 
    var a 
    var b 
    var c 
    for (var i = 0;i <= len;i++) {
        for (var j = i+1;arr[i] <= arr[j];j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]]


        }
        

        for ( var q = i + 1;arr[i] <= arr[q];q++) {
            [arr[i], arr[q]] = [arr[q], arr[i]]
        }
        
    }

    
    return arr
}
console.log(Bubble_sorting([1,1,1,1,3,3,3,4,4,2,2,2]))