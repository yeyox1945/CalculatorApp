import { useRef, useState } from "react";

enum Operators {
    add,
    sub,
    mul,
    div,
}

export const useCalculator = () => {
    const [result, setResult] = useState("0");
    const [lastResult, setLastResult] = useState("0");

    const lastOperation = useRef<Operators>();

    const buildNumber = (textNumber: string) => {
        if (result.includes(".") && textNumber === ".") return;

        if (result.startsWith("0") || result.startsWith("-0")) {
            if (textNumber === ".") {
                setResult(result + textNumber);
            } else if (textNumber === "0" && result.includes(".")) {
                setResult(result + textNumber);
            } else if (textNumber != "0" && !result.includes(".")) {
                setResult(textNumber);
            } else if (textNumber === "0" && !result.includes(".")) {
                setResult(result);
            } else {
                setResult(result + textNumber);
            }
        } else {
            setResult(result + textNumber);
        }
    };

    const clear = () => {
        setResult("0");
        setLastResult("0");
    };

    const toggleSign = () => {
        if (result.includes("-")) {
            setResult(result.replace("-", ""));
        } else {
            setResult("-" + result);
        }
    };

    const delAction = () => {
        if (result.length === 1 || (result.length === 2 && result.includes("-"))) {
            setResult("0");
            return;
        }
        setResult(result.slice(0, -1));
    };

    const changeResultToLast = () => {
        if (result.endsWith(".")) {
            setLastResult(result.slice(0 - 1));
        } else {
            setLastResult(result);
        }
        setResult("0");
    };

    const divideAction = () => {
        changeResultToLast();
        lastOperation.current = Operators.div;
    };

    const multiplyAction = () => {
        changeResultToLast();
        lastOperation.current = Operators.mul;
    };

    const substractAction = () => {
        changeResultToLast();
        lastOperation.current = Operators.sub;
    };

    const addAction = () => {
        changeResultToLast();
        lastOperation.current = Operators.add;
    };

    const calculate = () => {
        const first = Number(lastResult);
        const second = Number(result);

        switch (lastOperation.current) {
            case Operators.add:
                setResult(`${first + second}`);
                break;
            case Operators.sub:
                setResult(`${first - second}`);
                break;
            case Operators.div:
                setResult(`${first / second}`);
                break;
            case Operators.mul:
                setResult(`${first * second}`);
                break;
        }
        setLastResult("0");
    };

    return {
        result,
        lastResult,
        clear,
        toggleSign,
        delAction,
        addAction,
        substractAction,
        multiplyAction,
        divideAction,
        buildNumber,
        calculate,
    }
}