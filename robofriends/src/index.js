import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Card from "./Card";
import "tachyons";
import { robots } from "./robots";
const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    {robots.map((user, i) => {
      return (
        <Card
          key={i}
          id={robots[i].id}
          name={robots[i].name}
          username={robots[i].username}
          email={robots[i].email}
        />
      );
    })}
  </div>
);
