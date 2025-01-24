class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    Dperson(){
        console.log("person " + this.name + " is "+this.age)
    } 
} 
class Product{
    constructor(name,price,qty){
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    calProduct(){
        const Total = this.price*this.qty;
        console.log(Total);
    }
}
const Person1 = new Person();
Person1.name ="John";
Person1.age = "20";
Person1.Dperson();
const Person2 = new Person( "Tit", 23)
Person2.Dperson()




