import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./button.module.scss";

export enum ButtonView {
  primary = "primary",
  secondary = "secondary"
}

type ButtonProps = {
  view: ButtonView;
  rightAddons?: any;
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ view, rightAddons, children, ...props }) => {
  const classes = cn(styles.button, {
    [styles.button__primary]: view === ButtonView.primary,
    [styles.button__secondary]: view === ButtonView.secondary
  });

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
