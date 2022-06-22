import React, { FC } from "react";
import cn from "classnames";

import styles from "./button.module.scss";
import { Detailed } from "utils/types";

export enum ButtonView {
  primary = "primary",
  secondary = "secondary"
}

type ButtonProps = {
  view: ButtonView;
  rightAddons?: any;
} & Detailed<HTMLButtonElement>;

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
