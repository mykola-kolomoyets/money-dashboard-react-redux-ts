import React, { FC } from "react";
import cn from "classnames";

import { Detailed } from "utils/types";

import styles from "./paragraph.module.scss";

export enum ParagraphSize {
  small = "small",
  middle = "middle",
  large = "large"
}

export enum ParagraphView {
  regular = "regular",
  link = "link",
  ghost = "ghost",
  capitals = "capitals",
  button = "button"
}

type ParagraphProps = {
  view: ParagraphView;
  size?: ParagraphSize;
  bold?: boolean;
} & Detailed<HTMLParagraphElement>;

const Paragraph: FC<ParagraphProps> = ({
  view,
  size,
  bold,
  children,
  ...props
}) => {
  const sizeClasses = cn({
    [styles.p__small]: size === ParagraphSize.small,
    [styles.p__middle]: size === ParagraphSize.middle,
    [styles.p__large]: size === ParagraphSize.large
  });

  const viewClasses = cn({
    [styles.p__view_regular]: view === ParagraphView.regular,
    [styles.p__view_link]: view === ParagraphView.link,
    [styles.p__view_ghost]: view === ParagraphView.ghost,
    [styles.p__view_capitals]: view === ParagraphView.capitals,
    [styles.p__view_button]: view === ParagraphView.button
  });

  const classes = cn(styles.p, sizeClasses, viewClasses, {
    [styles.p__bold]: bold
  });

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
