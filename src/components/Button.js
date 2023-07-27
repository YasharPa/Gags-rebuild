import classNames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  let classes = classNames(rest.className, "button", {
    "primary-button": primary,
    "secondary-button": secondary,
    "success-button": success,
    "warning-button": warning,
    "danger-button": danger,
    "rounded-button": rounded,
    "outline-primary-button": primary && outline,
    "outline-secondary-button": secondary && outline,
    "outline-success-button": success && outline,
    "outline-warning-button": warning && outline,
    "outline-danger-button": danger && outline,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValues: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1)
      throw new Error(
        "One of the only primary, secondary, success, warning, danger can be true"
      );
  },
};

export default Button;
