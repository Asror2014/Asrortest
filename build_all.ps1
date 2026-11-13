$ErrorActionPreference = "Stop"
$baseDir = "c:\Users\Hp\Downloads\new"
$artifactDir = "C:\Users\Hp\.gemini\antigravity\brain\eceaab90-a22e-43b4-a834-94dc8938ecbd"

Write-Output "1. Asosiy index.html va fayllarni yuklash..."
$html = [System.IO.File]::ReadAllText((Join-Path $baseDir "index.html"), [System.Text.Encoding]::UTF8)
$styleCss = [System.IO.File]::ReadAllText((Join-Path $baseDir "css\style.css"), [System.Text.Encoding]::UTF8)
$masterFixCss = [System.IO.File]::ReadAllText((Join-Path $baseDir "css\master_fix.css"), [System.Text.Encoding]::UTF8)

$threeJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\three.min.js"), [System.Text.Encoding]::UTF8)
$dataJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\data.js"), [System.Text.Encoding]::UTF8)
$appJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\app.js"), [System.Text.Encoding]::UTF8)
$testEngineJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\test-engine.js"), [System.Text.Encoding]::UTF8)
$labChemJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\lab-chemistry.js"), [System.Text.Encoding]::UTF8)
$labPhysJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\lab-physics.js"), [System.Text.Encoding]::UTF8)
$labAstroJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\lab-astronomy.js"), [System.Text.Encoding]::UTF8)
$labBioJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\lab-biology.js"), [System.Text.Encoding]::UTF8)
$labGeomJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\lab-geometry.js"), [System.Text.Encoding]::UTF8)
$labTechJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\lab-technology.js"), [System.Text.Encoding]::UTF8)
$labGeogJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\lab-geography.js"), [System.Text.Encoding]::UTF8)
$labCompJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\lab-computer.js"), [System.Text.Encoding]::UTF8)
$labMechJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\lab-mechanics.js"), [System.Text.Encoding]::UTF8)
$labExplJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\lab-explanations.js"), [System.Text.Encoding]::UTF8)
$accountsRatingJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\accounts-rating.js"), [System.Text.Encoding]::UTF8)
$soundBadgesJs = ""
if (Test-Path (Join-Path $baseDir "js\sound-and-badges.js")) {
  $soundBadgesJs = [System.IO.File]::ReadAllText((Join-Path $baseDir "js\sound-and-badges.js"), [System.Text.Encoding]::UTF8)
}

Write-Output "2. CSS va JS ni inline qilish..."
$html = $html.Replace('<link rel="stylesheet" href="css/style.css">', "<style>`n$styleCss`n</style>")
$html = $html.Replace('<link rel="stylesheet" href="css/master_fix.css">', "<style>`n$masterFixCss`n</style>")

$html = $html.Replace('<script src="js/three.min.js"></script>', "<script>`n$threeJs`n</script>")
$html = $html.Replace('<script src="js/data.js"></script>', "<script>`n$dataJs`n</script>")
$html = $html.Replace('<script src="js/app.js"></script>', "<script>`n$appJs`n</script>")
$html = $html.Replace('<script src="js/test-engine.js"></script>', "<script>`n$testEngineJs`n</script>")
$html = $html.Replace('<script src="js/accounts-rating.js"></script>', "<script>`n$accountsRatingJs`n</script>")
$html = $html.Replace('<script src="js/lab-chemistry.js"></script>', "<script>`n$labChemJs`n</script>")
$html = $html.Replace('<script src="js/lab-physics.js"></script>', "<script>`n$labPhysJs`n</script>")
$html = $html.Replace('<script src="js/lab-astronomy.js"></script>', "<script>`n$labAstroJs`n</script>")
$html = $html.Replace('<script src="js/lab-biology.js"></script>', "<script>`n$labBioJs`n</script>")
$html = $html.Replace('<script src="js/lab-geometry.js"></script>', "<script>`n$labGeomJs`n</script>")
$html = $html.Replace('<script src="js/lab-technology.js"></script>', "<script>`n$labTechJs`n</script>")
$html = $html.Replace('<script src="js/lab-geography.js"></script>', "<script>`n$labGeogJs`n</script>")
$html = $html.Replace('<script src="js/lab-computer.js"></script>', "<script>
$labCompJs
</script>")
  $html = $html.Replace('<script src="js/lab-mechanics.js"></script>', "<script>
$labMechJs
</script>")
$html = $html.Replace('<script src="js/lab-explanations.js"></script>', "<script>`n$labExplJs`n</script>")
if ($soundBadgesJs) {
  $html = $html.Replace('<script src="js/sound-and-badges.js"></script>', "<script>`n$soundBadgesJs`n</script>")
}

# Yagona HTML fayllarini saqlash
$htmlPaths = @(
  (Join-Path $baseDir "30-maktabtest.html"),
  "C:\Users\Hp\Downloads\30-maktabtest.html",
  "C:\Users\Hp\Desktop\30-maktabtest.html",
  (Join-Path $artifactDir "30-maktabtest.html")
)

foreach ($p in $htmlPaths) {
  [System.IO.File]::WriteAllText($p, $html, [System.Text.Encoding]::UTF8)
  $sz = (Get-Item $p).Length
  Write-Output "Yaratildi: $p ($([math]::Round($sz/1MB, 2)) MB)"
}

Write-Output "3. C:\Users\Hp\Downloads\30-maktabtest va C:\Users\Hp\Desktop\new jildlariga sinxronlash..."
$destFolder = "C:\Users\Hp\Downloads\30-maktabtest"
if (-not (Test-Path $destFolder)) {
  New-Item -ItemType Directory -Path $destFolder | Out-Null
}
Copy-Item -Path "$baseDir\*" -Destination $destFolder -Recurse -Force -Exclude "30-maktabtest-loyiha.zip"

$desktopNew = "C:\Users\Hp\Desktop\new"
if (Test-Path $desktopNew) {
  Copy-Item -Path "$baseDir\*" -Destination $desktopNew -Recurse -Force
}

# Desktop ga ham START_LOCALHOST.bat va yer-shari.html qo'yish
Copy-Item -Path (Join-Path $baseDir "START_LOCALHOST.bat") -Destination "C:\Users\Hp\Desktop\START_LOCALHOST.bat" -Force
Copy-Item -Path (Join-Path $baseDir "yer-shari.html") -Destination "C:\Users\Hp\Desktop\yer-shari.html" -Force
Copy-Item -Path (Join-Path $baseDir "yer-shari.html") -Destination "C:\Users\Hp\Downloads\yer-shari.html" -Force
Copy-Item -Path (Join-Path $baseDir "GITHUBGA_YUKLASH.bat") -Destination "C:\Users\Hp\Desktop\GITHUBGA_YUKLASH.bat" -Force
Copy-Item -Path (Join-Path $baseDir "GITHUBGA_YUKLASH.bat") -Destination "C:\Users\Hp\Downloads\GITHUBGA_YUKLASH.bat" -Force

Write-Output "4. ZIP arxiv yaratish..."
$zipTemp = "C:\Users\Hp\AppData\Local\Temp\30-maktabtest-loyiha.zip"
if (Test-Path $zipTemp) { Remove-Item $zipTemp -Force }

$itemsToZip = @(
  (Join-Path $baseDir "index.html"),
  (Join-Path $baseDir "yer-shari.html"),
  (Join-Path $baseDir "30-maktabtest.html"),
  (Join-Path $baseDir "GITHUBGA_YUKLASH.bat"),
  (Join-Path $baseDir "vercel.json"),
  (Join-Path $baseDir "README.md"),
  (Join-Path $baseDir ".gitignore"),
  (Join-Path $baseDir "PUSH_TO_GITHUB.bat"),
  (Join-Path $baseDir "server.ps1"),
  (Join-Path $baseDir "START_SAYT.bat"),
  (Join-Path $baseDir "START_LOCALHOST.bat"),
  (Join-Path $baseDir "css"),
  (Join-Path $baseDir "js"),
  (Join-Path $baseDir "assets"),
  (Join-Path $baseDir "data")
) | Where-Object { Test-Path $_ }

Compress-Archive -Path $itemsToZip -DestinationPath $zipTemp -Force

$zipDestinations = @(
  (Join-Path $baseDir "30-maktabtest-loyiha.zip"),
  "C:\Users\Hp\Downloads\30-maktabtest-loyiha.zip",
  "C:\Users\Hp\Desktop\30-maktabtest-loyiha.zip",
  (Join-Path $artifactDir "30-maktabtest-loyiha.zip")
)

foreach ($zp in $zipDestinations) {
  Copy-Item -Path $zipTemp -Destination $zp -Force
  $zsz = (Get-Item $zp).Length
  Write-Output "ZIP yaratildi: $zp ($([math]::Round($zsz/1KB, 1)) KB)"
}

Write-Output "TAMOM! Barcha fayllar muvaffaqiyatli yangilandi!"
