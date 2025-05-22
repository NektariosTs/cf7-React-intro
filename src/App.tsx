// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
import Layout from "./components/Layout.tsx";
// import FuncionalComponentWithState from "./components/FuncionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";

// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {

    return (
        <>
            <Layout>
                {/*<ClassComponent/>*/}
                {/*<FunctionalComponent/>*/}
                {/*<ArrowFunctionalComponent/>*/}
                {/*<ArrowFunctionalComponentWithProps title="Is Arrow FunctionalComponent With Props!"/>*/}
                {/*<ArrowFunctionalComponentWithPropsType*/}
                {/*    title="Is a arrow functional Component with Props!"*/}
                {/*    description="this is a description"/>*/}
                {/*<h1 className="text-center text-2xl fond-bold">this is a heading1 title</h1>*/}
                {/*<FunctionalComponent/>*/}
                {/*<ClassComponentWithState/>*/}
                {/*<FuncionalComponentWithState/>*/}
                <Counter/>
            </Layout>
        </>
    )
}

export default App
