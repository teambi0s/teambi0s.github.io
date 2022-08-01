export {};

declare module '@emotion/react' {
    export interface Theme {
        isDarkTheme?: boolean,
        text: string
        background: string
    }
}