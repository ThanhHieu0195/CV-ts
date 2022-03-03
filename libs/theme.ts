export const useTheme = () => {
  return {
    color: "text-black",
    color2: "text-green-600",
    primary: {
      bg: "bg-green-200",
      bgIcon: "bg-green-600",
    },
    detail: {
      bg: "bg-white",
    },
    summary: {
      bg: "bg-[#f7f7f7]",
      basicInfo: {
        bg: "bg-[#d7e4d8]",
        icon: {
          bg: "bg-green-600",
          border: "border-2 border-white",
        },
      },
      MetaInfo: {
        heading: "text-[#91C190]",
        line: {
          bg: "bg-[#91C190]",
        },
      },
    },
  };
};
