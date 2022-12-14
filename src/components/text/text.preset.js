import { colors } from "../../theme/color";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

const BASE = {
  fontFamily: typography.regular,
  fontSize: spacing[4],
  color: colors.white,
};

const BASE_BOLD = {
  ...BASE,
  fontFamily: typography.bold,
};

export const presets = {
  default: BASE,
  bold: BASE_BOLD,
  h1: {
    ...BASE_BOLD,
    fontSize: spacing[9],
  },
  h2: {
    ...BASE_BOLD,
    fontSize: spacing[8],
  },
  h3: {
    ...BASE_BOLD,
    fontSize: spacing[7],
  },
  h4: {
    ...BASE_BOLD,
    fontSize: spacing[6],
  },
  p: {
    ...BASE,
    fontSize: spacing[5],
  },
  small: {
    ...BASE,
    fontSize: spacing[4],
  },
};
