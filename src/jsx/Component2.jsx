// import React, { useState } from 'react';
import * as React from "react";
import {useStateValue} from "./StateProvider";

export default function Example2(x) {
  // const [state, dispatch] = useStateValue();

  return (
    <div>
      teh arg si teh {x}
    </div>
  );
}
