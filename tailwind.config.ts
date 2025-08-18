import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					hover: 'hsl(var(--accent-hover))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Premium Brand Colors
				'premium-black': 'hsl(var(--premium-black))',
				'dark-navy': 'hsl(var(--dark-navy))',
				'gold-accent': 'hsl(var(--gold-accent))',
				'gold-light': 'hsl(var(--gold-light))',
				'gold-dark': 'hsl(var(--gold-dark))'
			},
			fontFamily: {
				display: ['Playfair Display', 'serif'],
				body: ['Inter', 'sans-serif'],
				arabic: ['Amiri', 'serif']
			},
			fontSize: {
				'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }]
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'112': '28rem',
				'128': '32rem'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-navy': 'var(--gradient-navy)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'premium': 'var(--shadow-premium)',
				'gold': 'var(--shadow-gold)',
				'elegant': 'var(--shadow-elegant)',
				'card': 'var(--shadow-card)'
			},
			animation: {
				'fade-in': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'counter': 'counter 2s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
			},
			keyframes: {
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					from: { opacity: '0', transform: 'translateY(40px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.9)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'slide-in-left': {
					from: { opacity: '0', transform: 'translateX(-40px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					from: { opacity: '0', transform: 'translateX(40px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%': { boxShadow: '0 0 20px hsl(43 76% 53% / 0.2)' },
					'100%': { boxShadow: '0 0 40px hsl(43 76% 53% / 0.4)' }
				},
				'counter': {
					from: { opacity: '0', transform: 'scale(0.8)' },
					to: { opacity: '1', transform: 'scale(1)' }
				}
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;