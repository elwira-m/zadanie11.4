//script.js

//tworzenie 'klasy' Phone z wlasciwosciami brand itp.; parametry z uzyciem 'this'
function Phone(brand, price, color, weight) {
	this.brand = brand;			//by using this, the "brand" property of the object
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

Phone.prototype.isCheapest = function() {
	var pr1 = iPhone6S.price;
	var pr2 = SamsungGalaxyS6.price;
	var pr3 = OnePlusOne.price;
		if ((pr1 < pr2) && (pr1 < pr3)) {
			console.log(' iPhone6S is the cheapest!')
		} else  if ((pr2 < pr3) && (pr2 < pr1)) {
			console.log('SamsungGalaxyS6 is the cheapest!')
		} else {
			console.log('OnePlusOne is the cheapest!')
		}
}

iPhone6S.isCheapest();   //dlaczego? jak inaczej wywolac?
						//no i wszystko do skrocenia
