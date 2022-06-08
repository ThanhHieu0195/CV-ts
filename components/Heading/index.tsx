import { IconType } from "@/libs/constants";
import { useTheme } from "@/libs/theme";
import DispalyField, { InputFieldType } from "../InputField";

interface Props {
  icon: IconType;
  heading: string;
}

const Heading = ({ icon, heading }: Props) => {
  const theme = useTheme();
  return (
    <div>
      <div className="flex items-center pb-2">
        {icon && (
          <div
            className={
              "mr-2 text-xl rounded-full p-2 text-white " + theme.primary.bgIcon
            }
          >
            <DispalyField type={InputFieldType.ICON_FIELD} value={icon} />
          </div>
        )}
        <div className={"text-xl font-bold " + theme.color2}>
          <DispalyField value={heading} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
