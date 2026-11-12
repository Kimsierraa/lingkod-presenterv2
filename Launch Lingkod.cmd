@echo off
where node.exe >nul 2>&1
if errorlevel 1 (
  echo Install Node.js, then run this launcher again.
  pause
  exit /b 1
)
node "%~dp0serve.mjs" --open
if errorlevel 1 pause
