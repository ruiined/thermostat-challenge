const Thermostat = require('./thermostat')

const { stdin } = require('process');
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

thermostat = new Thermostat();


const prompt = () => {rl.question(`Temperature is ${thermostat.getTemperature()}\nEnter command > `, (answer) => {
  if (answer === 'up') {
    thermostat.up()
  } else if (answer === 'down') {
    thermostat.down()
  }
  console.log(thermostat.getTemperature())
  prompt()
})};
prompt()