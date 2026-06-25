import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // 리엑트 자체 설정아이콘 숨김 
devIndicators : false , 

// 백엔드 연결 
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/api/:path*",
      },
    ];
  },
};

export default nextConfig;