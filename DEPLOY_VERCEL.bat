@echo off
echo ========================================
echo DEPLOYING TO VERCEL
echo ========================================
echo.

REM Set Node.js path
set PATH=C:\Program Files\nodejs;%PATH%

REM Navigate to project directory
cd /d "%~dp0"

echo Current directory: %CD%
echo.

REM Check if vercel is installed
where vercel >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Vercel CLI not found. Installing...
    call npm install -g vercel
    echo.
)

echo Logging in to Vercel...
call vercel login
echo.

echo Deploying to production...
call vercel --prod
echo.

echo ========================================
echo DEPLOYMENT COMPLETE!
echo ========================================
pause
