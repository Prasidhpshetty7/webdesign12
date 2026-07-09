# 🚀 Quick Start Guide

Get your portfolio up and running in minutes!

## ✅ What's Already Done

Your portfolio has been fully customized with:
- ✅ Your name: **Prasidh P Shetty**
- ✅ Your title: **Web Designer & Full-Stack Developer**
- ✅ Your social links (GitHub, LinkedIn, X, Instagram, Discord, Telegram)
- ✅ Your email: shettyprasidh262@gmail.com
- ✅ All metadata and SEO tags updated
- ✅ Domain references changed to prasidhpshetty.com

## 📋 Quick Setup (5 Steps)

### Step 1: Install Dependencies (2 minutes)

```bash
npm install
```

### Step 2: Create Sanity Project (3 minutes)

```bash
npm create sanity@latest -- --template clean --create-project "Prasidh P Shetty Portfolio" --dataset production
```

When prompted:
- Login/create Sanity account
- Press Enter for default path
- Install dependencies

Copy the `projectId` you receive.

### Step 3: Configure Environment (1 minute)

Open `.env.local` and update:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

### Step 4: Start Development Server (1 minute)

```bash
npm run dev
```

Visit: http://localhost:3000

### Step 5: Add Your Content (10 minutes)

Visit Sanity Studio: http://localhost:3000/studio

#### Required: Add Profile
1. Click **Profile** in sidebar
2. Fill in:
   - Full Name: `Prasidh P Shetty`
   - Headline: `Web Designer & Full-Stack Developer passionate about modern web experiences`
   - Email: `shettyprasidh262@gmail.com`
   - Location: Your city
   - Upload profile photo
   - Paste your bio (see SETUP.md)
   - Upload resume PDF

#### Recommended: Add 2-3 Projects
1. Click **Projects** → **Create**
2. Add project details
3. Upload logos and screenshots

---

## 🎯 That's It!

Your portfolio is now live at `http://localhost:3000`

## 🚢 Deploy to Vercel (5 minutes)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/Prasidhpshetty7/prasidhpshetty.com.git
git push -u origin main
```

### 2. Deploy

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Add environment variables from `.env.local`
5. Click "Deploy"

Done! Your portfolio is now live! 🎉

---

## 📁 Important Files

- `SETUP.md` - Detailed setup instructions
- `CUSTOMIZATION_SUMMARY.md` - All changes made
- `.env.local` - Your configuration
- `app/data/social.ts` - Your social links

## 🆘 Common Issues

**Sanity Studio not loading?**
- Check your `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`

**No content showing?**
- Add your profile in Sanity Studio at `/studio`

**Build errors?**
- Make sure all environment variables are set

## 📞 Need Help?

Check the detailed guides:
- **SETUP.md** - Complete setup walkthrough
- **CUSTOMIZATION_SUMMARY.md** - What's been changed
- [Sanity Docs](https://sanity.io/docs)
- [Next.js Docs](https://nextjs.org/docs)

---

**Ready to build something amazing? Let's go! 🚀**
