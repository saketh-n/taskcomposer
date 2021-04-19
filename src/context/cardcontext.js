import { createContext } from "react";

const { Provider, Consumer } = createContext();

function CardContextProvider(props) {
  return <Provider value={{}}>{props.children}</Provider>;
}

export { CardContextProvider, Consumer as CardContextConsumer };
