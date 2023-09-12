import Routes from "./routes/Routes.tsx";
import "./App.css";
import "./styles/loder.css";
import { useState, useEffect } from "react";

import { ColorRing } from "react-loader-spinner";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="load">
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                            "#e15b64",
                            "#f47e60",
                            "#f8b26a",
                            "#abbd81",
                            "#849b87"
                        ]}
                    />
                </div>
            ) : (
                <Routes />
            )}
        </>
    );
}

export default App;
