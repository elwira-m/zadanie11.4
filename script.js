//script.js

//tworzenie 'klasy' Phone z wlasciwoeciami brand itp.; parametry z uzyciem 'this'
function Phone(brand, price, color, weight) {
	this.brand = brand;			//by using this, the "brand" property of /the object
	this.price = price;		// we create will assume the value of the brand argument
	this.color = color;
	this.weight = weight;
}

//tworzenie metody printInfo z uzyciem prototypu dla klasy 'Phone'
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ". Color is " + this.color + " and the price is " + this.price + ". It's weight is " + this.weight + ".");
}

//tworzenie obiektu dla iPhone6s na podstawie funkcji konstruującej 
var iPhone6S = new Phone("Apple", 2250, "silver", "5.04oz");

iPhone6S.printInfo();

var SamsungGalaxyS6 = new Phone('Samsung', 1950, 'black', '4.87oz');

SamsungGalaxyS6.printInfo();

var OnePlusOne = new Phone('OnePlus', 1420, 'graphite', '5.81oz');

OnePlusOne.printInfo()
