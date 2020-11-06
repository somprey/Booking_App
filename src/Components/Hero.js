import React from "react";

// export default function Hero({ children, hero }) {
//   return <header className={hero}>{children}</header>;
// }

export default function Hero(props) {
  console.log(props);
  return <div className={props.hero}>this</div>;
}

Hero.defaultProps = {
  hero: "defaultHero",
};
