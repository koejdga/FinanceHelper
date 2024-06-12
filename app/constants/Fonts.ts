enum FontsEnum {
  MEDIUM = "Inter-Medium",
  SEMIBOLD = "Inter-SemiBold",
  BOLD = "Inter-Bold",
}

export enum FontNames {
  TINY,
  SMALL,
  BODY_3,
  BODY_2,
  BODY_1,
  TITLE_3,
  TITLE_2,
  TITLE_1,
  TITLE_X,
}

type Font = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
};

// TODO: auto line height means what? I made line height equal to size where auto was specified (Sonya)
export const Fonts: Record<FontNames, Font> = {
  [FontNames.TINY]: {
    fontFamily: FontsEnum.MEDIUM,
    fontSize: 12,
    lineHeight: 12,
  },
  [FontNames.SMALL]: {
    fontFamily: FontsEnum.MEDIUM,
    fontSize: 13,
    lineHeight: 16,
  },
  [FontNames.BODY_3]: {
    fontFamily: FontsEnum.MEDIUM,
    fontSize: 14,
    lineHeight: 18,
  },
  [FontNames.BODY_2]: {
    fontFamily: FontsEnum.SEMIBOLD,
    fontSize: 16,
    lineHeight: 19.36,
  },
  [FontNames.BODY_1]: {
    fontFamily: FontsEnum.MEDIUM,
    fontSize: 16,
    lineHeight: 19.36,
  },
  [FontNames.TITLE_3]: {
    fontFamily: FontsEnum.SEMIBOLD,
    fontSize: 18,
    lineHeight: 21.78,
  },
  [FontNames.TITLE_2]: {
    fontFamily: FontsEnum.SEMIBOLD,
    fontSize: 24,
    lineHeight: 29,
  },
  [FontNames.TITLE_1]: {
    fontFamily: FontsEnum.BOLD,
    fontSize: 32,
    lineHeight: 39,
  },
  [FontNames.TITLE_X]: {
    fontFamily: FontsEnum.BOLD,
    fontSize: 64,
    lineHeight: 80,
  },
};
