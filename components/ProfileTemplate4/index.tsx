import React from "react";
import DefaultLayout from "@/components/Layouts/Default";
import Experience from "@/components/ProfileTemplate1/ProfileDetail2";
import { useOverrideTheme, useTheme } from "@/libs/theme";
import DisplayField from "@/components/InputField";
import Avt from "../Avt";
import BasicInfoItem from "./BasicInfoItem";
import ProfileDetailItem from "@/components/ProfileTemplate1/ProfileDetail";
import Heading from "../Heading";
import { IconType } from "@/libs/constants";

const ProfileTemplate4 = ({ user }) => {
  const themeDefault = useTheme();
  const theme = useOverrideTheme({
    textColorPrimary: "text-white",
    textColorSecondary: "text-black",
    textColorIcon: "text-white",
    bgBorder: "bg-white",
    primary: {
      ...themeDefault.primary,
      bgIcon: "bg-black",
      bg: "bg-[#626262]",
    },
    summary: {
      ...themeDefault.summary,
      // bg: "bg-[#626262]",
      bg: "bg-[#e3e3e3] ",
      textColor: "text-white",
      basicInfo: {
        ...themeDefault.summary.basicInfo,
        bg: "",
        // icon: {
        //   bg: null,
        //   border: "",
        // },
      },
    },
  });
  return (
    <div className="pdf-page">
      <DefaultLayout>
        <div className="mt-4 ">
          <div className={"flex flex-col items-center " + theme.primary.bg}>
            <div className="flex items-center w-full">
              <div className="w-1/3">
                <Avt src={user?.avt} theme={theme} />
              </div>
              <div
                className={" flex flex-col py-4 pl-4" + theme.primary.bgWhite}
              >
                <h1 className={"text-3xl font-bold " + theme.textColorPrimary}>
                  <DisplayField value={user?.name} />
                </h1>
                <br />
                {user?.basicInfos?.map(({ text, icon }, idx) => (
                  <div key={idx} className="flex">
                    <BasicInfoItem text={text} icon={icon} theme={theme} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={"w-full mb-1 " + theme.primary.bg}></div>

          <div className="flex">
            <div className={`w-full ${theme.detail.bg}`}>
              <div className="pt-8 px-8">
                {user?.detail?.map((detail, idx) => (
                  <ProfileDetailItem key={idx} data={detail} />
                ))}
              </div>

              <div className="px-8 mb-2">
                <Heading heading="TECH STACK" icon={IconType.LIST} />
                <div className="px-4">
                  <div>Have experience using through projects</div>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      {
                        groupName: "Frontend",
                        data: [
                          "NextJs",
                          "NuxtJs",
                          "VueJs",
                          "ReatJs",
                          "ViteJs",
                          "Material UI",
                          "Antd",
                          "Element UI",
                          "Tailwindcss",
                          "Gulp",
                          "Webpack",
                          "Wdio",
                          "Jest",
                          "AngularJs",
                          "Vuetify",
                        ],
                      },
                      {
                        groupName: "Backend",
                        data: [
                          "FeathersJs",
                          "ExpressJs",
                          "NestJs",
                          "Laravel",
                          "Loopback",
                          "Spring Boot",
                          "Flask",

                          "Java",
                          "Python",
                          "GraphQL",
                          "SocketIO",
                          "Wordpress",
                          "Yii",
                          "Flutter",
                          "Django",
                          "Ruby",
                          "Golang",
                        ],
                      },
                      {
                        groupName: "Database",
                        data: [
                          "Postgres",
                          "Mysql",
                          "MongoDB",
                          "Redis",
                          "ElasticSearch",
                          "DynamoDB",
                        ],
                      },
                      {
                        groupName: "Devop",
                        data: [
                          "Azure Service",
                          "Azure Function",
                          "Digital Ocean",
                          "AWS Cloudformation",
                          "AWS Cognito",
                          "AWS EC2",
                          "AWS SES",
                          "AWS Route53",
                          "AWS Securty",
                          "AWS ALB",
                          "AWS ERC",
                          "AWS ECS",
                          "Docker",
                          "PM2",
                          "Nginx",
                          "Terraform",
                          "Bash",
                          "doctl",
                          "Linux",
                          "Ubuntu",
                          "Centos",
                          "Redis Search",
                          "ActiveMQ",
                          "Kafka",
                        ],
                      },
                      {
                        groupName: "Service",
                        data: [
                          "Twilio",
                          "Firebase",
                          "Sendgrid",
                          "AWS",
                          "CDN services (Bunny, CloudFront, Cloudflare, ...)",
                          "Payment Gateway (Paypal, Momo, Ngan Luong, ...)",
                          "Digital Ocean",
                          "Azure",
                        ],
                      },
                      {
                        groupName: "Mobile",
                        data: [
                          "Flutter",
                          "React native",
                          "Ionic",
                          "CapacitorJs",
                          "Java",
                        ],
                      },
                    ].map((item: any, idx) => (
                      <div className="mb-2 flex gap-2 flex-col" key={idx}>
                        <div className="text-lg font-bold">
                          {item?.groupName}
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {item?.data?.map((text: string, idx) => (
                            <span
                              key={idx + "item"}
                              className={`${theme.primary.bg} p-1 rounded`}
                            >
                              <div className="text-sm">{text}</div>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {user.experience && (
                <div>
                  <Experience detail={user.experience} />
                </div>
              )}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default ProfileTemplate4;

