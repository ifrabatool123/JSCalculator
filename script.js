
class Calculator{
    constructor(allScreencurrent,allScreenprevious){
        this.allScreencurrent=allScreencurrent;
        this.allScreenprevious=allScreenprevious;
        this.clear();
    }
    
    clear(){
        this.currentOperand="";
        this.prevoiusOperand="";
        this.opeartion=null;
    }
    
    
    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1);
    }
    
    appendNumber(number){
        if(number==="." && this.currentOperand.includes(".")) return;
        this.currentOperand=this.currentOperand.toString()+ number.toString();
         }
    flushOperator(operation){
        if(this.currentOperand==="")return;
        if(this.currentOperand!==""){
            this.compute();
        }
        this.opeartion=operation;
        this.prevoiusOperand=this.currentOperand;
        this.currentOperand="";
    }
   compute() {
       let computation;
       const previous=parseFloat(this.prevoiusOperand);
       const current=parseFloat(this.currentOperand);
       if(isNaN(previous)|| isNaN(current)){
           switch(this.opeartion){
               case "+":
                   computation=previous+current;
                   break;
                case "-":
                   computation=previous-current;
                   break;
                case "*":
                   computation=previous*current;
                   break;
                   case "/":
                   computation=previous/current;
                   break;
               default:
                   return;
           }
           
           
           this.currentOperand=computation;
           this.prevoiusOperand="";
           this.opeartion=undefined;
       }
       updateDisplay(){
           this.allScreencurrent.innerText=this.currentOperand;
           if(this.opeartion!=null){
               this.allScreenprevious.innerText=`${this.prevoiusOperand} ${this.operation}`;
           }
       }
        }
}


const numberbtns=document.querySelectorAll("[data-number]");
const operationbtns=document.querySelectorAll("[data-operation]");
const equalbtn=document.querySelectorAll("[data-equals]");
const delbtn=document.querySelectorAll("[data-delete]");
const delclear=document.querySelectorAll("[data-clear]");
const allScreenprevious=document.querySelectorAll("[data-operand-previous]");
const allScreencurrent=document.querySelectorAll("[data-operand-current]");


const calculator=new Calculator(
allScreencurrent,
    allScreenprevious

);
numberbtns.forEach((button)=>{
    button.addEventListener("click", ()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
} );

operationbtns.forEach((button)=>{
    button.addEventListener("click", ()=>{
        calculator.flushOperator(button.innerText);
        calculator.updateDisplay();
    });
});
equalbtn.addEventListener("click", ()=>{
    calculator.compute();
    calculator.updateDisplay();
});
delbtn.addEventListener("click",()=>{
    calculator.delete();
    calculator.updateDisplay();
});
delclear.addEventListener("click",()=>{
    calculator.clear();
    calculator.updateDisplay();
});







