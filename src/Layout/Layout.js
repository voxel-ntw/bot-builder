import React, { useState } from "react";
import styles from "./Layout.module.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import NavBar from "../components/NavBar/NavBar";
import View from "../components/View/View";

const Layout = ({ children }) => {
  const [layout, setLayout] = useState("LR");
  const [downloadCount, setDownloadCount] = useState(0);
  const [code, setCode] = useState(`
  {
    "name": "basic-bot",
    "version": "0.3.9",
    "private": true,
    "nodes": [
      {
        "Find in collection": [
          {
            "If-else": [
              {
                "name": "Mention user"
              },
              {
                "name": "Balance"
              }
            ]
          }
        ]
      }
    ]
  }`);

  return (
    <div className={styles.layout}>
      <div className={styles.layout__navbar}>
        <NavBar
          setDownloadCount={setDownloadCount}
          downloadCount={downloadCount}
          setLayout={setLayout}
          layout={layout}
        />
      </div>
      <div className={styles.layout__main}>
        <div className={styles.layout__sidebar}>
          <Sidebar setCode={setCode} />
        </div>
        <div className={styles.layout__body}>
          <View
            downloadCount={downloadCount}
            code={code}
            setCode={setCode}
            layout={layout}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
