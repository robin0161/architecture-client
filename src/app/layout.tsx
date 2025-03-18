import "@/index.css";
import { TempoDevtools } from "tempo-devtools";

export const metadata = {
  title: "Modern Architects",
  description:
    "Creating spaces that inspire and transform the way people live.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize Tempo Devtools
  if (typeof window !== "undefined") {
    TempoDevtools.init();
  }

  return (
    <html lang="en">
      <body>
        {children}
        <script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js"></script>
      </body>
    </html>
  );
}
