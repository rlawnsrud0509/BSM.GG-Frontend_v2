import Header from "@/components/common/header";
import Provider from "@/components/common/provider";
import Pretendard from "@/style/base/font/PretendardVariable.woff2";
import "@/style/base/global/index.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preload" href={Pretendard} as="Pretendard" type="font/woff2" />
      </head>
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
