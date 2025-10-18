# Script para deploy de la Landing Page de Clínica Odontológica
# Uso: .\deploy.ps1 [vercel|netlify|github]

Write-Host "🦷 Landing Page Clínica Odontológica - Deploy Script" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# Verificar que estamos en el directorio correcto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: No se encontró package.json. Ejecuta este script desde la raíz del proyecto." -ForegroundColor Red
    exit 1
}

# Verificar que el build funciona
Write-Host "🔨 Verificando build..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error: El build falló. Corrige los errores antes de hacer deploy." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build exitoso!" -ForegroundColor Green

# Función para deploy a GitHub
function Deploy-GitHub {
    Write-Host "📤 Preparando para GitHub..." -ForegroundColor Yellow
    
    # Verificar si ya es un repo git
    if (-not (Test-Path ".git")) {
        Write-Host "🔧 Inicializando repositorio Git..." -ForegroundColor Yellow
        git init
        git branch -M main
    }
    
    # Agregar archivos
    git add .
    git commit -m "Deploy: Landing page clínica odontológica $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    
    Write-Host "📋 Instrucciones para GitHub:" -ForegroundColor Cyan
    Write-Host "1. Crea un repositorio en GitHub"
    Write-Host "2. Ejecuta: git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git"
    Write-Host "3. Ejecuta: git push -u origin main"
    Write-Host ""
    Write-Host "Luego conecta el repo con Vercel o Netlify para deploy automático."
}

# Función para deploy a Vercel
function Deploy-Vercel {
    Write-Host "🚀 Deploy a Vercel..." -ForegroundColor Yellow
    
    # Verificar si Vercel CLI está instalado
    try {
        vercel --version | Out-Null
    } catch {
        Write-Host "📦 Instalando Vercel CLI..." -ForegroundColor Yellow
        npm install -g vercel
    }
    
    # Deploy
    vercel --prod
    
    Write-Host "✅ Deploy a Vercel completado!" -ForegroundColor Green
    Write-Host "🌐 Tu sitio estará disponible en la URL que te proporcione Vercel."
}

# Función para deploy a Netlify
function Deploy-Netlify {
    Write-Host "🌐 Deploy a Netlify..." -ForegroundColor Yellow
    
    # Verificar si Netlify CLI está instalado
    try {
        netlify --version | Out-Null
    } catch {
        Write-Host "📦 Instalando Netlify CLI..." -ForegroundColor Yellow
        npm install -g netlify-cli
    }
    
    # Deploy
    netlify deploy --prod --dir=.next
    
    Write-Host "✅ Deploy a Netlify completado!" -ForegroundColor Green
    Write-Host "🌐 Tu sitio estará disponible en la URL que te proporcione Netlify."
}

# Procesar argumentos
$option = if ($args.Count -gt 0) { $args[0] } else { "github" }

switch ($option) {
    "vercel" {
        Deploy-Vercel
    }
    "netlify" {
        Deploy-Netlify
    }
    "github" {
        Deploy-GitHub
    }
    default {
        Write-Host "❌ Opción no válida. Usa: vercel, netlify o github" -ForegroundColor Red
        Write-Host ""
        Write-Host "📋 Opciones disponibles:" -ForegroundColor Cyan
        Write-Host "  .\deploy.ps1 github   - Preparar para GitHub (recomendado)"
        Write-Host "  .\deploy.ps1 vercel   - Deploy directo a Vercel"
        Write-Host "  .\deploy.ps1 netlify  - Deploy directo a Netlify"
        exit 1
    }
}

Write-Host ""
Write-Host "🎉 ¡Deploy completado!" -ForegroundColor Green
Write-Host "📚 Revisa el README.md para más instrucciones de configuración." -ForegroundColor Cyan
