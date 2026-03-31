import "./globals.css";
import SoundManager from "./components/SoundManager";

export const metadata = {
  title: "SOCU — Beyond the Spray & Pray",
  description:
    "A natural space connecting authentic micro and nano influencers with brands. Float above the noise.",
  openGraph: {
    title: "SOCU — Beyond the Spray & Pray",
    description:
      "A natural space connecting authentic micro and nano influencers with brands. Float above the noise.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOCU — Beyond the Spray & Pray",
    description:
      "A natural space connecting authentic micro and nano influencers with brands.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundManager />
        {children}
      </body>
    </html>
  );
}
