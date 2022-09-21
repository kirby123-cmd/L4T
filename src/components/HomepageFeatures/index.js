import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "What",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Language for Training (L4T) is a compiler-type programming language
        intended for educational purposes.
      </>
    ),
  },
  {
    title: "why",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        It is targeted at those who are new to programming, or those who have
        touched a high-level language such as Python but have never touched a
        low-level language such as C and feel resistance to languages such as C,
        C++, and Rust.
      </>
    ),
  },
  {
    title: "How",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Get an introduction to the world of "low-level" programming, along with
        L4T's robust type system, clear and clever error statements, and
        grammars and rules that encourage secure coding! There is no need to
        build an execution environment. You can always try L4T at L4T
        Playground!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
