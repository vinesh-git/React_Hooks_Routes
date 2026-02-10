import  { createContext, useContext, useState } from 'react'

type contexttype = {
    toggle : boolean,
    setToggle : (flag : boolean | any) => void 
}

const GlobalStateContext = createContext<contexttype | null>(null);

function ContextApiExample() {
    const [toggle, setToggle] = useState<boolean>(false);
    return (
        <GlobalStateContext.Provider value={{toggle,setToggle}}>
            <div>
                <p>Parent component</p>
                <ChildComponent1/>
                <ChildComponent2/>
            </div>
        </GlobalStateContext.Provider>
    )
}

export default ContextApiExample

function ChildComponent1() {
    const context = useContext(GlobalStateContext);
    return (
        <>
            <button onClick={() => context?.setToggle((prev: boolean) => !prev)}>toggle</button>
        </>
    )
}

function ChildComponent2() {
    const context = useContext(GlobalStateContext);
    return (
        <>
            <div style={context?.toggle ? { backgroundColor: 'white' } : { backgroundColor: 'yellow' }}>
                <p>hello</p>
            </div>
        </>
    )
}
