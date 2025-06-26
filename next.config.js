/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出，适合 Cloudflare Pages
  output: 'export',
  
  // 禁用图片优化（Cloudflare Pages 不支持）
  images: {
    unoptimized: true,
  },
  
  // 设置基础路径（如果需要）
  // basePath: '',
  
  // 设置资源前缀（如果需要）
  // assetPrefix: '',
  
  // 禁用服务端功能，因为静态导出不支持
  trailingSlash: true,
}

module.exports = nextConfig 