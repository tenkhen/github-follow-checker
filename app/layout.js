import "./globals.css";

export const metadata = {
  title: "GitHub Follow Checker",
  description: "Compares GitHub followers vs followings and shows statistics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
