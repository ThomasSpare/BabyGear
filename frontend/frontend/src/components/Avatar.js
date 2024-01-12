import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 45, img }) => {
  return (
    <span>
      <img
        className={`${styles.Avatar} img-fluid`}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {img}
    </span>
  );
};

export default Avatar;