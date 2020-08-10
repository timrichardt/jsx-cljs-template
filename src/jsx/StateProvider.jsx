import * as React from "react";

// Context object. Default value is optional first argument. only used,
// when subscribed component is not inside a provider.

const StateContext = React.createContext()

// Just a convenient shortcut
export const useStateValue = () => React.useContext(StateContext);

// State provider
export default function StateProvider(props) {
  console.log(typeof(props.children.value))
  console.log(props.children[0])
  // debugger

  return (
    <StateContext.Provider value={React.useReducer(props.reducer, props.initialState)}>
      {props.children}
    </StateContext.Provider>
  )
}