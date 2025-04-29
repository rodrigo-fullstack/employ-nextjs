import '@/app/general.css';
import { primaryFont } from "./fonts.js";

export default function RootLayout({children}){
    return(
        <html lang="pt-br">
            <head>
                <link rel="icon" href="./favicon.ico" />
            </head>
            
            <body className={primaryFont.className}>
                {children}
            </body>
        </html>
    )
}