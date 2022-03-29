const Thermostat = require('./thermostat')

describe('thermostat', () => {
  const thermostat = new Thermostat();

  it ('gets the temperature', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it ('ups the temperature', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it ('downs the temperature', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it ('sets the power saving mode to true', () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it ('sets the power saving mode to false', () => {
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);
  });

  it ('resets the temperature', () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
 });