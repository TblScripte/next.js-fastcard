// next.config.js или next.config.ts

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ['store-api.softclub.tj'], 
  },
};

export default withNextIntl(nextConfig);
