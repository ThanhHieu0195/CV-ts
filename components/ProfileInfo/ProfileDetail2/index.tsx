import React from "react";
import { IDetail, IUser } from "@/libs/models/User";
import { useTheme } from "@/libs/theme";
import InputField, { InputFieldType } from "../../InputField";
import logger from "@/libs/logger";
import { IconType } from "@/libs/constants";

type ItemType = {
  icon: IconType;
  heading: string;
  data: {
    subheading: string;
    time: string;
    projects: {
      name: string | null;
      metas: {
        title: string;
        display?: "list" | "string" | "link";
        value: string | string[];
      }[];
    }[];
  }[];
};
type ItemProps = {
  data: ItemType;
};

const Item = ({ data }: ItemProps) => {
  const theme = useTheme();

  const Item = ({ item }) => {
    switch (item.display) {
      case "list":
        return item.value?.map((text, idx) => (
          <div key={idx} className="text-base pl-2 pb-2">
            {text}
          </div>
        ));

      case "string":
        return (
          <div className="text-base pl-2 pb-2">{item.value.join(", ")}</div>
        );

      case "link":
        return item.value?.map((text, idx) => (
          <div key={idx} className="text-base pl-2 pb-2 text-blue-500">
            <a href={text}>{text}</a>
          </div>
        ));
      default:
        return <></>;
    }
  };

  return (
    <div className="pb-10">
      <div className="flex items-center pb-2">
        {data.icon && (
          <div
            className={
              "mr-2 text-xl rounded-full p-2 text-white " + theme.primary.bgIcon
            }
          >
            <InputField type={InputFieldType.ICON_FIELD} value={data.icon} />
          </div>
        )}
        {data.heading && (
          <div className={"text-xl font-bold " + theme.color2}>
            <InputField value={data.heading} />
          </div>
        )}
      </div>
      <div className="pl-4">
        {data.data.map((subItem, index) => (
          <>
            <div key={index} className="pb-4 pl-8 border-l-4 border-green-600">
              <div className="flex items-center justify-between pb-2">
                <div className="text-xl font-bold">
                  <InputField value={subItem.subheading} />
                </div>
                <div className="text-xs">
                  <InputField value={subItem.time} />
                </div>
              </div>
              <ul className="pl-4 w-4/5 list-disc">
                {subItem?.projects?.map((project, idx) => (
                  <li key={idx}>
                    <div className="text-md font-bold">{project.name}</div>
                    <div className="p-2 text-gray-800">
                      {project.metas?.map((item, idx) => (
                        <div key={idx}>
                          {item.title && (
                            <div className="text-md font-bold">
                              {item.title}
                            </div>
                          )}

                          {typeof item.value === "string" && (
                            <div className="text-base pl-2 pb-2 whitespace-pre-line">
                              {item.value}
                            </div>
                          )}

                          {typeof item.value === "object" && (
                            <Item item={item} />
                          )}
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {index < data.data.length - 1 && (
              <div className="w-full border-b-2 border-green-600 border-dotted pt-2 mb-4"></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

const ProfileDetail2 = ({}) => {
  const data: ItemType[] = [
    {
      icon: IconType.WORK_EXPERIENCE,
      heading: "WORK EXPERIENCE",
      data: [
        {
          subheading: "Shift Asia",
          time: "03/2021 - 03/2022",
          projects: [
            {
              name: "Education",
              metas: [
                {
                  title: "Job description",
                  value:
                    "Provides authentication module to support registration, login, update information between different platforms.",
                },

                {
                  title: "Platform",
                  display: "string",
                  value: [
                    "Spring Boot",
                    " Gradle",
                    " Cognito",
                    " DynamoDB",
                    " Redis",
                    " Postgres",
                    " Gulp",
                    " Pug",
                  ],
                },
                {
                  title: "Position",
                  value: "Fullstack",
                },
                {
                  title: null,
                  display: "link",
                  value: ["https://www.ei-navi.jp"],
                },
              ],
            },
            {
              name: "Internal Banking System",
              metas: [
                {
                  title: "Job description",
                  value:
                    "This is the internal system of a banking system consisting of two parts, admin and user, supporting user management, campaigns, statistics,...",
                },

                {
                  title: "Platform",
                  display: "string",
                  value: [
                    "NextJs/Mui",
                    "Redis",
                    " Mysql",
                    "Spring Boot",
                    "Multiple workspace",
                  ],
                },
                {
                  title: "Position",
                  value: "Fullstack",
                },
              ],
            },
            {
              name: "Insurance System",
              metas: [
                {
                  title: "Job description",
                  value:
                    "This is a contract management system, insurance, ... Supports the following interaction between users and admin ...",
                },

                {
                  title: "Platform",
                  display: "string",
                  value: [
                    "NextJs/Mui",
                    "SpringBoot",
                    "Cognito",
                    "Postgres",
                    "Micro Services",
                    "AWS Workspace",
                  ],
                },
                {
                  title: "Position",
                  value: "Fullstack",
                },
              ],
            },
          ],
        },
        {
          subheading: "Espx Media",
          time: "10/2019 - 03/2021",
          projects: [
            {
              name: "ESPx cloud",
              metas: [
                {
                  title: "Job description",
                  value: `Provide a live-stream platform that supports B2B and B2C systems with the following features:
                    - Content management (category, event, movie, stream) 
                    - Actionable with viewers (live chat, q&a, survey, dialog
                    - Special campaigns (authenticate, ticket, pass-code)
                    - Statistics, reports
                    `,
                },

                {
                  title: "Platform",
                  display: "string",
                  value: [
                    "FeathersJs (Nodejs)",
                    " NextJs",
                    " Angular",
                    " Redis",
                    " Postgres",
                    " MongoDb",
                    " SocketIO",
                    " AWS",
                    " DO",
                    " Bunny / CloudFlare / CloudFront",
                    " Firebase",
                    " Twilio",
                  ],
                },
                {
                  title: "Position",
                  value: "Technical Lead",
                },
                {
                  title: "Partner",
                  display: "string",
                  value: [
                    "Mplay Asia",
                    "National Library Board",
                    "gradian",
                    "National Gallary Singapore",
                  ],
                },
                {
                  title: "Link",
                  display: "link",
                  value: ["https://www.espx.cloud", "https://mplayasia.com/"],
                },
              ],
            },
            {
              name: "Outsourcing",
              metas: [
                {
                  title: "Job description",
                  value: "Provide solutions for customers with micro-sites",
                },
                {
                  title: "Platform",
                  display: "string",
                  value: ["Wordpress", "Express", "Mariadb", "WPVIP"],
                },
                {
                  title: "Position",
                  value: "Technical Lead",
                },
                {
                  title: "Partner",
                  display: "string",
                  value: ["Grab", "OCBC", "Facebook"],
                },
                {
                  title: "Link",
                  display: "link",
                  value: [
                    "https://wethinkdigital.fb.com/",
                    "https://www.facebook.com/business/m/going-global",
                  ],
                },
              ],
            },
          ],
        },
        {
          subheading: "Viral-work",
          time: "07/2018 - 10/2019",
          projects: [
            {
              name: "Platform KOL",
              metas: [
                {
                  title: "Job description",
                  value: `Provide KOL platform which manage influencer and branch to help them can work together
                  - The platform supports connecting KOL and Brand together
                  - Crawl data user from facebook
                  - Manage KOL, BRAND, ADMIN
                  - Manage campaign
                    `,
                },

                {
                  title: "Platform",
                  display: "string",
                  value: ["Express", "Laravel", "Mongodb", "Redis"],
                },
                {
                  title: "Position",
                  value: "Backend developer",
                },
              ],
            },
            {
              name: "Crawler System",
              metas: [
                {
                  title: "Job description",
                  value: `Provide crawler support
                  - Collect post information every day from social networks (facebook, instagram, youtube)
                  - Crawl user's information
                  - Screenshot post
                    `,
                },

                {
                  title: "Platform",
                  display: "string",
                  value: [
                    "Python",
                    "Socket",
                    "Redis",
                    "Mongodb",
                    "Selenium",
                    "Queue",
                  ],
                },
                {
                  title: "Position",
                  value: "Backend developer",
                },
              ],
            },
          ],
        },
        {
          subheading: "Solazu",
          time: "2016-07/2018",
          projects: [
            {
              name: "Hotel search system",
              metas: [
                {
                  title: "Job description",
                  value: `- 3rd hotel search system of Japan
                  - Crawl data from 32 OTA service when search
                  - Support deep-link
                  - Minimize latency
                    `,
                },
                {
                  title: "Platform",
                  display: "string",
                  value: [
                    "Ruby",
                    "Redis",
                    "Firebase",
                    "ReactJs",
                    "Elastic Search",
                    "SideKiq",
                    "Mysql",
                  ],
                },
                {
                  title: "Position",
                  value: "Backend developer",
                },
                {
                  title: "Link",
                  display: "link",
                  value: ["https://www.travel.co.jp/"],
                },
              ],
            },
            {
              name: "Themes in theme-forest",
              metas: [
                {
                  title: "Job description",
                  value: `Generate themes/plugins to theme-forest
                  - Build themes, plugins, Short-codes, ...
                  - Major topics: education, music, hearty, events, ...
                    `,
                },

                {
                  title: "Platform",
                  display: "string",
                  value: ["CMS Wordpress"],
                },
                {
                  title: "Position",
                  value: "Backend developer",
                },
              ],
            },
          ],
        },
        {
          subheading: "Freelancer",
          time: "2015",
          projects: [
            {
              name: null,
              metas: [
                {
                  title: "Platform",
                  display: "string",
                  value: [
                    "wordpress",
                    "laravel",
                    "yii",
                    "firebase",
                    "payment gateway integration",
                    "QR code",
                    "VueJs",
                  ],
                },
                {
                  title: "Position",
                  value: "Fullstack",
                },
                {
                  title: "Product",
                  display: "string",
                  value: [
                    "Nhị Long",
                    "Extrim",
                    "Hoàng Anh",
                    "Sabaidee",
                    "Techvsi",
                    "Nhật Quang",
                    "Nhân Hòa",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="px-8">
      {data.map((detail, idx) => (
        <Item key={idx} data={detail} />
      ))}
    </div>
  );
};

export default ProfileDetail2;
