var sign = prompt("Please Enter the operator: (e.g +,-,*,/) ")
var num1 = parseInt(prompt("Enter the First Number: "))
var num2 = parseInt(prompt("Enter the Second Number: "))

if(sign == "+")
{
    alert("The Result is " + (num1 + num2))
} else if(sign == "-")
{
   alert("The Result is " + (num1 - num2))
} else  if(sign == "*")
{
    alert("The Result is " +  (num1 * num2))  
} else  if(sign == "/")
{
    alert("The Result is " + (num1/ num2))   
}