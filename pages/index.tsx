import api, { UserResultType } from "@/libs/api";
import React from "react";
const Index = ({ menuItems }) => {
  console.log("menuItems", menuItems);
  return (
    <div className="w-1024 h-full">
      <span className="text-lg font-bold uppercase">Profile list</span>
      <div className="flex flex-wrap gap-1 relative justify-center">
        {menuItems?.map((item: UserResultType, idx) => (
          <div
            key={idx}
            className="w-1/4 h-100 bg-gray-400 p-2 hover:bg-slate-100 hover:font-bold"
          >
            <img className="w-full" src={item.data.avt} />
            <a href={"/profiles/" + item.id} className="text-base ">
              {idx + 1}. {item.id.replace(/-/g, " ").toUpperCase()} - [
              {item.data.version}]
            </a>
          </div>
        ))}
      </div>
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
