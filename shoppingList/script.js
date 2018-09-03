var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//add delete button to element
function addDelete(ele)
{
	var delbtn=document.createElement("button");
	var deltxt=document.createTextNode("Delete");
	delbtn.appendChild(deltxt);
	ele.appendChild(delbtn);
	delbtn.addEventListener("click", function() {
		delbtn.parentNode.removeChild(delbtn);
		ele.parentNode.removeChild(ele);
	})
	return ele;
}


//create delete buttons for existing
for (var i = 0; i < ul.children.length; i++) {
	ul.children[i]=addDelete(ul.children[i]);
}


button.addEventListener("click", function() {
	if(input.value !== "")
	{
		addToList();
	}
})

input.addEventListener("keypress", function(event) {
	if(event.keyCode === 13&&input.value !== "")
	{
		addToList();
	}
})

function addToList() 
{
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li=addDelete(li);
	input.value="";
}


ul.addEventListener("click", function(event) {
	var target = event.target;
	target.classList.toggle("done");
})