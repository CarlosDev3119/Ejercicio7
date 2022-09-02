"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimpiadorConverter = void 0;
class LimpiadorConverter {
    constructor(oracion) {
        this.oracion = oracion;
        this.oracion = oracion;
    }
    eliminarEspacios() {
        this.oracion = this.oracion.trim();
    }
    upperOracion() {
        this.oracion = this.oracion.toUpperCase();
    }
    lowerOracion() {
        this.oracion = this.oracion.toLowerCase();
    }
    get getOracion() {
        return this.oracion;
    }
}
exports.LimpiadorConverter = LimpiadorConverter;
