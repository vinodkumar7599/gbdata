import { useState } from "react";
import { useEffect } from "react";
export function Home() {
  const headSlider = [];
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count < headSlider.length - 1 ? count + 1 : 0);
      console.log(count);
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div>
            <h1>Home</h1>
            // -------- headSlider div -------------------------------------
            <div className="headContaner">
              <img src={headSlider[count]} alt="head" />
              <button
                onClick={() => {
                  setCount(count > 0 ? count - 1 : headSlider.length - 1);
                }}
              ></button>
              <button
                onClick={() => {
                  setCount(count < headSlider.length - 1 ? count + 1 : 0);
                }}
              ></button>
            </div>
            // container 2 -------------------------------------------------
            <div className="headContaner-2">
              <div className="headContaner-2-1">
                <img src="" alt="" />
              </div>
              <div className="headContaner-2-1">
                <h1>LATEX</h1>
                <h1></h1>
              </div>
            </div>
            // container 3 -------------------------------------------------
            <div className="headContaner-3">
              <div className="headContaner-3-1">
                <h1>FOIL</h1>
                <h1>BALLOONS</h1>
              </div>
              <div className="headContaner-3-2">
                <img src="" alt="" />
              </div>
            </div>
            // container 4 -------------------------------------------------
            <div className="headContaner-4">
              <div className="headContaner-4-1">
                <img src="" alt="" />
              </div>
              <div className="headContaner-4-1">
                <h1>CRICKET</h1>
                <h1>RUBBER BALLS</h1>
              </div>
            </div>
            // container 5 -------------------------------------------------
            <div className="headContaner-5">
              <div className="headContaner-5-1">
                <h1>GIFT</h1>
                <h1>WRAP ROLL</h1>
              </div>
              <div className="headContaner-5-2">
                <img src="" alt="" />
              </div>
            </div>
            // container 6 -------------------------------------------------
            <div className="headContaner-6">
              <div className="headContaner-6-1">
                <img src="" alt="" />
              </div>
              <div className="headContaner-6-1">
                <h1>COMBO</h1>
                <h1>PACK</h1>
              </div>
            </div>
            {console.log(Home)}
          </div>
        </div>
      </div>
    </div>
  );
}
