@echo off
chcp 65001 > nul
echo ========================================================
echo     30-IDUM MAKTABTEST - GITHUB GA YUKLASH YORDAMCHISI
echo ========================================================
echo.
echo GitHub hisobingiz: asrordev14
echo Tavsiya etilgan repozitoriy nomi: 30-maktabtest
echo.
echo 1-qadam: Agar GitHub-da repozitoriy ochmagan bo'lsangiz:
echo 👉 https://github.com/new manziliga kiring va "30-maktabtest" deb nomlang.
echo.
set /p REPO_URL="GitHub URL manzilini kiriting (yoki shunchaki Enter bosing): "
if "%REPO_URL%"=="" set REPO_URL=https://github.com/asrordev14/30-maktabtest.git

echo.
echo Yuklanmoqda: %REPO_URL% ...
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo  TABRIKLAYMIZ! GITHUB GA MUVAFFAQINATLI YUKLANDI!
    echo ========================================================
    echo Endi Vercel.com ga kiring va "30-maktabtest" ni tanlab Deploy bosing!
    echo Saytingiz havola orqali internetda jonli ishlaydi.
) else (
    echo ========================================================
    echo  DIQQAT: Xatolik yuz berdi yoki autentifikatsiya kerak!
    echo ========================================================
    echo Agar GitHub brauzer orqali ruxsat so'rasa, "Sign in with browser" ni tanlang.
)
pause
