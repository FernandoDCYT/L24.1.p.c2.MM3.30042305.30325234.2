import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_becado extends
Cl_estudiante {
constructor(nombre, notAc, mat, beca) {
super(nombre, notAc, mat);
this.beca=beca;
}
    set beca(b){
        this._beca=b;
    }
    get beca(){
        return this._beca
    }
    calcProm(){
        return this.notAc/this._mat
    }
    calcBeca(){
        if(this.calcProm()>15){
            return this.beca = this._nombre + " Le corresponde una beca de: 30$";
        }
        if(this.calcProm()>=10){
            return this.beca = this._nombre + " Le corresponde una beca de: 20$";
        }
        if(this.calcProm()<10){
            return this.beca = 
            this._nombre + " No le corresponde beca";
        }
    }
}