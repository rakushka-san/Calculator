interface IButton {
    type: string;
    value: string;
}

export default class Calculator {
    private static _maxLength: number = 12;
    private static _displayValue: string = "0";
    private static _currentOperand: number;
    private static _previousOperand: number;
    private static _operator: string;
    private static _displayUpdate: Function;
    private static _operators: Array<string> = ["+", "-", "*", "/", "%"];
    

    public static set displayUpdate(displayUpdate: Function) {
        Calculator._displayUpdate = displayUpdate;
    }

    public static get displayValue(): string {
        return Calculator._displayValue;
    }

    public static buttonHandler(button: IButton): void {
        switch (button.type) {
            case 'number':
                Calculator.numberHandler(button);
                break;
            case 'operation':
                Calculator.operationHandler(button);
                break;
            case 'action':
                Calculator.actionHandler(button);
                break;
        }

        Calculator._displayUpdate();
    }

    private static numberHandler(button: IButton): void {
        if (Calculator._displayValue.length == Calculator._maxLength) {
            return;
        }

        if (button.value === '.' && Calculator.displayValue.indexOf('.') !== -1) {
            return;
        }

        if (Calculator._displayValue === '0' && button.value === ".") {
            Calculator._displayValue += button.value;
            return;
        }

        if (Calculator._displayValue === '0') {
            Calculator._displayValue = button.value;
            return;
        }

        if (Calculator._operators.includes(Calculator._displayValue)) {
            Calculator._displayValue = button.value;
            return;
        }

        Calculator._displayValue += button.value;
    }

    private static operationHandler(button: IButton): void {
        if (Calculator._operator !== undefined) {
            Calculator.calculate();
        }

        Calculator._operator = button.value;
        Calculator._previousOperand = parseFloat(Calculator._displayValue);
        Calculator._displayValue = button.value;
    }

    private static actionHandler(button: IButton): void {
        switch(button.value) {
            case 'equals':
                Calculator.calculate();
                Calculator._currentOperand = Calculator._previousOperand = Calculator._operator = undefined;
                break;
            case 'C':
                Calculator._displayValue = '0';
                Calculator._currentOperand = Calculator._previousOperand = Calculator._operator = undefined;
                break;
            case 'back':
                Calculator._displayValue = Calculator.displayValue.slice(0, -1);
                if (Calculator._displayValue === '') {
                    Calculator._displayValue = '0';
                }
                break;
        }
    }

    private static calculate(): void {
        Calculator._currentOperand = parseFloat(Calculator._displayValue);
       
        if (isNaN(Calculator._currentOperand)) {
            Calculator._currentOperand = 0;
        }
                

        let res: number;

        switch (Calculator._operator) {
            case '+':
                res = Calculator._previousOperand + Calculator._currentOperand;
                break;
            case '-':
                res = Calculator._previousOperand - Calculator._currentOperand;
                break;
            case '*':
                res = Calculator._previousOperand * Calculator._currentOperand;
                break;
            case '/':
                if (Calculator._currentOperand === 0) {
                    res = 0;
                    break;
                }
                res = Calculator._previousOperand / Calculator._currentOperand;
                break;
            case '%':
                res = Calculator._previousOperand * (Calculator._currentOperand / 100);
                break;
            default:
                res = Calculator._currentOperand;
        }

        let resString = res.toString();

        if (resString.length > Calculator._maxLength) {
            resString = resString.slice(0, Calculator._maxLength - 2);
            resString += "..";
        }
        Calculator._displayValue = resString;
    }
}
