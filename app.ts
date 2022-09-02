import { LimpiadorConverter } from "./classes/limpiador";

const oracion = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const convertidor = new LimpiadorConverter(oracion);

convertidor.eliminarEspacios();
convertidor.upperOracion();

console.log(convertidor.getOracion);