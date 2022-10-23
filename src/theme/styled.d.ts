import 'styled-components';
import { type ThemeType } from '.';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}
