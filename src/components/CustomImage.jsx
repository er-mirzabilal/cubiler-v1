import Image from "next/image";
import React from "react";

const CustomImage = ({ src }) => {
  return (
    <Image
      src={src}
      alt="logo"
      width={100}
      height={50}
      layout="responsive"
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default CustomImage;
