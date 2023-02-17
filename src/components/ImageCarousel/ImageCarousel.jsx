import { useState } from "react";
import { SelectedProductContext } from "../../contexts/SelectedProductContext";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { useEffect } from "react";

export const ImageCarousel = ({ children, extraButtons }) => {
  const [selectedProduct, selectedProductDispatch] = useContext(
    SelectedProductContext
  );

  if (!Array.isArray(children) || children.length <= 0) {
    return null;
  }

  const [currentIdx, setCurrentIdx] = useState(0);
  const length = children.length;

  const next = () => {
    setCurrentIdx(currentIdx === length - 1 ? 0 : currentIdx + 1);
  };

  const prev = () => {
    setCurrentIdx(currentIdx === 0 ? length - 1 : currentIdx - 1);
  };

  useEffect(() => {
    setCurrentIdx(0);
  }, [selectedProduct]);

  return (
    <section className="carousel">
      <div>{children.map((child, index) => index === currentIdx && child)}</div>
      <Button size="small" onClick={prev}>
        Prev
      </Button>
      <Button size="small" onClick={next}>
        Next
      </Button>
      {extraButtons}
    </section>
  );
};
