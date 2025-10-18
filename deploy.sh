#!/bin/bash

# Script para deploy de la Landing Page de Clínica Odontológica
# Uso: ./deploy.sh [vercel|netlify|github]

echo "🦷 Landing Page Clínica Odontológica - Deploy Script"
echo "=================================================="

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
    exit 1
fi

# Verificar que el build funciona
echo "🔨 Verificando build..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error: El build falló. Corrige los errores antes de hacer deploy."
    exit 1
fi

echo "✅ Build exitoso!"

# Función para deploy a GitHub
deploy_github() {
    echo "📤 Preparando para GitHub..."
    
    # Verificar si ya es un repo git
    if [ ! -d ".git" ]; then
        echo "🔧 Inicializando repositorio Git..."
        git init
        git branch -M main
    fi
    
    # Agregar archivos
    git add .
    git commit -m "Deploy: Landing page clínica odontológica $(date)"
    
    echo "📋 Instrucciones para GitHub:"
    echo "1. Crea un repositorio en GitHub"
    echo "2. Ejecuta: git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git"
    echo "3. Ejecuta: git push -u origin main"
    echo ""
    echo "Luego conecta el repo con Vercel o Netlify para deploy automático."
}

# Función para deploy a Vercel
deploy_vercel() {
    echo "🚀 Deploy a Vercel..."
    
    # Verificar si Vercel CLI está instalado
    if ! command -v vercel &> /dev/null; then
        echo "📦 Instalando Vercel CLI..."
        npm install -g vercel
    fi
    
    # Deploy
    vercel --prod
    
    echo "✅ Deploy a Vercel completado!"
    echo "🌐 Tu sitio estará disponible en la URL que te proporcione Vercel."
}

# Función para deploy a Netlify
deploy_netlify() {
    echo "🌐 Deploy a Netlify..."
    
    # Verificar si Netlify CLI está instalado
    if ! command -v netlify &> /dev/null; then
        echo "📦 Instalando Netlify CLI..."
        npm install -g netlify-cli
    fi
    
    # Deploy
    netlify deploy --prod --dir=.next
    
    echo "✅ Deploy a Netlify completado!"
    echo "🌐 Tu sitio estará disponible en la URL que te proporcione Netlify."
}

# Procesar argumentos
case "${1:-github}" in
    "vercel")
        deploy_vercel
        ;;
    "netlify")
        deploy_netlify
        ;;
    "github")
        deploy_github
        ;;
    *)
        echo "❌ Opción no válida. Usa: vercel, netlify o github"
        echo ""
        echo "📋 Opciones disponibles:"
        echo "  ./deploy.sh github   - Preparar para GitHub (recomendado)"
        echo "  ./deploy.sh vercel   - Deploy directo a Vercel"
        echo "  ./deploy.sh netlify  - Deploy directo a Netlify"
        exit 1
        ;;
esac

echo ""
echo "🎉 ¡Deploy completado!"
echo "📚 Revisa el README.md para más instrucciones de configuración."
