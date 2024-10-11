import React, { useState } from "react";

export default function Counter({ totalCount }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button
        className="button"
        onClick={() => {
          setCount((prev) => prev + 1);
          totalCount((prev) => prev + 1);
        }}
      >
        Add +
      </button>
    </div>
  );
}
