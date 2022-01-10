import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);
  const renders = useRef(1);

  useEffect(() => {
    renders.current += 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />
      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>
      <button onClick={onClick} className="btn btn-primary">
        Re-Render
      </button>
      Renders: {renders.current}
    </div>
  );
}

function getSqrt(n) {
  console.log("expensive function called");
  for (let i = 0; i <= 9000; i++) {
    console.log(i);
  }
  return Math.sqrt(n);
}

export default UseMemoExample;
