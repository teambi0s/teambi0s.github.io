export {};

declare module '@emotion/react' {
    export interface Theme {
        isDarkTheme?: boolean,
        primary: string
        primaryTextColor: string
        secondary: string
        secondaryTextColor: string
        color: string
        background: string
        backgroundDark: string,
        fontFamily: string
    }
}