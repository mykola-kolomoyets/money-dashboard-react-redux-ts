import { DetailedHTMLProps, HTMLAttributes } from "react";

export type MenuItem = {
    label: string;
    to: string;
    Icon?: any;
};

export type Detailed<T> = DetailedHTMLProps<HTMLAttributes<T>, T>