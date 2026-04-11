import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Psicoterapia online en Argentina | Ansiedad, vínculos y malestar emocional",
  description:
    "Psicoterapia online para adultos. Trabajo clínico con enfoque integrador orientado a ansiedad, vínculos y malestar emocional. Atención en Argentina y para argentinos en el exterior.",

  keywords: [
    "psicólogo online Argentina",
    "psicoterapia online",
    "terapia ansiedad",
    "psicólogo ansiedad Argentina",
    "terapia online español",
    "psicólogo argentino en el exterior",
  ],

  authors: [{ name: "Guillermo Williams" }],

  openGraph: {
    title: "Psicoterapia online en Argentina",
    description:
      "Atención psicológica online con enfoque clínico integrador. Ansiedad, vínculos y malestar emocional.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}