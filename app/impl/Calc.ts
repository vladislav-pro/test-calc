class Calc {
    private _firstNumber: number;
    private _secondNumber: number;
    private _result: number;

    public constructor() {
        this._firstNumber = 0;
        this._secondNumber = 0;
        this._result = 0;

    public set firstNumber(value: number) {
        this._firstNumber = value;
    }
    public set secondNumber(value: number) {
        this._secondNumber = value;
    }
    public get result(): number {
        return this._result;
    }
    public sum(): void {
        this._result = this._firstNumber + this._secondNumber;
    }
    public sub(): void {
        this._result =  this._firstNumber - this._secondNumber;
    }
}