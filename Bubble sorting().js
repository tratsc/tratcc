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

    }
    
    return arr
}
console.log(max([1,1,1,15,1,1,1]))