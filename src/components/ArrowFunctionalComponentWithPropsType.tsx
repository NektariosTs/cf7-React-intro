// type Props = {
//     title: string;
//     description: string;
// }

// type A = {
//     title: string;
// }
// type B = {
//     description: string;
// }
//
// type MergedProps = A & B;

interface Props {
    title: string;
}

interface Props {
    description: string;
}

const ArrowFunctionalComponentWithProps = ({title, description}:Props) => {
    return (
        <>
            <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
            <p className="text-gray-800 text-center">{description}</p>
        </>
    )
}
export default ArrowFunctionalComponentWithProps;