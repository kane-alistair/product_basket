import styles from "./Button.module.css";

/**
 * Responsible for displaying a button with a message
 * @param {string} message - The message to display on the button
 * @param {function} onClick - The function to call when the button is clicked
 * @param {string} className - The class to apply to the button
 */
export const Button = ({
  children,
  message,
  onClick,
  className,
  size = "100%",
}) => {
  const buttonSize = sizes[size] ?? size;

  return (
    <button
      onClick={onClick}
      style={{ width: buttonSize }}
      className={`${styles.button} ${className ?? ""}`}
    >
      {children} {message}
    </button>
  );
};

const sizes = {
  small: "5rem",
  medium: "3rem",
  large: "4rem",
};
