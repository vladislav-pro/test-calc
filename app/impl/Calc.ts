class Calc {
    public set firstNumber(value: number) {
        this._firstNumber = value;
    }
    public secondNumber(value: number) {
        this._secongNumber = 0;
    }
    public get result(): number {
        return this._result;
    }
}