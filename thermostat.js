class Thermostat {
  constructor() {
    this.temp = 20;
    this.max_temp = 32;
  };

  getTemperature() {
    return this.temp;
  };

  up() {
    if (this.temp < this.max_temp) {
    this.temp += 1;}
  };

  down() {
    this.temp += -1;
  };

  reset() {
    this.temp = 20;
  };

  setPowerSavingMode(Boolean) {
    Boolean === true ? this.max_temp = 25 : this.max_temp = 32;
  }
}

module.exports = Thermostat