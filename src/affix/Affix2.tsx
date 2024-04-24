import React, { ReactNode, CSSProperties, useCallback, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface affixProps extends React.HTMLAttributes<HTMLDivElement> {
    offsetTop?: number;
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

const Affix2 = (props: affixProps) => {
    const { className, children, style, offsetTop = 0, ...others } = props;
    const [wraperStyle, setWrapperStyle] = useState<CSSProperties | null>(null);
    const [affixed, setAffixed] = useState(false);

    const wraperRef = useRef<HTMLDivElement | null>(null);
    const fixedRef = useRef<HTMLDivElement | null>(null);

    function updatePosition() {
        const wraperNode  = wraperRef.current;
        if(!wraperNode){
            return;
        }
        const { top, width, height } = wraperNode.getBoundingClientRect();

        if (top <= offsetTop && !affixed) {
            setWrapperStyle({
                width,
                height
            });
            setAffixed(true);
        } else if (top > offsetTop) {
            setAffixed(false);
        }
    }

    useEffect(() => {
        const wraperNode = wraperRef.current;
        if (!wraperNode) {
            return;
        }

        window.addEventListener('scroll', updatePosition, false)
        return () => {
            window.removeEventListener('scroll', updatePosition, false)
        }
    }, [wraperRef])

    const cls = classNames({
        'ant-affix': affixed,
        [className as string]: !!className
    })
    return (
        <div ref={wraperRef}>
            {affixed && wraperStyle ? <div style={wraperStyle} /> : null}
            <div style={affixed ? {
                top: offsetTop,
                ...wraperStyle,
            } : undefined} ref={fixedRef} className={cls}>
                {children}
            </div>
        </div>
    );
}

export default Affix2;