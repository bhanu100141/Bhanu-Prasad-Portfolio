# Bhanu Prasad Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark mode support
- Smooth scrolling navigation
- Sections: Hero, About, Skills, Projects, Contact
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Optimized for performance

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Ready for Vercel, Netlify, or GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bhanu100141/Bhanu-Prasad-Portfolio.git
cd Bhanu-Prasad-Portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. Edit `components/Hero.tsx` to update your name and title
2. Edit `components/About.tsx` to add your bio
3. Edit `components/Skills.tsx` to add your skills
4. Edit `components/Projects.tsx` to showcase your projects
5. Edit `components/Contact.tsx` to add your social links and email

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Colors and themes can be customized in both files

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to GitHub Pages

The project is configured with `output: 'export'` in `next.config.js` for static export:

```bash
npm run build
```

The static files will be in the `out` folder, ready for deployment.

## License

MIT

## Contact

- GitHub: [@bhanu100141](https://github.com/bhanu100141)
- Portfolio: [Your Live URL]

---

Built with Next.js and Tailwind CSS
