import React from "react";
import Form from "./Form";

// export default function Hero({ children, hero }) {
//   return <header className={hero}>{children}</header>;
// }

export default function Hero(props) {
  return <div className={props.hero}><Form type={props.form} /> </div>;
}

Hero.defaultProps = {
  hero: "defaultHero",
};
