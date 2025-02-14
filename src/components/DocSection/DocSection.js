import React from "react";
import styles from "./DocSection.module.css";

const BASE_URL = "https://github.com/Netflix/metaflow/tree/master/";

export const DocSection = ({
  children,
  name,
  module,
  link,
  heading_level = 3,
  baseUrl = BASE_URL,
  type,
  show_import = true, // Set to "False" to hide imports
}) => {
  const displayName = (type === "decorator" ? "@" : "") + name;

  return (
    <div className={styles.docSection}>
      <a className={styles.target} id={displayName} />
      <div className={styles.titlebox}>
        <Name heading_level={heading_level} name={name}>
          <span className={styles.name}>{displayName}</span>
          {children.length
            ? children.filter(
                (child) => child.props.mdxType === "SigArgSection"
              )
            : null}
        </Name>
        <a className={styles.source} href={baseUrl + link}>
          [source]
        </a>
      </div>
      {show_import !== "False" ? (
        <p className={styles.module}>
          from {module} import {name}
        </p>
      ) : null}
      <div className={styles.content}>
        {children.length
          ? children.filter((child) => child.props.mdxType === "Description")
          : null}
        {children.length
          ? children.filter(
              (child) =>
                child.props.mdxType !== "Description" &&
                child.props.mdxType !== "SigArgSection"
            )
          : null}
      </div>
    </div>
  );
};

const Name = ({ children, heading_level, name }) => {
  // Ensure there are no spaces in the id
  const anchorId = name.replace(/\s/, "_");

  switch (parseInt(heading_level, 10)) {
    case 1:
      return <h1 id={anchorId}>{children}</h1>;
    case 2:
      return <h2 id={anchorId}>{children}</h2>;
    case 3:
      return <h3 id={anchorId}>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      return <h3>{children}</h3>;
  }
};

export default DocSection;
