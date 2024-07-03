@echo off
echo Checking for npm installation...
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo npm is not installed. Please install Node.js and npm before running this script.
    pause
    exit /b
)

echo Installing necessary packages...
npm install && (
    echo Starting the application in a new window...
    start cmd /k "npm start"

    echo Opening the browser to http://localhost:3000...
    timeout /t 10 /nobreak >nul
    start "" "http://localhost:3000"

    echo The application has been started in a new window and the browser has been opened.
    pause
) || (
    echo Failed to install packages. Please check the error messages above.
    pause
)
