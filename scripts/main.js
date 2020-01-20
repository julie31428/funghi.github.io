//var myheading = document.querySelector('h1');
//myheading.textContent = 'hello';

//點一下就出現hi提示視窗
/*
document.querySelector('html').onclick = function(){
    alert('hi!');
}
//alert('yo!'); //跳出視窗
*/
//變換圖片
var myImage = document.querySelector('img');

myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpeg')
    {
        myImage.setAttribute('src', 'images/cat1.jpg');
    }
    else
    {
        myImage.setAttribute('src', 'images/cat.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() 
{
    var myName = prompt("Please enter your cat's name.");
    localStorage.setItem('name:', myName);
    myHeading.innerHTML = 'Cool ! ' + myName;
}

if(!localStorage.getItem('name')) 
{
    setUserName();
} 
else
{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Cool ! ' + storedName;
}

myButton.onclick = function()
{
    setUserName();
}