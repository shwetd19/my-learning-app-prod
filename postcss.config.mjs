// /** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: {
//     tailwindcss: {},
//   },
// };

// export default config;


// postcss.config.mjs
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: {
    'autoprefixer': {}, // Correct usage
    'postcss-nested': {},
    tailwindcss: {}, // Ensure tailwindcss is defined correctly
  },
};
