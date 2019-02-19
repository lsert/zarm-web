import { ButtonHTMLAttributes, MouseEvent, CSSProperties, AnchorHTMLAttributes } from 'react';
export type theme = 'default' | 'info' | 'success' | 'warning' | 'error';
export type size = 'xl' | 'lg' | 'sm' | 'xs';

export interface BasicPropsType {
  prefixCls?: string;
  type?: string;
  theme?: theme;
  size?: size;
  isBlock?: boolean;
  block?: boolean;
  isRadius?: boolean;
  radius?: boolean;
  isRound?: boolean;
  round?: boolean;
  isCircle?: boolean;
  circle?: boolean;
  isActive?: boolean;
  active?: boolean;
  isFocus?: boolean;
  focus?: boolean;
  isDisabled?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  loading?: boolean;
}

interface ButtonTypeIF {
  link: AnchorHTMLAttributes<HTMLAnchorElement>;
  button: AnchorHTMLAttributes<HTMLAnchorElement>;
}

type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & BasicPropsType;

export default PropsType;
