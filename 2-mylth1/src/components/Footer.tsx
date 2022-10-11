//tsrfce:
import React from "react";

type Props = {
    randomText : string
};

function Footer(prop: Props) {
  return (
    <>
      <footer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eveniet
          aspernatur quia obcaecati molestiae quisquam.{prop.randomText}
        </p>
      </footer>
    </>
  );
}

export default Footer;
