@echo off
chcp 65001 >nul
title 30-maktabtest - Localhost Server
cd /d "%~dp0"

echo ================================================================
echo    🎓 30-MAKTABTEST - INTERAKTIV LOCALHOST SERVER
echo ================================================================
echo.
echo  Server ishga tushmoqda: http://localhost:8080/
echo  Sayt brauzeringizda ochilmoqda...
echo.
echo  Eslatma: Sayt ishlashi uchun ushbu oynani ochiq qoldiring.
echo  Serverni to'xtatish uchun ushbu qora oynani yopsangiz kifoya.
echo ================================================================
echo.

powershell -ExecutionPolicy Bypass -NoProfile -File "%~dp0server.ps1"
