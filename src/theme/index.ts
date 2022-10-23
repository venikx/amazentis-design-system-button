import colors from './colors';
import radii from './radius';
import space from './space';
import { typography } from './typography';

const Theme = {
  radii,
  colors,
  ...typography,
  space,
} as const;

export type ThemeType = typeof Theme;
export default Theme;
