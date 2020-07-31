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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9Db21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiRXhhbXBsZSIsIngiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCOztBQUVBLGVBQWUsU0FBU0MsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDakMsU0FDRTtBQUFBO0FBQUE7QUFDRyxLQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFRQyxHQUFSLENBQVksVUFBU0QsQ0FBVCxFQUFZO0FBQUMsYUFBTztBQUFBO0FBQUEsVUFBRyxLQUFLQSxDQUFSO0FBQVlBO0FBQVosT0FBUDtBQUEwQixLQUFuRCxDQURIO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBZ0JBLE9BQWhCO0FBQUE7QUFBQTtBQUZGLEdBREY7QUFNRCIsImZpbGUiOiJDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSh4KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtbMSwyLDNdLm1hcChmdW5jdGlvbih4KSB7cmV0dXJuIDxwIGtleT17eH0+e3h9PC9wPn0pfVxuICAgICAgPHA+WW91IGNsaWNrZWQge3h9IHRpbWVzITwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==