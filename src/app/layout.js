import "../../styles/Globals.css";
export const metadata = {
  title: "Valorant Guide",
  description: "Guia de personagens do valorant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body>{children}</body>
    </html>
  );
}
