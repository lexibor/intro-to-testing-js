// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name)
{
    if(name === undefined)
    {
        return 'Hello, World!'
    }
    else if(name === true)
    {
        return 'Hello, World!'
    }
    else if(name === false)
    {
        return 'Hello, World!'
    }
    else if(Array.isArray(name))
    {
        return 'Hello, array!'
    }
    else
    {
        return `Hello, ${name}!`;
    }


}

function isFive(num)
{
    return num == 5;
}

function isEven(num)
{
    if(typeof num === 'boolean' || num === undefined)
    {
        return false;
    }
    return num % 2 == 0;
}

// function isVowel(char)
// {
//
//     if()
// }