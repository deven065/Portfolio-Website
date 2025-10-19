---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---
## Usage

Once the development server is running, you can:

- Explore the homepage and animated hero section
- Browse featured and all projects
- Read blog articles
- View skills and experience
- Use the contact form to send a message (email integration required)

---

## Customization

You can easily customize this portfolio:

- **Update content:** Edit files in `src/app/Components` to change text, images, and sections.
- **Add projects:** Update the project arrays in `FeaturedProjects.tsx` and `AllProjects.tsx`.
- **Change theme:** Modify Tailwind CSS classes or update `globals.css` for branding.
- **SEO:** Edit `metadata` in `layout.tsx` for title and description.
- **Contact:** Configure `/api/sendEmail` for your email provider.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
<div align="center">
  <h1>Dev.Folio – Professional Portfolio Website</h1>
  <p>A modern, responsive portfolio built with Next.js and Tailwind CSS.</p>
  <a href="https://www.devsportfolio.online" target="_blank"><b>View Live &rarr;</b></a>
</div>

---

## Overview

This project is a feature-rich, production-ready portfolio website designed to showcase your skills, projects, and experience. Built with the latest web technologies, it offers a seamless user experience, clean codebase, and easy deployment.

## Features

- Modern, responsive design
- Animated hero section and smooth navigation
- Project and blog showcase
- Contact form with email integration
- SEO optimized and ready for deployment

## Getting Started

Follow these steps to set up and run this portfolio website locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
	```bash
	git clone https://github.com/deven065/Portfolio-Website.git
	cd Portfolio-Website
	```

2. **Install dependencies:**
	```bash
	npm install
	```

3. **Start the development server:**
	```bash
	npm run dev
	```

4. **Open your browser and visit:**
	```
	http://localhost:3000
	```

### Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

### Deployment

This project is ready to deploy on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

For Vercel:
1. Connect your GitHub repository to Vercel.
2. Set the root directory if prompted.
3. Deploy with default settings.
4. After deployment, your site will be live at your Vercel domain or your custom domain.

#### Live Example

You can view the deployed portfolio at: [www.devsportfolio.online](https://www.devsportfolio.online)

---

## Support

If you need further customization or encounter any issues, please open an issue or contact the maintainer.
## Getting Started

Follow these steps to set up and run this portfolio website locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
	```bash
	git clone https://github.com/deven065/Portfolio-Website.git
	cd Portfolio-Website
	```

2. **Install dependencies:**
	```bash
	npm install
	```

3. **Start the development server:**
	```bash
	npm run dev
	```

4. **Open your browser and visit:**
	```
	http://localhost:3000
	```

### Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

### Deployment

This project is ready to deploy on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
For Vercel, simply connect your GitHub repository and follow the prompts.

---

**If you need further customization or run into issues, please open an issue or contact the maintainer.**
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
