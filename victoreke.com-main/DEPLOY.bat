@echo off
echo ========================================
echo Deploying Prasidh P Shetty Portfolio
echo ========================================
echo.

cd /d "%~dp0"

echo Checking Node.js...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found!
echo.

echo Setting up PATH...
set PATH=C:\Program Files\nodejs;%PATH%

echo Installing/Updating Vercel CLI...
call npm install -g vercel
echo.

echo ========================================
echo Starting Vercel Deployment...
echo ========================================
echo.
echo You will be asked to:
echo 1. Login to Vercel (opens browser)
echo 2. Select your account
echo 3. Choose project settings
echo.
echo Press any key to continue...
pause >nul

call vercel --prod

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Your site should now be live!
echo Check your Vercel dashboard for the URL.
echo.
pause
