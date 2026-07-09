# Portfolio Setup Guide for Prasidh P Shetty

This guide will help you set up and customize your portfolio website.

## 📋 Overview

This portfolio has been customized with your personal information:
- **Name:** Prasidh P Shetty
- **Role:** Web Designer & Full-Stack Developer
- **Email:** shettyprasidh262@gmail.com
- **GitHub:** https://github.com/Prasidhpshetty7
- **LinkedIn:** https://www.linkedin.com/in/prasidhpshetty/
- **Twitter/X:** https://x.com/prasidhpshetty
- **Instagram:** https://www.instagram.com/prasidhpshetty/
- **Discord:** prasidhshetty
- **Telegram:** https://t.me/FINALSKULL

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Sanity CMS

Sanity is the headless CMS that powers your portfolio content (projects, blog posts, profile, etc.)

#### Create a New Sanity Project:

```bash
npm create sanity@latest -- --template clean --create-project "Prasidh P Shetty Portfolio" --dataset production
```

Follow the prompts:
- Login or create a Sanity account
- Choose output path (default is fine)
- Install dependencies

#### Get Your Sanity Credentials:

After creating the project, you'll receive a `projectId`. Update your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-07-21
```

#### Create an Access Token (Optional but Recommended):

1. Visit [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to **API** → **Tokens**
4. Create a new token with **Editor** permissions
5. Add it to `.env.local`:

```env
NEXT_PUBLIC_SANITY_ACCESS_TOKEN=your-token-here
```

### 3. Update Your Profile in Sanity Studio

```bash
npm run dev
```

Visit `http://localhost:3000/studio` to access Sanity Studio.

#### Add Your Profile Information:

1. Click on **Profile** in the sidebar
2. Fill in all the fields:
   - **Full Name:** Prasidh P Shetty
   - **Headline:** Web Designer & Full-Stack Developer passionate about modern web experiences
   - **Profile Image:** Upload your photo
   - **Short Bio:** Brief introduction (shown on homepage)
   - **Email:** shettyprasidh262@gmail.com
   - **Location:** Your city/country
   - **Full Bio:** Your complete about section (use the provided bio below)
   - **Resume:** Upload your PDF resume
   - **Usage:** Tools and technologies you use

#### Your Bio to Use:

```
I am Prasidh P Shetty, a Web Designer and Full-Stack Developer passionate about building modern, visually engaging, and user-focused digital experiences. I specialize in creating responsive websites and scalable web applications that combine clean design with solid technical foundations.

I work across the full development stack — from crafting intuitive frontend interfaces to building robust backend systems, APIs, and database architectures. I follow industry best practices such as version control, agile workflows, and CI/CD pipelines to deliver high-quality, maintainable, and performant solutions.

With a strong sense of design and attention to detail, I believe great digital products are built at the intersection of aesthetics, usability, and engineering. I enjoy continuous learning, solving complex problems, and transforming ideas into impactful digital solutions.
```

### 4. Add Your Projects

In Sanity Studio (`/studio`):

1. Click **Projects** → **Create**
2. Fill in:
   - **Name:** Project name
   - **Slug:** Auto-generated or custom URL slug
   - **Tagline:** Short description (max 60 chars)
   - **Logo:** Project logo/icon
   - **Project URL:** Live website link
   - **Repository URL:** GitHub repo link
   - **Cover Image:** Project screenshot
   - **Description:** Full project description with tech stack, features, etc.

### 5. Add Work Experience (Optional)

In Sanity Studio:

1. Click **Job** → **Create**
2. Add your work experience with:
   - Company name
   - Job title
   - Logo
   - Company URL
   - Description
   - Start/End dates

### 6. Write Blog Posts (Optional)

In Sanity Studio:

1. Click **Blog Posts** → **Create**
2. Create an **Author** first if you haven't
3. Write your post with the rich text editor
4. Add tags, cover image, and set to published

## 🔧 Optional Integrations

### GitHub Contribution Graph

Your GitHub username is already configured in `.env.local`:

```env
NEXT_PUBLIC_GITHUB_USERNAME="Prasidhpshetty7"
NEXT_PUBLIC_GITHUB_JOIN_YEAR="2020"
```

Update the join year if needed.

### Giscus Comments (Optional)

To enable blog comments:

1. Visit [giscus.app](https://giscus.app/)
2. Enter your repository: `Prasidhpshetty7/prasidhpshetty.com`
3. Follow the setup instructions
4. Copy the `data-repo-id` and `data-category-id`
5. Add them to `.env.local`:

```env
NEXT_PUBLIC_GISCUS_REPOID=your-repo-id
NEXT_PUBLIC_GISCUS_CATEGORYID=your-category-id
```

### Umami Analytics (Optional)

Track website visitors:

1. Visit [umami.is](https://umami.is) or self-host
2. Create a website
3. Get your website ID
4. Add to `.env.local`:

```env
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id
```

## 📁 File Structure

### Key Files Already Updated:

- ✅ `app/layout.tsx` - Site metadata & SEO
- ✅ `app/page.tsx` - Homepage
- ✅ `app/about/page.tsx` - About page
- ✅ `app/blog/page.tsx` - Blog listing
- ✅ `app/projects/page.tsx` - Projects listing
- ✅ `app/data/social.ts` - Your social media links
- ✅ `app/components/global/Footer.tsx` - Copyright notice
- ✅ `package.json` - Project name
- ✅ `sanity.config.ts` - Sanity configuration

### Content (Managed via Sanity Studio):

All dynamic content is managed through Sanity CMS:
- Profile information
- Projects
- Blog posts
- Work experience
- Heroes list

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js` to customize the color scheme.

### Update Logo

Replace files in `public/`:
- `logo.png` - Main logo
- `logo.svg` - SVG version
- `favicon.ico` - Browser favicon
- `apple-icon.png` - iOS icon

### Modify Social Links

Edit `app/data/social.ts` to add/remove social platforms.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Prasidhpshetty7/prasidhpshetty.com.git
   git push -u origin main
   ```

2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables from `.env.local`
5. Deploy!

### Custom Domain

1. Buy your domain (e.g., prasidhpshetty.com)
2. In Vercel dashboard → **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records as instructed

## 📝 Content Guidelines

### Project Descriptions

Include:
- What the project does
- Tech stack used
- Key features
- Challenges solved
- Live demo and GitHub links

### Blog Posts

- Use markdown formatting
- Add relevant tags
- Include code snippets when applicable
- Add a compelling cover image
- Write clear, concise descriptions

### Profile Updates

Keep your:
- Resume up to date
- Skills and tools current
- Work experience accurate
- Profile photo professional

## 🆘 Troubleshooting

### Sanity Studio Not Loading

1. Check `.env.local` has correct `NEXT_PUBLIC_SANITY_PROJECT_ID`
2. Verify Sanity project exists at [sanity.io/manage](https://sanity.io/manage)
3. Clear cache: `rm -rf .next` then `npm run dev`

### Images Not Displaying

1. Ensure images are uploaded through Sanity Studio
2. Check image URLs are from `cdn.sanity.io`
3. Verify `next.config.js` has correct image domains

### Build Errors

1. Check all environment variables are set
2. Run `npm run build` locally to catch errors
3. Review build logs for specific issues

## 📞 Support

For issues with:
- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)
- **Sanity:** [sanity.io/docs](https://sanity.io/docs)
- **Deployment:** [vercel.com/docs](https://vercel.com/docs)

## 🎉 Next Steps

1. ✅ Install dependencies
2. ✅ Set up Sanity CMS
3. ⬜ Add your profile information
4. ⬜ Upload projects
5. ⬜ Add work experience
6. ⬜ Write your first blog post
7. ⬜ Deploy to Vercel
8. ⬜ Configure custom domain

---

**Original Template:** This portfolio is based on [Victor Eke's portfolio](https://victoreke.com), customized for Prasidh P Shetty.

**License:** MIT - See LICENSE file for details.
