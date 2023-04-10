import React from "react";
import DefaultLayout from "@/components/Layouts/Default";
import Experience from "@/components/ProfileTemplate1/ProfileDetail2";
import { useOverrideTheme, useTheme } from "@/libs/theme";
import DisplayField, { InputFieldType } from "@/components/InputField";
import RowItem from "../Common/RowIconItem";
import Avt from "../Common/Avt";
import { Meta, User } from "@/libs/models/User.type";
import { IconType } from "@/libs/constants";
import Heading from "../Heading";
import HSpace from "../Common/Space";
import SubHeading from "../Common/SubHeading";
import Summary from "./parts/Summary";

const Item = ({ item }: { item: Meta }) => {
  switch (item.display) {
    case "list":
      return item.value?.map((text, idx) => (
        <>
          <DisplayField variant="text" value={text} />
        </>
      ));

    case "string":
      return <DisplayField variant="text" value={item.value.join(", ")} />;

    case "link":
      return item.value?.map((text, idx) => (
        <>
          <DisplayField
            type={InputFieldType.LINK_FIELD}
            variant="text"
            value={text}
            link={text}
          />
        </>
      ));
    default:
      return <></>;
  }
};

const ProfileTemplate3 = ({ user }: { user: User }) => {
  const themeDefault = useTheme();
  const theme = useOverrideTheme({
    color2: "text-black",
    primary: {
      ...themeDefault.primary,
      bgIcon: "bg-black",
    },
    summary: {
      ...themeDefault.summary,
      bg: "bg-[#626262]",
      textColor: "text-white",
      basicInfo: {
        ...themeDefault.summary.basicInfo,
        bg: "",
        icon: {
          bg: null,
          border: "",
        },
      },
    },
  });
  return (
    <div className="relative">
      <DefaultLayout>
        <div className="">
          <div className="flex border border-gray-300">
            <div
              className={`w-1/3 ${theme.summary.bg} ${theme.summary.textColor}`}
            >
              <Summary theme={theme} user={user} />
            </div>
            <div className={`w-2/3`}>
              <div className="pt-8 px-8">
                <DisplayField variant="main-heading" value={user.name} />
                <HSpace variant="base" />

                <DisplayField
                  variant="text"
                  isFontBold={true}
                  extraClass="text-gray-500"
                  value={user.position}
                />
                <HSpace variant="section" />

                {user?.detail?.map((detail, idx) => (
                  <>
                    <Heading
                      icon={detail.icon as IconType}
                      heading={detail.heading}
                      theme={theme}
                    />
                    <DisplayField variant="text" value={detail.description} />
                  </>
                ))}

                <HSpace variant="section" />
                {user.experience && (
                  <Heading
                    heading={user.experience.heading}
                    icon={user.experience.icon as IconType}
                    theme={theme}
                  />
                )}
                <HSpace variant="base" />
                {user.experience.data?.map((item) => (
                  <>
                    <div className="flex justify-between">
                      <SubHeading heading={item.subheading} theme={theme} />
                      <DisplayField variant="small" value={item.time} />
                    </div>

                    <div>
                      {item.projects.map((project, idx) => (
                        <div className="px-4" key={"project" + idx}>
                          <DisplayField
                            extraClass="font-bold"
                            variant="sub-heading"
                            value={project.name}
                          />

                          <div className="">
                            {project.metas.map((meta) => (
                              <>
                                {meta.title && (
                                  <DisplayField
                                    variant="text"
                                    isFontBold={true}
                                    value={meta.title}
                                  />
                                )}

                                {typeof meta.value === "string" && (
                                  <DisplayField
                                    variant="text"
                                    value={meta.value}
                                    extraClass={"whitespace-pre-line"}
                                  />
                                )}

                                {typeof meta.value === "object" && (
                                  <Item item={meta} />
                                )}
                              </>
                            ))}
                          </div>
                          <HSpace />
                        </div>
                      ))}
                    </div>
                    <div className="w-full border-b-2 border-gray-400 border-dotted pt-2 mb-4"></div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default ProfileTemplate3;

