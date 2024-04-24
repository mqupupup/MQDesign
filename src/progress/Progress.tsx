import React, { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface progressProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    type?: 'line' | 'circle';
    percent?: number;
    size?: 'small' | 'medium' | 'large';
    status?: 'active' | 'exception'
    children?: ReactNode;
    style?: CSSProperties;
}

const Progress = (props: progressProps) => {
    const { className, percent = 0, status, type = 'line', children, style, ...others } = props;

    let processColor = '#1890ff';
    if (status === 'exception') {
        processColor = '#ff4d4f';
    }

    if (type === 'circle') {
        const diameter = 200; // 圆圈直径
        const borderWidth = 20; // 圆环宽度
        const radius = (diameter - borderWidth) / 2; // 圆环半径
        const circumference = 2 * Math.PI * radius; // 圆环周长

        let DashOffset = circumference * (1 - percent / 100);

        return (
            <div style={{
                width: diameter,
                height: diameter,
                position: 'relative'
            }}>
                <svg
                    width={diameter}
                    height={diameter}
                    viewBox={`0 0 ${diameter} ${diameter}`}
                    className="circle-svg"
                >
                    <circle
                        cx={diameter / 2}
                        cy={diameter / 2}
                        r={radius}
                        fill="none"
                        stroke="#f5f5f5"
                        strokeWidth={borderWidth}
                    />
                    <circle
                        cx={diameter / 2}
                        cy={diameter / 2}
                        r={radius}
                        fill="none"
                        stroke={processColor}
                        strokeWidth={borderWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={DashOffset}
                        strokeLinecap="round"
                        transform={`rotate(-90 ${diameter / 2} ${diameter / 2})`}
                    />
                </svg>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: processColor,
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>{percent}%</div>
            </div>
        );
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 8
        }}>
            {/* line进度条*/}
            <div style={{ background: '#0000000a', borderRadius: 100, width: '100%' }}>
                <div style={{
                    background: processColor, width: `${percent}%`, height: 8,
                    borderRadius: 100,
                    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
                }} />
            </div>
            <div>{percent}%</div>
        </div >)
}

export default Progress;