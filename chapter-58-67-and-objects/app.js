// Q-1 
// (1)ham id ko variable bnaenge.
const mainContent = document.getElementById("main-content");

// (2)main content k child element ko jo k <p> ha usko browser pr laenge may be hehehe
console.log(mainContent.children);

// (3)innerHTML ko browser me laongi, or for loop lagaongi innerhtml show karne k liay.
const renderElements =document.getElementsByClassName("render");
for  (let i = 0; i < renderElements.length; i++){
    console.log(renderElements[i].innerHTML);
}

// (4)first-name ki value ko input box k andar lana ha 
document.getElementById("first-name").value = "Alex";

// (5)same tariqe se ab email or last-name ko bhi put kardngi
document.getElementById("last-name").value = "Bank";

document.getElementById("email").value = "alexbank@exampl.com";


// Q-2 same html code me new questions 
// (1)form content ka node type kia ha?
const formContent = document.getElementById("form-content");
console.log("Node type of #form-content:", formContent.nodeType);

// (2)
const lastNameElement = document.getElementById("last-name");
console.log("Node type of #last-name:",lastNameElement.nodeType);
console.log("child Nodes type of #last-name:", lastNameElement.childNodes);

// (3)
lastNameElement.childNodes.nodeValue = "last-Name : Updated bank";

// (4)
const mainContent2 = document.getElementById("main-content");
console.log("iv. First Child:", mainContent.firstChild);
console.log("iv. Last Child:", mainContent.lastChild);

// (5)
console.log("v. Next Sibling:", lastNameElement.nextSibling);
console.log("v. Previous Sibling:", lastNameElement.previousSibling);

// (6)

const emailElement = document.getElementById("email");
console.log("vi. Parent Node:", emailElement.parentNode);
console.log("vi. Node type of #email parent:", emailElement.parentNode.nodeType);