// import React, { useState } from 'react';
import * as React from "react";

export default function Example(x) {
  return React.createElement(
    "div",
    null,
    [1, 2, 3].map(function (x) {
      return React.createElement(
        "p",
        { key: x },
        x
      );
    }),
    React.createElement(
      "p",
      null,
      "You clicked ",
      x,
      " times!"
    )
  );
}
//# sourceMappingURL=Component.js.map