//script.js

//tworzenie 'klasy' Phone z wlasciwoeciami brand itp.; parametry z uzyciem 'this'
function Phone(brand, price, color) {
	this.brand = brand;			//by using this, the "brand" property of /the object
	this.price = price;		// we create will assume the value of the brand argument
	this.color = color;
}

//tworzenie metody printInfo z uzyciem prototypu dla klasy 'Phone'
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

//tworzenie obiektu dla iPhone6s na podstawie funkcji konstruującej 
var iPhone6S = new Phone("Apple", 2250, "silver");

iPhone6S.printInfo();

var SamsungGalaxyS6 = new Phone('Samsung', 1950, 'black');

SamsungGalaxyS6.printInfo();

var OnePlusOne = new Phone('OnePlus', 1420, 'graphite');

OnePlusOne.printInfo()
