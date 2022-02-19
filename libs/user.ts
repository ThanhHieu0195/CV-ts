import { useState } from "react";
import { IconType } from "./constants";
import { IUser } from "./models/User";

type UserUser = {
  loading: boolean;
  user: IUser;
};

export const useUser = (): UserUser => {
  const [user, setUser] = useState<IUser>(null);
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setUser({
      name: "Phạm Thị Hải Hiếu",
      position: "Customer Service",
      avt: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/273274475_1612813535721101_8096702146810761917_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=VYfY318PQHsAX8kLfbN&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT9bvrSE_pFoJV3WVeTeNJIiTLVYq7LLX9umCdsnXkxfgg&oe=6214CDC8",
      basicInfos: [
        {
          text: "phamhaihieu.vt@gmail.com",
          icon: IconType.MAIL,
        },
        {
          text: "0902.101.793",
          icon: IconType.PHONE,
        },
        {
          text: "03/10/1995",
          icon: IconType.BIRTHDAY,
        },
        {
          text: "Huynh Tan Phat Street, 7 District, Ho Chi Minh City",
          icon: IconType.ADDRESS,
        },
      ],
      metaInfos: [
        {
          heading: "EDUCATION",
          infos: [
            "License - College of Foreign Economy and Relations (2014 - 2017)",
          ],
        },
        {
          heading: "SKILLS",
          infos: [
            "Ability to communicate and negotiate",
            "Problem solving skills - Training - Coaching",
            "Ability to manager multiple tasks and prioritization",
            "Balance independent work and teamwork",
            "Ability to work well under pressure, deal with multiple deadlines, acceptable for work in shifts and overtime",
          ],
        },
      ],
      detail: [
        {
          heading: "OBJECTIVE",
          description:
            "I have a passion for sharing and helping others. I consider customer satisfaction as my success and I believe that I am doing something meaningful. I'm looking for a position as a customer service where I can optimize my problem-solving and organizational skills to contribute to increased customer satisfaction.",
          icon: IconType.OBJECTIVE,
        },
        {
          heading: "WORK EXPERIENCE",
          icon: IconType.OBJECTIVE,
          detail: [
            {
              heading: "Grab Company Limited",
              data: [
                {
                  subheading: "Customer Service Professional",
                  time: "08/2017 - 02/2019",
                  content: [
                    "Handling inquiries and complaints of Drivers / Customers about Grab service by call/email.",
                    "Provide quality customer support (24/7) by call/email and respond appropriately in a timely manner.",
                    "Support the deployment of GrabPay Credit wallet on applications for customers",
                    "Support other departments when the need arises.",
                    "Award: Best Agent Voice (6/2018)",
                  ],
                },
                {
                  subheading: "Senior Customer Specialist - Voice",
                  time: "02/2019 - 09/2020",
                  content: [
                    "Perform daily senior tasks: absence report, give solution for agents, support Management on manage (perfomance, KPI, ...), report on daily-weekly-monthly ...",
                    "Work closely with Management to handle technical problems, cases threat to brand image, monitoring OKRs for the team (CSA, QA), keep spirit and high connection among team members...",
                    "Training knowledge for new agents, 1: 1 private communication with agent as needed, receive feedback from agents and consult with Management to adjust the process.",
                    "Direct handling of bad rating (rated 1 * and 2 *) after call / mail.",
                    "Support the deployment of Moca e-wallet on Grab app for customers (February 2019) as well as verify Moca user information according to State regulations - KYC knows your customers (May 2020).",
                    "Award: Outserve Hero (1/2019 and 8/2019) Best Supporter (6/2019 and 8/2019)",
                  ],
                },
                {
                  subheading: "Senior Customer Specialist - Livechat",
                  time: "09/2020 - 2021",
                  content: [
                    "Senior tasks have continued as above.",
                    "One of the pioneers to support customers/ drivers through the Live Chat feature",
                    "Consult with Management on practical issues to improve Live Chat feature as well as adjust the process.",
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    setLoading(false);
  }, 100);

  return {
    user,
    loading,
  };
};
