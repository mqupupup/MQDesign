import React, { ReactNode, CSSProperties, useCallback, useState } from 'react';
import classNames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';

import './index.scss';

export interface affixProps extends React.HTMLAttributes<HTMLDivElement> {
    offsetTop?: number;
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

const Affix = (props: affixProps) => {
    const { className, children, style, offsetTop = 0, ...others } = props;
    const [wraperStyle, setWrapperStyle] = useState<CSSProperties | null>(null);
    const [affixed, setAffixed] = useState(false);

    const wraperRefCB = useCallback((node: HTMLElement | null) => {
        if (!node) return;
        function updatePosition() {
            const boundingBox = node?.getBoundingClientRect();
            if(!boundingBox)return;
            const { top, width, height } = boundingBox;
            if (top <= offsetTop && !affixed ||
                (affixed  &&
                    (wraperStyle && (width !== wraperStyle.width)) || (wraperStyle && height !== wraperStyle.height))) {
                setWrapperStyle({
                    width,
                    height
                });
                setAffixed(true);
            } else if (top > offsetTop) {
                setAffixed(false);
            }
        }
        window.addEventListener('scroll', updatePosition, false);

        const ob = new ResizeObserver(updatePosition);
        ob.observe(node as Element);

    }, [])
    const cls = classNames({
        'ant-affix': true,
        [className as string]: !!className
    })
    return (
        <div ref={wraperRefCB}>
        {affixed && wraperStyle ? <div style={wraperStyle} /> : null}
        <div style={affixed ? {
            position: 'fixed',
            top: offsetTop,
            ...wraperStyle
        } : undefined}>
            {children}
        </div>
    </div>);
}

export default Affix;