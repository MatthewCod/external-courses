// class PowerSocked {
//     constructor(sockedName) {
//         this.sockedName = sockedName;
//     }
//     calculatePower(...connectedDevices) {
//         let result = 0;
//         for (let index = 0; index < connectedDevices.length; index++) {
//             result += connectedDevices[index].power;
//         }
//         return `Потребляемая мощность ${result} W`;
//     }
// }

// class Room {
//     constructor(roomName, ...devices) {
//         this.roomName = roomName;
//         this.devices = devices;
//     }
//     searchByRoom(searchQuery) {
//         return (this.devices.find(item => item.deviceName == searchQuery));
//     }
// }

// class Device {
//     constructor(deviceName, power) {
//         this.deviceName = deviceName;
//         this.power = power;
//     }
// }

// class CncMachine extends Device {
//     constructor(deviceName, power, cncMachineType, price) {
//         super(deviceName, power);
//         this.cncMachineType = cncMachineType;
//         this.price = price;
//     }
// }

// class MillingMachine extends CncMachine {
//     constructor(deviceName, power, price) {
//         super(deviceName, power, price);
//         this.cncMachineType = "Milling";
//     }
// }

// class LaserMachine extends CncMachine {
//     constructor(deviceName, power, price) {
//         super(deviceName, power, price);
//         this.cncMachineType = "laser";
//     }
// }

// const lightMillingMachine = new MillingMachine("CPU00", 100, 20000);
// const homeMillingMachine = new MillingMachine("CPU01", 200, 20000);
// const proMillingMachine = new MillingMachine("CPU02", 400, 50000);
// const proMaxMillingMachine = new LaserMachine("CPU13", 600, 100000);
// const proMaxUltraMillingMachine = new LaserMachine("CPU14", 800, 1000000);

// let sockedUnderTable = new PowerSocked("Розетка под столом");
// console.log(sockedUnderTable.calculatePower(lightMillingMachine, homeMillingMachine, proMaxUltraMillingMachine));

// let fabricationRoom = new Room('Производственная комната', lightMillingMachine, homeMillingMachine, proMaxUltraMillingMachine);
// console.log(fabricationRoom.searchByRoom("CPU01"));