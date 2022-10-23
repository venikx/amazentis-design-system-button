import React, { useRef } from 'react';
import { AriaButtonProps, useButton } from '@react-aria/button';
import styled, { css } from 'styled-components';
import { IStyleProps } from 'types';

type SizeOptions = 'md' | 'lg';
type VariantOptions = 'outline' | 'solid' | 'ghost';
export interface IButtonProps extends AriaButtonProps, IStyleProps {
  /**
   * The variant changes the overal styling of the button.
   * @default 'solid'
   */
  variant?: VariantOptions;
  /** The size applied to the icon.
   * @default 'medium'
   */
  size?: SizeOptions;
  /**
   * If true, the Button assumes the full length of the parent container. */
  fullWidth?: boolean;
}

type StyledButtonProps = Required<
Pick<IButtonProps, 'size' | 'fullWidth' | 'variant'>
> & { isPressed?: boolean };

const solidStyle = css<StyledButtonProps>`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => (props.isPressed
    ? props.theme.colors.blackAlpha[800]
    : props.theme.colors.blackAlpha[900])};

  :disabled {
    background-color: ${(props) => props.theme.colors.blackAlpha[200]};
  }
`;
const outlineStyle = css<StyledButtonProps>`
  padding: ${({ theme: { space } }) => `calc(${space.xs} - 1px) calc(${space.m} - 1px)`};
  color: ${(props) => props.theme.colors.blackAlpha[900]};
  border: 1px solid currentcolor;
  background-color: ${(props) => (props.isPressed
    ? props.theme.colors.blackAlpha[200]
    : props.theme.colors.transparent)};

  :disabled {
    border: 1px solid ${(props) => props.theme.colors.blackAlpha[300]};
  }
`;
const ghostStyle = css<StyledButtonProps>`
  color: ${(props) => (props.isPressed
    ? props.theme.colors.blackAlpha[700]
    : props.theme.colors.blackAlpha[900])};
  background-color: transparent;
`;
const variants = {
  solid: solidStyle,
  outline: outlineStyle,
  ghost: ghostStyle,
} as const;

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.radii.base};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.sm};

  line-height: ${(props) => props.theme.lineHeights.normal};
  letter-spacing: ${(props) => props.theme.letterSpacings.wider};
  padding: ${({ theme: { space } }) => `${space.xs} ${space.m}`};
  text-transform: uppercase;

  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  ${(props) => variants[props.variant]}

  :disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.colors.blackAlpha[500]};
  }

  transition: all 0.2s linear 0s;

  :hover:not([disabled]) {
    padding: ${({ theme: { space } }) => `${space.xs} ${space.sm} ${space.xs} calc(${space.m} + (${space.m} - ${space.sm}))`};
  }

  ::before {
    content: ">";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 17px;
    left: 28px;
    transform: scale(0, 1);
    transform-origin: left center;
    transition: all 0.2s linear 0s;
    font-size: ${(props) => props.theme.fontSizes.md};
  }

  :hover:not([disabled])::before {
    transform: scale(1, 1);
  }
`;

/**
 * The Buttons communicate intend. They are typically, but not exclusively used
 * in:
 * - Dialogs
 * - Forms
 *
 * The text is derivated from the comments inside the
 * code as part of the component. In case there's more finegrained control over
 * how you wish to document the components it's usually better to write them in
 * mdx.
 */
const Button = ({
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: IButtonProps) => {
  const buttonRef = useRef();
  const { buttonProps, isPressed } = useButton(props, buttonRef);
  const { children } = props;
  const defaultProps = {
    isPressed,
    variant,
    size,
    fullWidth,
    className,
  };

  return (
    <StyledButton {...buttonProps} {...defaultProps} ref={buttonRef}>
      {children}
    </StyledButton>
  );
};

export default Button;
