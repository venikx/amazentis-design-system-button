import { ThemeProvider } from "styled-components";
import theme from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withTheme = (StoryFn) => {
  return (
    <ThemeProvider theme={theme}>
      <div id="story-wrapper">
        <StoryFn />
      </div>
    </ThemeProvider>
  );
};

export const decorators = [withTheme];
