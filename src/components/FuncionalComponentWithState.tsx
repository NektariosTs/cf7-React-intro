import {useState} from "react";

const FuncionalComponentWithState = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <>
            <div className="space-y- pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <button
                        onClick={increaseCount}
                        className="bg-black text-white py-2 px-4">
                        Increase
                    </button>

                    <button
                        onClick={resetCount}
                        className="bg-red-400 text-white py-2 px-4">
                        Increase
                    </button>
                </div>
            </div>
        </>
    )
}

export default FuncionalComponentWithState;