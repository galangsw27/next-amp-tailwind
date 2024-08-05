// next.config.js

module.exports = {
    // Menambahkan aturan untuk pengalihan atau rewrites jika diperlukan
    async redirects() {
      return [
        // Anda dapat menambahkan aturan pengalihan di sini jika diperlukan
      ];
    },
  
    async rewrites() {
      return [
        // Contoh: Menulis ulang URL ke API route jika diperlukan
        {
          source: '/api/redirect',
          destination: '/api/redirect', // Menentukan destinasi yang sama atau yang diinginkan
        },
      ];
    },
  
    // Jika Anda menggunakan environment variables, Anda bisa menambahkannya di sini
    env: {
      // Contoh:
      // API_KEY: process.env.API_KEY,
    },
  
    // Opsi lain yang mungkin Anda perlukan
    // Opsi webpack, compressi, dan lainnya dapat ditambahkan sesuai kebutuhan
    webpack: (config, { dev }) => {
      // Modifikasi konfigurasi webpack jika diperlukan
      return config;
    },
  };
  