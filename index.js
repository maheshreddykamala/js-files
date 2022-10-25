

function HtmlElement(){
    this.click = function(){
        console.log("clicked on the element");
    }
}

HtmlElement.prototype.focus = function(){
    console.log("The element is focused");
};

function HtmlSelectElement(itemArray = []){

   
        this.items = [...itemArray];
    

    this.addItem = function(element){
        this.items.push(element);
    };

    this.removeItem = function(element){
        let itemIndex = this.items.indexOf(element);
        if(itemIndex === -1){
            return;
        }
        this.items.splice(itemIndex,1);
    };

    this.render = function(){

        let midString = "";
        this.items.forEach( (item) => {
            midString = midString +  `<option>${item}</option>`+"\n";
          });
        let finalString = 
        return finalString;
        
    };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;



function HtmlImageElement(src=undefined){
      this.src = src;
      this.render = function(){
           return `<img src="${this.src}" />`;
      }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;



const elements = [
    new HtmlSelectElement([10,20,30]),
    new HtmlImageElement("http://www.google.com")
    
];

for(let element of elements){
    console.log(element.render());
}