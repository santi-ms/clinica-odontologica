/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Si usás imágenes REMOTAS, agregá sus dominios aquí:
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
    ],
    // Si usás SVG con <Image/>, lo podés mantener:
    dangerouslyAllowSVG: true,

    // ⚠️ Quitamos esto: podía forzar descarga y romper el render
    // contentDispositionType: 'attachment',
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // No pongas output: 'export' salvo que sea a propósito.
};

module.exports = nextConfig;
