import "./globals.css";

export const metadata = {
  title: "SOCU — Beyond the Spray & Pray",
  description:
    "A natural space connecting authentic micro and nano influencers with brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
