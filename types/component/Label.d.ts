import React, { ReactNode, ReactElement, SVGProps } from 'react';
import { ViewBox } from '../util/types';
export declare type ContentType = ReactElement | ((props: Props) => ReactNode);
interface LabelProps {
    viewBox?: ViewBox;
    parentViewBox?: ViewBox;
    formatter?: Function;
    value?: number | string;
    offset?: number;
    position?: 'top' | 'left' | 'right' | 'bottom' | 'inside' | 'outside' | 'insideLeft' | 'insideRight' | 'insideTop' | 'insideBottom' | 'insideTopLeft' | 'insideBottomLeft' | 'insideTopRight' | 'insideBottomRight' | 'insideStart' | 'insideEnd' | 'end' | 'center' | 'centerTop' | 'centerBottom' | 'middle' | {
        x?: number;
        y?: number;
    };
    children?: ReactNode;
    className?: string;
    content?: ContentType;
    textBreakAll?: boolean;
    angle?: number;
}
export declare type Props = Omit<SVGProps<SVGTextElement>, 'viewBox'> & LabelProps;
export declare type ImplicitLabelType = boolean | string | number | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | Props;
export declare function Label(props: Props): JSX.Element;
export declare namespace Label {
    var displayName: string;
    var defaultProps: {
        offset: number;
    };
    var parseViewBox: (props: any) => ViewBox;
    var renderCallByParent: (parentProps: {
        children?: React.ReactNode;
        label?: unknown;
    }, viewBox?: ViewBox, checkPropsLabel?: boolean) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any>) | (new (props: any) => React.Component<any, any, any>)>[];
}
export {};
