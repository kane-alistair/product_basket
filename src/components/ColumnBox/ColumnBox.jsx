import styles from "./ColumnBox.module.css";

/**
 * Responsible for creating a vertically flexed container for its children
 * @param {children} children - content to be vertically flexed
 * @param {string} height - height of the column box, 'small', 'medium', or 'large' or a custom height
 * @param {string} width - width of the column box, 'small', 'medium', or 'large' or a custom width
 * @returns ColumnBox
 */
export const ColumnBox = ({
  children,
  height = "100%",
  width = "100%",
  reverse,
  centered = true,
}) => {
  const calcHeight = !height
    ? heightSizes["medium"]
    : heightSizes[height]
    ? heightSizes[height]
    : `${height}`;

  const calcWidth = !width
    ? widthSizes["medium"]
    : widthSizes[width]
    ? widthSizes[width]
    : `${width}`;

  const directionStyle = reverse === true ? styles.reverse : "";

  return (
    <div
      className={`${styles.column} ${directionStyle} ${
        centered ? styles.centered : ""
      }`}
      style={{
        maxHeight: calcHeight,
        maxWidth: calcWidth,
        width: calcWidth,
      }}
    >
      {children}
    </div>
  );
};

const heightSizes = {
  small: "20vw",
  medium: "50vw",
  large: "100vw",
};

const widthSizes = {
  small: "10px",
  medium: "20px",
  large: "30px",
};
