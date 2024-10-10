export default class Cl_estudiante{
    constructor(nombre,notAc,mat){
    this.nombre=nombre;
    this.notAc=notAc;
    this.mat=mat
    }
    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }
    set notAc(nA){
        this._notAc=nA
    }
    get notAc(){
        return this._notAc
    }
    set mat(m){
        this._mat=m
    }
    get mat(){
        return this._mat
    }
}