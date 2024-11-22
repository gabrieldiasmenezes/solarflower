// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Rota de origem no front-end
        destination: 'http://localhost:8080/:path*', // Rota de destino no back-end
      },
    ];
  },
};

export default nextConfig;
