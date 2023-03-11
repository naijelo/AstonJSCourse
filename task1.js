const DEFAULT_PROPERTIES = {
  FUEL: 5,
  SPEED: 10,
  DURABILITY: 100,
  TRACK_POINTS: 200,
};

class Cars {
  constructor(name = "Unknown Car") {
    this.fuel = 0;
    this.lowFuelConsumption = 0;
    this.durability = 0;
    this.speed = 0;
    this.name = name;
  }

  addPoint(option) {
    const points = this.fuel + this.lowFuelConsumption + this.durability + this.speed;

    if (points > 12) {
      throw new Error('Превышен лимит распределяемых очков');
    }

    this[option]++;
    return this;
  }

  getPowerReserve() {
    const totalFuel = DEFAULT_PROPERTIES.FUEL + this.fuel;
    const powerReserve = totalFuel * DEFAULT_PROPERTIES.TRACK_POINTS 
      + totalFuel * 0.1 * DEFAULT_PROPERTIES.TRACK_POINTS * this.lowFuelConsumption;
    return powerReserve;
  }

  getSpeed() {
    const speed = DEFAULT_PROPERTIES.SPEED + this.speed * 0.05 * DEFAULT_PROPERTIES.SPEED;
    return speed;
  }

  getDurability() {
    const durability = DEFAULT_PROPERTIES.DURABILITY + this.durability * 0.1 * DEFAULT_PROPERTIES.DURABILITY;
    return durability;
  }
}

class Civilian extends Cars {
  constructor(name) {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 2;
    this.speed = 4;
  }
}

class Sport extends Cars {
  constructor(name) {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 1;
    this.durability = 1;
    this.speed = 6;
  }
}

class Military extends Cars {
  constructor(name) {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 4;
    this.speed = 2;
  }
}

const carTypes = ["Civilian", "Sport", "Military"];

createRandomCar = (carName) => {
  const carType = carTypes[Math.floor(Math.random() * (carTypes.length - 1))];
  return new carType(carName);
}

compare = (cars) => {
  const carsArray = cars.map((el) => {
    return {
      powerReserve: el.getPowerReserve(),
      durability: el.getDurability(),
      speed: el.getSpeed(),
      name: el.name,
    };
  });
  return carsArray;
}
