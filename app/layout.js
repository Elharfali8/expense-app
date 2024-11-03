
import "./globals.css";



export const metadata = {
  title: "TheMoneyPath",
  description: "personal journey towards financial organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
