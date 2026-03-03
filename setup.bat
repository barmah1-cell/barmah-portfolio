@echo off
echo Setting up Consultant Portfolio Project...
echo.

REM Add Node.js to PATH for this session
set PATH=%PATH%;C:\Program Files\nodejs

echo Installing dependencies...
npm install

echo.
echo Setup complete!
echo.
echo To run the development server:
echo   npm run dev
echo.
echo To run tests:
echo   npm test
echo.
pause
