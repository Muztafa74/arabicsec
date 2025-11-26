import type { Metadata } from "next";
import "./globals.css";
import "./suppress-hydration";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "ArabicSec | منصة الأمن السيبراني التعليمية",
  description: "منصة تعليمية عربية متكاملة لتعلم الأمن السيبراني بالذكاء الاصطناعي | Arabic-first cybersecurity education platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Suppress hydration warnings from browser extensions */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var originalError = console.error;
                console.error = function() {
                  var args = Array.prototype.slice.call(arguments);
                  if (args[0] && typeof args[0] === 'string') {
                    if (
                      args[0].indexOf('Hydration') !== -1 ||
                      args[0].indexOf('hydration') !== -1 ||
                      args[0].indexOf('bis_skin_checked') !== -1 ||
                      args[0].indexOf('bis_register') !== -1
                    ) {
                      return;
                    }
                  }
                  originalError.apply(console, args);
                };
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-arabic" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

