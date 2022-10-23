# Amazentis frontend challenge

## My Notes

I tried finding a use on the site for the accessible button, but it seems that
chakra-ui handles the mobile gestures properly. Handling all the interactions
isn't easy as by default the behaviors on mobile and desktop browsers aren't the
same. See: https://react-spectrum.adobe.com/blog/building-a-button-part-1.html

So, aside from your requirements I opted to create the Button as accessible as
possible using one extra library `react-aria`. I try to think about
accessibility as much as I can and the library bundles everything neatly in a
hook.

### Findings

It really shows that once you have a solid theme setup, that the
styled-components API loses a lot of it's strengths and brings quite a bit of
indirection.

### Can I see this live somewhere?

Hell yes! https://amazentis-design-system-button.vercel.app

## Requirements

Please create a new `Button` component based on the designs in [Figma](https://www.figma.com/file/CJcS0dBmb2iUnXndbTHseG/Coding-Challenge?node-id=0%3A1). The component should live in the folder `src/components/Button` and all variants and interactions of the component should be viewable in storybook.

A basic theme has been provided, please use this where possible and feel free to add/edit it if needed.

## Tech stack

- React
- TypeScript
- Styled components
- Storybook

## Available Scripts

### `yarn`

Runs yarn to install the project dependencies

### `yarn start`

Runs storybook in development mode

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `yarn build`

Builds storybook for production to the `build` folder.

### `yarn lint`

Runs eslint to check for lint errors and warnings and auto fixes anything possible.
