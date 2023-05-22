import {ClassValue, clsx} from 'clsx';
import { twMerge } from 'tailwind-merge';

// export function obsoluteUrl(path: string) {
    //     return `${pro}`
    // }
    

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs));
}