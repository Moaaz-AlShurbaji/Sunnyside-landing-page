var navcontainer = document.getElementById('btn-ul');
console.log(navcontainer);

var items = document.getElementsByClassName("nav-item");

//add event listener to each item in the array
for(var i = 0; i<items.length; i++)
{
    items[i].addEventListener('click',function()
    {
        var current = document.getElementsByClassName("Active");
        current[0].className = current[0].className.replace("Active","");
        this.className += "Active";
    });
}