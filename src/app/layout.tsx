import Pretendard from "@/style/base/font/PretendardVariable.woff2";
import "@/style/base/global/index.css";

import { Header, Provider } from "@/components/common";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preload" href={Pretendard} as="Pretendard" type="font/woff2" />
        <meta content="BSM.GG - 부산소마고 교내 전적검색 플랫폼" name="title" />
        <meta content="2기 학생 김준경 & 김민석의 작품" name="description" />
        <meta content="BSM.GG - 부산소마고 교내 전적검색 플랫폼" name="og:title" />
        <meta content="2기 학생 김준경 & 김민석의 작품" name="og:description" />
        <meta content="googlebot" name="robots" />
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
