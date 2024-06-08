const Inter = {
  medium: require("../assets/fonts/Inter-Medium.ttf"),
  semiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
  bold: require("../assets/fonts/Inter-Bold.ttf"),
};

type Font = {
  type: NodeRequire;
  size: number;
  lineHeight: number;
};

// TODO: auto line height means what? I made line height equal to size where auto was specified (Sonya)
export const Fonts: Record<string, Font> = {
  tiny: {
    type: Inter.medium,
    size: 12,
    lineHeight: 12,
  },
  small: {
    type: Inter.medium,
    size: 13,
    lineHeight: 16,
  },
  body3: {
    type: Inter.medium,
    size: 14,
    lineHeight: 18,
  },
  body2: {
    type: Inter.semiBold,
    size: 16,
    lineHeight: 16,
  },
  body1: {
    type: Inter.medium,
    size: 16,
    lineHeight: 16,
  },
  title3: {
    type: Inter.semiBold,
    size: 18,
    lineHeight: 18,
  },
  title2: {
    type: Inter.semiBold,
    size: 24,
    lineHeight: 24,
  },
  title1: {
    type: Inter.bold,
    size: 32,
    lineHeight: 39,
  },
  titleX: {
    type: Inter.bold,
    size: 64,
    lineHeight: 80,
  },
};
