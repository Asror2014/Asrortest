$baseDir = "c:\Users\Hp\Downloads\new"
$artifactDir = "C:\Users\Hp\.gemini\antigravity\brain\eceaab90-a22e-43b4-a834-94dc8938ecbd"

$zipFile = Join-Path $baseDir "30-maktabtest-loyiha.zip"
$bytes = [System.IO.File]::ReadAllBytes($zipFile)
$b64 = [Convert]::ToBase64String($bytes)

$template = @'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
</head>
<body class="bg-transparent text-[var(--foreground)] antialiased p-2">
  <div class="bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] rounded-2xl p-5 shadow-lg max-w-lg mx-auto">
    
    <!-- Sarlavha -->
    <div class="flex items-center gap-3 mb-4">
      <div class="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
      </div>
      <div>
        <h2 class="text-[var(--foreground)] font-bold text-base leading-tight">30-maktabtest: Faylni Yuklab Olish</h2>
        <p class="text-[var(--muted-foreground)] text-xs">Ushbu yashil tugmani bosing — fayl to'g'ridan-to'g'ri kompyuteringizga yuklanadi</p>
      </div>
    </div>

    <!-- Asosiy Yuklab Olish Tugmasi -->
    <div class="space-y-3 my-4">
      <button id="btn-zip" onclick="downloadZip()" class="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-medium text-sm transition-all shadow-lg shadow-emerald-600/30 cursor-pointer">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
            </svg>
          </div>
          <div class="text-left">
            <div class="font-bold text-base">30-maktabtest-loyiha.zip</div>
            <div class="text-xs text-emerald-100">Barcha kodlar, vercel.json va server (728 KB)</div>
          </div>
        </div>
        <div class="flex items-center gap-1.5 bg-white text-emerald-800 text-xs px-3 py-2 rounded-lg font-bold shadow-sm">
          <span>YUKLAB OLISH</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </button>

      <!-- Yagona HTML Tugmasi -->
      <button id="btn-html" onclick="downloadHtml()" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-[var(--secondary)] hover:bg-[var(--accent)] active:scale-[0.98] text-[var(--foreground)] border border-[var(--border)] font-medium text-sm transition-all cursor-pointer">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
          </div>
          <div class="text-left">
            <div class="font-semibold text-sm">30-maktabtest.html</div>
            <div class="text-[11px] text-[var(--muted-foreground)]">Yagona mustaqil fayl (2.5 MB)</div>
          </div>
        </div>
        <div class="text-xs text-[var(--muted-foreground)] font-semibold px-2.5 py-1.5 rounded-md bg-[var(--card)] border border-[var(--border)]">
          Ochish
        </div>
      </button>
    </div>

    <!-- Holat xabari -->
    <div id="status-box" class="hidden text-center text-xs py-2.5 px-3 rounded-lg font-medium"></div>

    <div class="pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
      <span>Saqlanadigan joy: <b>This PC > Downloads (Загрузки)</b></span>
      <span class="text-emerald-400 font-medium">100% Tayyor</span>
    </div>
  </div>

  <script>
    const zipBase64 = "###ZIP_BASE64###";

    function showStatus(msg, isError) {
      const box = document.getElementById('status-box');
      box.textContent = msg;
      box.className = isError 
        ? 'text-center text-xs py-2.5 px-3 rounded-lg bg-red-500/15 text-red-400 font-medium border border-red-500/25 block'
        : 'text-center text-xs py-2.5 px-3 rounded-lg bg-emerald-500/15 text-emerald-400 font-medium border border-emerald-500/25 block';
      setTimeout(() => { box.className = 'hidden'; }, 5000);
    }

    function downloadZip() {
      try {
        const btn = document.getElementById('btn-zip');
        btn.style.opacity = '0.75';

        const byteCharacters = atob(zipBase64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/zip' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '30-maktabtest-loyiha.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);

        btn.style.opacity = '1';
        showStatus('Muvaffaqiyatli yuklandi! Fayl Downloads (Загрузки) papkasida saqlandi.');
      } catch (e) {
        showStatus('Xatolik: ' + e.message, true);
      }
    }

    function downloadHtml() {
      try {
        const a = document.createElement('a');
        a.href = 'http://localhost:8080/download-html';
        a.download = '30-maktabtest.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showStatus('HTML fayl yuklab olishga yuborildi!');
      } catch (e) {
        window.open('http://localhost:8080/download-html', '_blank');
      }
    }
  </script>
</body>
</html>
'@

$finalHtml = $template.Replace("###ZIP_BASE64###", $b64)
$outPath = Join-Path $artifactDir "download_widget.html"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outPath, $finalHtml, $utf8NoBom)
Write-Output "Yaratildi: $outPath ($([math]::Round((Get-Item $outPath).Length / 1KB, 1)) KB)"
