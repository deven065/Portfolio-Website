# Deven Digital Labs - Portfolio Website

A modern, full-stack portfolio website built with React, Vite, and Express. Features include a contact form with email integration, invoice management system, payment gateway integration, and comprehensive SEO optimization.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

## 🌟 Features

### Core Functionality
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Contact Form** - Integrated email functionality using Nodemailer
- **Invoice Management** - Generate and track invoices with unique IDs
- **Payment Integration** - Razorpay payment gateway for online payments
- **Dark Mode Ready** - Built with dark theme support

### SEO & Performance
- **Agency-Level SEO** - Comprehensive meta tags, Open Graph, Twitter Cards
- **Structured Data** - Schema.org markup (Organization, Service, WebPage, BreadcrumbList)
- **XML Sitemap** - Auto-generated sitemap for search engines
- **Optimized robots.txt** - Proper crawling directives
- **PWA Support** - Progressive Web App with manifest and service worker
- **Performance Optimized** - Lazy loading, code splitting, and caching strategies

### Developer Experience
- **TypeScript** - Full type safety
- **ESLint & Prettier** - Code quality and formatting
- **Hot Module Replacement** - Fast development with Vite
- **Component Library** - Pre-built UI components with Radix UI
- **Tailwind CSS** - Utility-first CSS framework

## 🚀 Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 7.1.2** - Build tool and dev server
- **TypeScript 5.9.2** - Type safety
- **Tailwind CSS 3.4.17** - Styling
- **React Router 6.30.1** - Client-side routing
- **Framer Motion 12.23.12** - Animations
- **Radix UI** - Accessible component primitives

### Backend
- **Express 5.1.0** - Node.js web framework
- **Nodemailer 7.0.11** - Email functionality
- **Razorpay 2.9.6** - Payment processing
- **Zod 3.25.76** - Schema validation

### Additional Libraries
- **React Hook Form 7.62.0** - Form management
- **Tanstack Query 5.84.2** - Data fetching and caching
- **Lucide React** - Icon library
- **Recharts** - Chart components
- **Three.js** - 3D graphics

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** >= 18.0.0
- **pnpm** >= 10.14.0 (recommended) or npm/yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deven065/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Email Configuration
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password

   # Razorpay Configuration
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

   # Website URL
   WEBSITE_URL=http://localhost:8080
   ```

   **Important Notes:**
   - For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833), not your regular password
   - Get Razorpay credentials from [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys)
   - The `VITE_` prefix makes the variable available to the client-side code

4. **Start the development server**
   ```bash
   pnpm dev
   ```
   
   The application will be available at `http://localhost:8080`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server at localhost:8080 |
| `pnpm build` | Build both client and server for production |
| `pnpm build:client` | Build client-side only |
| `pnpm build:server` | Build server-side only |
| `pnpm start` | Start production server |
| `pnpm test` | Run tests with Vitest |
| `pnpm format.fix` | Format code with Prettier |
| `pnpm typecheck` | Check TypeScript types |

## 🏗️ Project Structure

```
Portfolio-Website/
├── client/                # Frontend React application
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Radix UI components
│   │   ├── Layout.tsx    # Main layout wrapper
│   │   ├── SEO.tsx       # SEO component with meta tags
│   │   └── Breadcrumbs.tsx
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Home page
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Payment.tsx
│   │   └── CaseStudies.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── global.css        # Global styles
├── server/               # Backend Express application
│   ├── routes/           # API routes
│   │   ├── demo.ts
│   │   ├── invoices.ts
│   │   ├── razorpay.ts
│   │   └── send-email.ts
│   ├── index.ts          # Server entry point
│   └── node-build.ts     # Production build script
├── shared/               # Shared types and utilities
│   ├── api.ts            # API client
│   └── invoice.ts        # Invoice types
├── public/               # Static assets
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── site.webmanifest
│   └── .htaccess
├── netlify/              # Netlify serverless functions
│   └── functions/
├── .env                  # Environment variables (not in repo)
├── vite.config.ts        # Vite client configuration
├── vite.config.server.ts # Vite server configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vercel.json          # Vercel deployment config
└── package.json          # Project dependencies
```

## 🚢 Deployment

### Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`
   - Add your environment variables in Vercel dashboard
   - Deploy!

   Your site will be live at: `https://your-project.vercel.app`

### Netlify

1. **Configure Netlify**
   - The project includes `netlify.toml` for configuration
   - Go to [netlify.com](https://netlify.com)
   - Import your GitHub repository
   - Build command: `pnpm build:client`
   - Publish directory: `dist/spa`
   - Add environment variables in Netlify dashboard

### Manual Deployment

```bash
# Build the application
pnpm build

# The output will be in:
# - dist/spa (client-side static files)
# - dist/server (server-side files)

# Start the production server
pnpm start
```

## 🔒 Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `EMAIL_USER` | Email address for sending messages | Yes | `your-email@gmail.com` |
| `EMAIL_PASSWORD` | Email app password | Yes | `your-app-password` |
| `RAZORPAY_KEY_ID` | Razorpay API key ID | Yes | `rzp_test_xxxxx` |
| `RAZORPAY_KEY_SECRET` | Razorpay API secret | Yes | `xxxxx` |
| `VITE_RAZORPAY_KEY_ID` | Razorpay key for client | Yes | `rzp_test_xxxxx` |
| `WEBSITE_URL` | Your website URL | Yes | `https://yoursite.com` |

## 🎨 Customization

### Update Contact Information

Edit the following files to update contact details:
- `client/components/Layout.tsx` - Footer email
- `client/pages/Contact.tsx` - Contact page email
- `client/pages/Payment.tsx` - Payment page email

### Modify SEO Settings

Edit `client/components/SEO.tsx` to customize:
- Site title and description
- Open Graph tags
- Twitter Card metadata
- Schema.org structured data

### Change Colors and Styling

- Tailwind configuration: `tailwind.config.ts`
- Global styles: `client/global.css`
- Component-specific styles: Use Tailwind utility classes

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test -- --watch

# Run tests with coverage
pnpm test -- --coverage
```

## 📝 Best Practices

1. **Keep `.env` file secure** - Never commit it to version control
2. **Use TypeScript** - Leverage type safety for better code quality
3. **Follow component structure** - Keep components small and reusable
4. **Optimize images** - Use appropriate formats and lazy loading
5. **Test thoroughly** - Write tests for critical functionality
6. **Update dependencies** - Regularly update packages for security

## 🐛 Troubleshooting

### Development server not starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Email not sending
- Verify Gmail App Password is correctly set
- Check if 2FA is enabled on your Google account
- Ensure `EMAIL_USER` and `EMAIL_PASSWORD` are in `.env`

### Payment gateway errors
- Verify Razorpay credentials are correct
- Check if you're using test keys for development
- Ensure `RAZORPAY_KEY_SECRET` is set on server-side only

### Build failures
```bash
# Run type check
pnpm typecheck

# Check for ESLint errors
pnpm format.fix
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Deven Rikame**
- Email: [devenrikame55@gmail.com](mailto:devenrikame55@gmail.com)
- Website: [Deven Digital Labs](https://yourwebsite.com)
- GitHub: [@deven065](https://github.com/deven065)

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vite.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - UI components
- [Razorpay](https://razorpay.com/) - Payment gateway
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help with setup, please:
- Open an issue on GitHub
- Email: [devenrikame55@gmail.com](mailto:devenrikame55@gmail.com)

---

**⭐ If you found this project helpful, please consider giving it a star!**
