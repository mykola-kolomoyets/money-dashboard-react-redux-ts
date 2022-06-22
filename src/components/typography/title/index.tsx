import React, { FC } from "react";
import cn from "classnames";

import { Detailed } from "utils/types";

import styles from "./title.module.scss";

export enum TitleTag {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4"
}

type TitleProps = {
  Tag: TitleTag;
} & Detailed<HTMLHeadingElement>;

const Title: FC<TitleProps> = ({ Tag, children, ...props }) => {
  const classes = cn(styles.title, {
    [styles.title__h1]: Tag === TitleTag.h1,
    [styles.title__h2]: Tag === TitleTag.h2,
    [styles.title__h3]: Tag === TitleTag.h3,
    [styles.title__h4]: Tag === TitleTag.h4
  });

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
