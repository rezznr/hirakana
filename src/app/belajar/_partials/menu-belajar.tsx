import React from "react";
import { menu } from "./menu.data";
import { Menus } from "@/components/card/menu";

function MenuBelajar() {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-20">
      {menu.map((item, i) => (
        <div key={i}>
          <Menus icon={item.icon} link={item.link} name={item.name} />
        </div>
      ))}
    </div>
  );
}

export default MenuBelajar;
