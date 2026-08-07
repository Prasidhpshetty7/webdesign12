# 🚀 Deploy to Vercel Instructions

## Current Issue
Your Vercel deployment shows 404 because it's pointing to the wrong directory.

## Quick Fix (No Git Required)

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI:**
```powershell
npm install -g vercel
```

2. **Navigate to project:**
```powershell
cd "C:\Users\PRASIDH P SHETTY\Downloads\victoreke.com-main\webdesign12\victoreke.com-main"
```

3. **Deploy:**
```powershell
vercel
```

4. **Login when prompted** (use your Vercel account)

5. **Answer the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (create new)
   - Project name: **prasidhpshetty-portfolio**
   - Directory: **.** (current directory)
   - Override settings? **N**

6. **Wait for deployment** - you'll get a live URL!

---

### Method 2: Fix Existing Deployment

1. Go to: https://vercel.com/dashboard
2. Click on your **webdesign12** project
3. Go to **Settings** → **General**
4. Scroll to **Root Directory**
5. Change it to: `webdesign12/victoreke.com-main`
6. Click **Save**
7. Go to **Deployments** tab
8. Click the 3 dots on latest deployment
9. Click **Redeploy**

---

### Method 3: Drag & Drop (Easiest)

1. Go to: https://vercel.com/new
2. Click **Browse** or drag and drop
3. Select THIS folder: `C:\Users\PRASIDH P SHETTY\Downloads\victoreke.com-main\webdesign12\victoreke.com-main`
4. Vercel will detect Next.js automatically
5. Click **Deploy**

---

## Important: Environment Variables

After deployment, add these in Vercel:

1. Go to your project → **Settings** → **Environment Variables**
2. Add these (leave blank for now):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=demo-project
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-07-21
NEXT_PUBLIC_GITHUB_USERNAME=Prasidhpshetty7
NEXT_PUBLIC_GITHUB_JOIN_YEAR=2020
```

3. Click **Save**
4. Go to **Deployments** → **Redeploy**

---

## Expected Result

After successful deployment, you should see:
- ✅ Your portfolio at: `https://prasidhpshetty-portfolio.vercel.app`
- ✅ Homepage with your name and info
- ✅ GitHub contribution graph
- ✅ All sections working

---

## Troubleshooting

**If build fails:**
- Check the build logs in Vercel dashboard
- Most likely missing environment variables

**If you see 404:**
- Wrong root directory
- Follow Method 2 above to fix

**If GitHub graph doesn't show:**
- Check if username is correct in environment variables
- Graph takes a few seconds to load from GitHub API

---

## Need Help?

Check the deployment logs in Vercel dashboard under the **Deployments** tab.
