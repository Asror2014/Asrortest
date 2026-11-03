param(
    [int]$Port = 8080,
    [switch]$NoBrowser
)

$ErrorActionPreference = "SilentlyContinue"
$folder = $PSScriptRoot
if ([string]::IsNullOrEmpty($folder)) {
    $folder = (Get-Location).Path
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Prefixes.Add("http://127.0.0.1:$Port/")

try {
    $listener.Start()
} catch {
    Write-Host "Port $Port band yoki server allaqachon ishlamoqda: http://localhost:$Port/" -ForegroundColor Yellow
    if (-not $NoBrowser) {
        Start-Process "http://localhost:$Port/"
    }
    exit 0
}

Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "   30-MAKTABTEST - LOCALHOST SERVER ISHLAMOQDA" -ForegroundColor Yellow
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  Manzil:   http://localhost:$Port/" -ForegroundColor Green
Write-Host "  Lokal IP: http://127.0.0.1:$Port/" -ForegroundColor Green
Write-Host "  Server jildi: $folder" -ForegroundColor Gray
Write-Host "  To'xtatish uchun: Ctrl + C bosing" -ForegroundColor Gray
Write-Host "================================================================" -ForegroundColor Cyan

if (-not $NoBrowser) {
    Start-Process "http://localhost:$Port/"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath.ToLower()
        if ([string]::IsNullOrEmpty($path) -or $path -eq "/") {
            $path = "/index.html"
        }

        # Maxsus to'g'ridan-to'g'ri yuklab olish yo'llari (Browser Download)
        if ($path -eq "/download" -or $path -eq "/download-html" -or $path -eq "/yuklab-olish") {
            $dlPath = Join-Path $folder "30-maktabtest.html"
            if (Test-Path $dlPath) {
                $bytes = [System.IO.File]::ReadAllBytes($dlPath)
                $response.ContentType = "application/octet-stream"
                $response.ContentLength64 = $bytes.Length
                $response.AddHeader("Content-Disposition", 'attachment; filename="30-maktabtest.html"')
                $response.AddHeader("Access-Control-Allow-Origin", "*")
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
                $response.Close()
                continue
            }
        }
        elseif ($path -eq "/download-zip" -or $path -eq "/yuklab-olish-zip") {
            $dlPath = Join-Path $folder "30-maktabtest-loyiha.zip"
            if (Test-Path $dlPath) {
                $bytes = [System.IO.File]::ReadAllBytes($dlPath)
                $response.ContentType = "application/zip"
                $response.ContentLength64 = $bytes.Length
                $response.AddHeader("Content-Disposition", 'attachment; filename="30-maktabtest-loyiha.zip"')
                $response.AddHeader("Access-Control-Allow-Origin", "*")
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
                $response.Close()
                continue
            }
        }

        $relPath = $path.TrimStart('/').Replace('/', '\')
        $filePath = Join-Path $folder $relPath

        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = "application/octet-stream"
            if ($ext -eq ".html") { $mime = "text/html; charset=utf-8" }
            elseif ($ext -eq ".css") { $mime = "text/css; charset=utf-8" }
            elseif ($ext -eq ".js") { $mime = "application/javascript; charset=utf-8" }
            elseif ($ext -eq ".json") { $mime = "application/json; charset=utf-8" }
            elseif ($ext -eq ".png") { $mime = "image/png" }
            elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $mime = "image/jpeg" }
            elseif ($ext -eq ".svg") { $mime = "image/svg+xml" }
            elseif ($ext -eq ".zip") { 
                $mime = "application/zip"
                $response.AddHeader("Content-Disposition", 'attachment; filename="30-maktabtest-loyiha.zip"')
            }

            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.AddHeader("Access-Control-Allow-Origin", "*")

            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        } else {
            $response.StatusCode = 404
            $err = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $err.Length
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($err, 0, $err.Length)
            }
        }
        $response.Close()
    } catch {
        # ignore client disconnects
    }
}
