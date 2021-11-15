class Calc {
    public set firstNumber(value: number) {
        this._firstNumber = value;
    }
    public set secondNumber(value: number) {
        this._secondNumber = value;
    }
    public get result(): number {
        return this._result;
    }
}