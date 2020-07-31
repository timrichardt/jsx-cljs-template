// import React, { useState } from 'react';
import * as React from "react";

export default function Example(x) {
  return (
    <div>
      {[1,2,3].map(function(x) {return <p key={x}>{x}</p>})}
      <p>You clicked {x} times!</p>
    </div>
  );
}
