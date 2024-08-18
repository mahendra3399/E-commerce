class Car{
    brand;
    model;
    speed = 0;
    istrunkopen = false;

    constructor(carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
    }

    display() {
        const status = this.istrunkopen ? 'open' : 'closed';
        console.log(`${this.brand} ${this.model}, ${this.speed} km/h, Trunk: ${status}`);
    };

    go() {
        if(this.istrunkopen === false) {
        this.speed+=5;
        }
    }

    opentrunk() {
        if(this.speed === 0) {
           this.istrunkopen = true;
        }
    }

    closetrunk() {
        this.istrunkopen = false;
    }
}

class RaceCar extends Car {
      acceleration;

      constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
      }

      go() {
        if(this.speed === 100) {
            this.speed = 100;
        }
        else {
            this.speed += this.acceleration;
        }
      }
      openTrunk() {
        console.log('Race cars do not have a trunk.');
      }
    
      closeTrunk() {
        console.log('Race cars do not have a trunk.');
      }
}

const car1 = new Car({
  brand: 'toyota',
  model: 'fortuner'
});

const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3'
  });
  
const RaceCar1 = new RaceCar({
    brand : 'mahindra',
    model: 'thar',
    acceleration: 50
});

RaceCar1.display();
RaceCar1.go();
RaceCar1.display();
RaceCar1.go();
RaceCar1.display();
RaceCar1.go();
RaceCar1.display();
RaceCar1.openTrunk();

