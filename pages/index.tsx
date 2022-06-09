import api from "@/libs/api";
import React, { useEffect, useState } from "react";
const Index = ({ menuItems }) => {
  console.log("menuItems", menuItems);
  return (
    <div>
      <span className="text-lg font-bold">Profile list</span>
      <ul className="list-disc">
        {menuItems?.map((itemName: string, idx) => (
          <li key={idx}>
            <a href={"/profiles/" + itemName} className="text-base">
              {idx + 1}. {itemName.replace(/\-/g, " ").toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      menuItems: await api.getUsers(),
    },
  };
}
export default Index;
