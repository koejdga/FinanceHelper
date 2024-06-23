import { base } from "@/app/constants/Colors";
import { Category } from "@/app/utils/Interfaces";
import { View } from "react-native";

type Props = {
  category: Category;
};

const ProgressBar: React.FC<Props> = ({ category }) => {
  const getProgressBarColor = (progress: number) => {
    if (progress < 0) {
      console.log("ERROR: wrong progress provided");
      return "violet";
    }

    if (progress < 0.1) return "green";
    if (progress < 0.3) return "lightgreen";
    if (progress < 0.5) return "gold";
    if (progress < 0.7) return "orange";
    if (progress <= 1) return "tomato";
    if (progress > 1) return "red";
  };

  return (
    <View
      style={{
        height: 15,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: base.light.light40,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <View
        style={{
          width: `${category.percentageSpent * 100}%`,
          backgroundColor: getProgressBarColor(category.percentageSpent),
          height: "100%",
        }}
      ></View>
    </View>
  );
};

export default ProgressBar;
