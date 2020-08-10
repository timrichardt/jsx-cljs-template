// import React, { useState } from 'react';
import * as React from "react";
import StateProvider from "./StateProvider";
import { useStateValue } from "./StateProvider";
import defaultState from "./defaultState";
import Example2 from "./Component2";

export default function Example(props) {

  return (
    <div>
      <StateProvider reducer={console.log} initialState={defaultState}>
        <p>Foo</p>
        <p>Hallo Dings</p>
      </StateProvider>
    </div>
  );
}
