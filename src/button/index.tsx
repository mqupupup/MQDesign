import React, {ReactNode} from 'react';
import classNames from 'classnames';

import './index.scss';

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
  className ?: string;
  type ?: 'normal' | 'primary' |'text'|'link'|'dashed';
  size ?: 'small' | 'medium' | 'large';
  children ?: ReactNode;
  style ?: React.CSSProperties;
  onClick ?: React.MouseEventHandler;
  onBlur ?: React.FocusEventHandler;
};
const Button =  (props:buttonProps) => {
  const {className, type = 'normal', size = "medium", children,style
  ,onClick,onBlur,...others} = props;
  const clc = classNames({
    'ant-btn':true,
    [`ant-btn-${type}`]: type,
    [`ant-btn-${size}`]: size,
    [className as string]: !!className,
  })
  return <button {...others} className={clc} style={style} onClick={onClick} onBlur={onBlur}>{props.children}</button>

}
export default Button;
