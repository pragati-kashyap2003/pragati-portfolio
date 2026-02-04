# Portfolio Website

A modern, responsive, and interactive portfolio website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern Design**: Dark theme with gradient accents and smooth animations
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- ⚡ **Smooth Scrolling**: One-page layout with smooth scroll navigation
- 🎭 **Animations**: Beautiful scroll-triggered animations using Framer Motion
- 📊 **Interactive Skills**: Animated progress bars showing skill levels
- 🎯 **Projects Filter**: Filter projects by category (Frontend, Backend, Full Stack)
- 📧 **Contact Form**: Working contact form with validation
- 📄 **Downloadable CV**: Button to download your resume
- 🔗 **Social Links**: GitHub, LinkedIn, and Twitter integration

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Update Your Information

All content is centralized in `src/data/portfolioData.js`. Update this file with your information:

1. **Personal Information:**
   - Name, title, tagline
   - Email, phone, location
   - Avatar image URL
   - CV download link

2. **Social Links:**
   - GitHub URL
   - LinkedIn URL
   - Twitter URL

3. **About Section:**
   - Professional description
   - About image

4. **Skills:**
   - Frontend, Backend, Tools, and Soft Skills
   - Adjust skill levels (0-100)

5. **Education:**
   - Add your degrees and institutions
   - Update dates and descriptions

6. **Training & Certifications:**
   - Add your certifications
   - Update issuers and dates

7. **Projects:**
   - Add your projects with:
     - Title and description
     - Image URL (use Unsplash or your own)
     - Technologies used
     - Live demo and GitHub links
     - Category (frontend/backend/fullstack)

### Setup Contact Form (EmailJS)

To make the contact form work:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Get your credentials (Service ID, Template ID, Public Key)
4. Update `src/components/Contact.jsx`:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  formData,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

### Add Your CV

1. Place your CV PDF in the `public` folder
2. Update the CV path in `src/data/portfolioData.js`:

```javascript
cvUrl: "/your-cv-name.pdf"
```

### Change Colors

Colors are defined in `tailwind.config.js`. You can customize:
- Primary colors (blue gradient)
- Accent colors (orange)
- Background colors

## 🎨 Design Features

### Typography
- **Display Font**: Playfair Display (elegant serif)
- **Body Font**: DM Sans (clean sans-serif)

### Color Scheme
- **Primary**: Blue to Purple gradient
- **Background**: Dark slate with subtle grid pattern
- **Accents**: Blue and purple highlights

### Animations
- Fade in and slide up on scroll
- Animated progress bars
- Hover effects on cards and buttons
- Smooth page transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🛠️ Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Scroll**: Smooth scrolling navigation
- **React Icons**: Icon library
- **EmailJS**: Contact form backend (optional)

## 📂 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Training.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── data/
│   │   └── portfolioData.js  # Your content data
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy (automatic configuration for Vite)

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     plugins: [react()],
   })
   ```
4. Deploy: `npm run deploy`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💬 Support

If you have any questions or need help customizing your portfolio, feel free to open an issue.

---

**Made with ❤️ using React and Tailwind CSS**
