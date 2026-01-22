/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'Georgia', 'serif'],
            },
            colors: {
                brand: {
                    black: '#242424',
                    grey: '#757575',
                    light: '#F2F2F2',
                    accent: '#1A8917'
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
