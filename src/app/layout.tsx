import Header from "@/components/common/header";
import Provider from "@/components/common/provider";
import "@/style/base/global/index.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Provider>
          <Header />
          {children}
        </Provider> 
      </body>
    </html>
  );
}
