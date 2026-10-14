import React from "react";
import "../components/arc/foundation.css";
import "./globals.css";
export const metadata={title:"Motion Studio",description:"Record and edit cinematic demos of local web applications"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr" data-theme="dark" data-accent="neutral"><body>{children}</body></html>}
