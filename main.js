var sign = prompt("Operator: ")
var num1 = parseInt(prompt("1st Number: "))
var num2 = parseInt(prompt("2nd Number: "))

if(sign == "+")
{
    console.log(num1 + num2)
} else if(sign == "-")
{
    console.log(num1 - num2)
} else  if(sign == "*")
{
    console.log(num1 * num2)  
} else  if(sign == "/")
{
    console.log(num1/ num2)   
}