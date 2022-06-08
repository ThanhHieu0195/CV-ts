import React, { useEffect, useState } from "react";
import api from "@/libs/api";

const Index = () => {
  const [menuItems, setMenuItems] = useState<string[]>(null);

  useEffect(() => {
    if (!menuItems) {
      api.getUsers().then((rs) => setMenuItems(rs));
    }
  });
  return (
    <div>
      <span className="text-lg font-bold">Profile list</span>
      <ul className="list-disc">
        {menuItems?.map((itemName, idx) => (
          <li key={idx}>
            <a href={"/profiles/" + itemName} className="text-base">
              {idx + 1}. {itemName.toUpperCase().replaceAll("-", " ")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
