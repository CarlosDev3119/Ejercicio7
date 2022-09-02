
export class LimpiadorConverter {
    constructor(public oracion: string) {

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