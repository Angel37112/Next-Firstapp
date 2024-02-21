import "./globals.css";

export const metadata = {
  title: "Firstapp",
  description: "Esta es mi primer pagina en Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
