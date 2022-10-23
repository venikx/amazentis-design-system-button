import React from 'react';
import { AriaButtonProps, useButton } from '@react-aria/button';
import { useObjectRef } from '@react-aria/utils';
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

// TODO(Kevin): hover state
const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  padding: 0;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.radii.base};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.sm};

  line-height: ${(props) => props.theme.lineHeights.tight};
  letter-spacing: ${(props) => props.theme.letterSpacings.wider};
  padding: ${(props) => `${props.theme.space.xs} ${props.theme.space.m}`};
  text-transform: uppercase;

  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  ${(props) => variants[props.variant]}

  :disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.colors.blackAlpha[500]};
  }

  :hover {
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
export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      variant = 'solid',
      size = 'md',
      fullWidth = false,
      className,
      ...props
    }: IButtonProps,
    ref,
  ) => {
    const buttonRef = useObjectRef(ref);
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
  },
);
