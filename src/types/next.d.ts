// Declaration file for Next.js modules
declare module 'next' {
  export interface Metadata {
    title?: string;
    description?: string;
    [key: string]: any;
  }
}

declare module 'next/link' {
  import { LinkProps as NextLinkProps } from 'next/dist/client/link';
  import { PropsWithChildren } from 'react';
  
  export type LinkProps = PropsWithChildren<NextLinkProps>;
  export default function Link(props: LinkProps): JSX.Element;
}

declare module 'next/navigation' {
  export function useServerInsertedHTML(callback: () => React.ReactNode): void;
  export function usePathname(): string;
  export function useRouter(): {
    push: (url: string) => void;
    replace: (url: string) => void;
    back: () => void;
    forward: () => void;
    refresh: () => void;
    prefetch: (url: string) => Promise<void>;
  };
  export function useSearchParams(): URLSearchParams;
}

declare module 'next/server' {
  export class NextResponse extends Response {
    static json(body: any, init?: ResponseInit): NextResponse;
    static redirect(url: string, init?: ResponseInit): NextResponse;
    static rewrite(url: string, init?: ResponseInit): NextResponse;
    static next(init?: ResponseInit): NextResponse;
  }
} 