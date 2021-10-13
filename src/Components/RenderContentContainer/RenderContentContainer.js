import React, { useEffect } from 'react';
import { SandpackRunner } from "@codesandbox/sandpack-react";

const RenderContentContainer = ({content}) => {

    useEffect(() => {

    }, [])

    return (<><div id="renderJSX"></div> <SandpackRunner code={`function App() {
        
        return (
          <div>
            <h1>Lern App</h1>
            <p>Importiere eine Lerneinheit</p>
            {console.log(window.localStorage)}
          </div>
        );
      }
      
      export default App;`
    
    } template="react" /></>);
}

export default RenderContentContainer
