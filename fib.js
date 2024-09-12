function Fibonacci (n)
{
    var fibNum = [];

    for (var i = 0; i < n; i++)
    {
        if (i === 0)
        {
            fibNum.push(0);
        }
        else if (i === 1)
        {
            fibNum.push(1);
        }
        else
        {
            fibNum.push(fibNum[i-1] + fibNum[i-2]);
        }
    }

    return fibNum;
}

console.log(Fibonacci(30))