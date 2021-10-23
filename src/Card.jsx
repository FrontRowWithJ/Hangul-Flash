import React, { useState, useEffect, useRef, useCallback } from "react";
import "./card.css";
import hanguls from "./data";

const fisherYates = (arr = []) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = (Math.random() * i) | 0;
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
};

const useHangulNo = (len) => {
  const [hangulNo, setNo] = useState(0);
  const [index, setIndex] = useState(0);
  const [order, setOrder] = useState(fisherYates([...Array(len).keys()]));
  const setHangul = () => {
    if (index === len) {
      setOrder(fisherYates([...Array(len).keys()]));
      setIndex(0);
    }
    setNo(order[index]);
    setIndex((curr) => curr + 1);
  };
  return [hangulNo, setHangul];
};

const Card = () => {
  const [isFront, flip] = useState(true);
  const [hangulNo, setHangulNo] = useHangulNo(hanguls.length);
  const hangul = hanguls[hangulNo];
  const ref = useRef(null);

  const changeLetter = useCallback(() => {
    setHangulNo();
    flip(true);
    ref.current.style.color = !isFront ? "white" : "";
  }, [setHangulNo, isFront]);

  useEffect(() => {
    const onkeypress = ({ key }) => (key === " " ? changeLetter() : 0);
    const elem = ref.current;
    const ontransitioncancel = () => (elem.style.color = "");
    document.body.addEventListener("keypress", onkeypress);
    elem.addEventListener("transitioncancel", ontransitioncancel);
    return () => {
      document.body.removeEventListener("keypress", onkeypress);
      elem.removeEventListener("transitioncancel", ontransitioncancel);
    };
  }, [changeLetter]);

  return (
    <div
      className="card"
      onClick={({ target }) => {
        if (!target.classList.contains("button")) changeLetter();
        else flip(!isFront);
      }}
    >
      <span className="center card-symbol">{hangul.symbol}</span>
      <div className="card-sound">
        <div
          ref={ref}
          className="card-sound-inner"
          style={{ transform: `rotateX(${isFront ? 0 : 180}deg)` }}
          onTransitionEnd={() => (ref.current.style.color = "")}
        >
          <div className="center button">Reveal</div>
          <div className="center button">{hangul.sound}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
