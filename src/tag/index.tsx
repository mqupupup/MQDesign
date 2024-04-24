import React, {useState} from 'react';
import classNames from 'classnames';

import './index.scss';
import Icon from "../icon";

export interface tagProps extends React.HTMLAttributes<HTMLButtonElement>{
  className ?: string;
  closable ?: boolean;
  color ?: string;
  visible ?: boolean;
  onClose ?: Function;
  size ?: number;
};

const Tag =  (props:tagProps) => {
  const {
    className,
    children,
    closable,
    style: pstyle,
    color,
    onClose,
    ...others} = props;

  const [visible,setVisible] = useState<boolean>(true) ;

  React.useEffect(() => {
    if('visible' in props && typeof props.visible !== 'undefined'){
      setVisible(props.visible)
    }
  },[props.visible])

  const customColor = color && color.match(/^#/);

  const cls = classNames({
    'ant-tag':true,
    [`ant-tag-${color}`]: color && !customColor,
    [className as string]: !!className,
  })

  const style:React.CSSProperties = {...pstyle};
  if(customColor) {
    style.background = color;
  }

  const handleClick = (e:React.MouseEvent<HTMLElement>) => {
    onClose?.(e)
    if(e.defaultPrevented){
      return;
    }
    if(!('visible' in props)){
      setVisible(false);
    }
  }
  if(!visible)return null;

  return (
      <span {...others} className={cls} style={style} >
        {children}
        {closable ?  <Icon
            type={'close'}
            size={10}
            style={{verticalAlign:"text-top"}}
            onClick={handleClick}
        />:null }
      </span>
  )
}
export default Tag;
