type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
    addClass?: string;

}

const CounterButton = ({onClick, disabled = false, label, addClass = "bg-black"}: ButtonProps) => {
    return (
        <>
            <button className={"bg-red-400 disabled:bg-gray-600 text-white py-2 px-4 " + addClass}
                    disabled={disabled}
                    onClick={onClick}
            >
                {label}

            </button>
        </>
    )
}

export default CounterButton;