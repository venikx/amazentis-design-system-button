import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import Button, { type IButtonProps } from './Button';

export default {
  title: 'Inputs/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  children,
  ...args
}: IButtonProps) => <Button {...args}>{children}</Button>;

export const Default = Template.bind({});
Default.args = {
  children: 'Primary Button',
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 96px;
`;

const AllTemplate: ComponentStory<typeof Button> = () => (
  <Container>
    <Button>Primary Button</Button>
    <Button variant="outline">Secondary Button</Button>
    <Button variant="ghost">Tertiary Button</Button>
    <Button isDisabled>Primary Button</Button>
    <Button isDisabled variant="outline">
      Secondary Button
    </Button>
    <Button isDisabled variant="ghost">
      Tertiary Button
    </Button>
    <Button>
      Very Long Button With a Loads of Content That is Really Long Actually
    </Button>
    <Button>
      Another Very Long Button With a Loads of Content That is Really Long
      Actually
    </Button>
  </Container>
);

export const AllButtons = AllTemplate.bind({});
