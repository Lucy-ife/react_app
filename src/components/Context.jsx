import { useState, createContext, useContext } from "react";

// Create the context OUTSIDE so everyone can access it
const GlobalStateContext = createContext(null);

const ContextExample = () => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <GlobalStateContext.Provider value={{ isToggled, setIsToggled }}>
            <div>
                <h1>parent component</h1>
                <ChildToggle />
                <ChildDisplay />
            </div>
        </GlobalStateContext.Provider>
    );
};

const ChildToggle = () => {
    const { setIsToggled } = useContext(GlobalStateContext);
    return (
        <div>
            <button onClick={() => setIsToggled((prev) => !prev)}>Toggle</button>
        </div>
    );
};

const ChildDisplay = () => {
    const { isToggled } = useContext(GlobalStateContext);
    return (
        <div>
            <p>current state: {isToggled ? "ON" : "OFF"}</p>
        </div>
    );
};

export default ContextExample;