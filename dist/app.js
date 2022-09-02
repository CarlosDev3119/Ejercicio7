"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const limpiador_1 = require("./classes/limpiador");
const oracion = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const convertidor = new limpiador_1.LimpiadorConverter(oracion);
convertidor.eliminarEspacios();
convertidor.upperOracion();
console.log(convertidor.getOracion);
