let calculator = {
    read(){
        this.x = prompt("Enter first number", "");
        this.y = prompt("Enter second number", "");
        this.oper = prompt("Enter operation\n(sum, mulriply,divide,substract)", "");
    },
    sum(){
        return Number(this.x) + Number(this.y);
    },
    multiply(){
        return this.x * this.y;
    },
    divide(){
        return this.x / this.y;
    },
    substract(){
        return this.x - this.y;
    },
    operation(){
        if(this.oper == "sum") return this.sum();
        else if(this.oper == "mulriply") return this.multiply();
        else if(this.oper == "divide") return this.divide();
        else if(this.oper == "substract") return this.substract();
        else return "Eror 404";
    },
}

calculator.read();
alert( calculator.operation());