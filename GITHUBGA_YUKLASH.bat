@echo off
chcp 65001 >nul
title 30-maktabtest Loyihasini GitHub-ga Yuklash
cls
echo =======================================================================
echo     🚀 30-MAKTABTEST LOYIHASINI GITHUB VA VERCEL-GA YUKLASH
echo =======================================================================
echo.
echo 1. Git branch sozlanmoqda (main)...
git branch -M main

echo 2. Masofaviy repozitoriy manzili biriktirilmoqda...
git remote remove origin 2>nul
git remote add origin https://github.com/asrordev14/30-maktabtest.git

echo 3. Barcha o'zgarishlar va yangi fayllar saqlanmoqda...
git add -A
git commit -m "feat: 30-maktabtest - 10 ta 3D laboratoriya, testlar va interaktiv globus" 2>nul

echo.
echo 4. GitHub-ga yuborilmoqda (git push)...
echo    Agar brauzerda tasdiqlash oynasi chiqsa, "Sign in with browser" ni bosing.
echo =======================================================================
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo -----------------------------------------------------------------------
    echo ⚠️  YUKLASHDA XATOLIK YUZ BERDI!
    echo.
    echo MUMKIN BO'LGAN SABABLAR:
    echo 1. GitHub-da hali "30-maktabtest" nomli repozitoriy ochilmagan:
    echo    👉 https://github.com/new manziliga kiring va "30-maktabtest" yarating!
    echo.
    echo 2. GitHub hisobingizga kirilmagan bo'lsa, chiqqan oynada tasdiqlang.
    echo -----------------------------------------------------------------------
) else (
    echo.
    echo -----------------------------------------------------------------------
    echo ✅ MUVAFFAQIYAT! Barcha fayllar GitHub-ga muvaffaqiyatli yuklandi!
    echo.
    echo ENDI VERCEL-DA OCHISH UCHUN:
    echo 1. https://vercel.com saytiga kiring (GitHub orqali).
    echo 2. "Add New..." -> "Project" ni tanlang.
    echo 3. "30-maktabtest" repozitoriyasini topib, "Import" va "Deploy" ni bosing!
    echo.
    echo Saytingiz manzili: https://30-maktabtest.vercel.app
    echo -----------------------------------------------------------------------
)

echo.
pause
