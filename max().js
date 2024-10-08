// функция которая находит наибольшое число в масиве
var max = (masiv) => {
    var a = masiv[0]
    for(var i = 1;i <= masiv.length;i++)
        if (a < masiv[i]) {
            a = masiv[i]

        }
    return a

}
