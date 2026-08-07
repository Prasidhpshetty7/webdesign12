# 🚀 Simple Deployment Guide

## Run This ONE Command:

### Option 1: Double-click the file
**Just double-click:** `DEPLOY.bat`

It will:
- ✅ Check if Node.js is installed
- ✅ Install Vercel CLI
- ✅ Start the deployment process
- ✅ Open browser for you to login to Vercel
- ✅ Deploy your portfolio!

---

### Option 2: Use PowerShell

Open PowerShell in THIS folder and run:

```powershell
vercel --prod
```

Then:
1. **Login** when browser opens
2. **Select your account**
3. When asked "Link to existing project?" → **N** (No, create new)
4. **Project name:** prasidhpshetty-portfolio
5. **Directory:** Press Enter (use current)
6. Wait 2-3 minutes for build
7. You'll get your live URL!

---

### Option 3: Vercel Website (Drag & Drop)

1. Go to: https://vercel.com/new
2. Click **"Browse"**
3. Select THIS FOLDER: `webdesign12\victoreke.com-main`
4. Click **Deploy**
5. Done! You'll get a live URL!

---

## ⚠️ IMPORTANT: Environment Variables

After deployment, add these in Vercel Dashboard:

1. Go to your project → **Settings** → **Environment Variables**
2. Add:
   - `NEXT_PUBLIC_GITHUB_USERNAME` = `Prasidhpshetty7`
   - `NEXT_PUBLIC_GITHUB_JOIN_YEAR` = `2020`
3. Click **Save**
4. Redeploy (go to Deployments → click ... → Redeploy)

---

## Expected Result

After successful deployment:
- ✅ Live at: `https://your-project.vercel.app`
- ✅ Your name and info displayed
- ✅ GitHub contribution graph working
- ✅ All pages accessible

---

## Troubleshooting

**If deployment fails:**
- Check you're in the correct folder (where package.json is)
- Make sure Node.js is installed
- Check Vercel dashboard for build logs

**If you see 404:**
- You deployed from wrong folder
- Use Option 3 (drag & drop) and select the folder with package.json

**If GitHub graph doesn't show:**
- Add environment variables (see above)
- Wait a few seconds for it to load

---

## Need Help?

Run `DEPLOY.bat` - it will guide you through everything!
