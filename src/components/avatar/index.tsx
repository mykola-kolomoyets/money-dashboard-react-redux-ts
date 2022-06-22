import React, { FC } from "react";

import styles from "./avatar.module.scss";

type AvatarProps = {
  name: string;
};

const Avatar: FC<AvatarProps> = ({ name }) => (
  <div className={styles.avatar}>{name.slice(0, 1).toUpperCase()}</div>
);

export default Avatar;
