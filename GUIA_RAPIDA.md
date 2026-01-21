# Guía Rápida - Configuración Git y Vercel

## 🚀 Configuración Inicial

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar WhatsApp

Edita `src/constants/whatsapp.js` con tu número de WhatsApp.

## 📦 Git - Configuración Paso a Paso

### Paso 1: Inicializar Git (si no está inicializado)

```bash
git init
```

### Paso 2: Verificar estado

```bash
git status
```

### Paso 3: Agregar todos los archivos

```bash
git add .
```

### Paso 4: Hacer commit inicial

```bash
git commit -m "feat: Landing page con arquitectura SOLID"
```

### Paso 5: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `assistflowmx` (o el que prefieras)
3. **NO** marques "Initialize with README"
4. Click en "Create repository"

### Paso 6: Conectar repositorio local con GitHub

```bash
# Reemplaza 'tu-usuario' con tu usuario de GitHub
git remote add origin https://github.com/tu-usuario/assistflowmx.git
git branch -M main
git push -u origin main
```

### Paso 7: Verificar

Ve a tu repositorio en GitHub y verifica que todos los archivos estén ahí.

## 🌐 Vercel - Despliegue Paso a Paso

### Opción A: Desde GitHub (Recomendado)

1. **Ve a https://vercel.com**
2. **Haz login** con tu cuenta de GitHub
3. **Click en "Add New Project"**
4. **Importa tu repositorio**:
   - Busca `assistflowmx` en la lista
   - Click en "Import"
5. **Configuración** (Vercel la detecta automáticamente):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. **Click en "Deploy"**
7. **Espera** a que termine el build (1-2 minutos)
8. **¡Listo!** Tu sitio estará en una URL como: `assistflowmx.vercel.app`

### Opción B: Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

### Configurar Dominio Personalizado (Opcional)

1. En el dashboard de Vercel, ve a tu proyecto
2. Click en "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

## 🔄 Actualizaciones Futuras

### Cada vez que hagas cambios:

```bash
# 1. Ver cambios
git status

# 2. Agregar cambios
git add .

# 3. Hacer commit
git commit -m "descripción de los cambios"

# 4. Subir a GitHub
git push

# Vercel desplegará automáticamente si está conectado con GitHub
```

## ✅ Checklist de Configuración

- [ ] Dependencias instaladas (`npm install`)
- [ ] Número de WhatsApp configurado
- [ ] Git inicializado
- [ ] Repositorio creado en GitHub
- [ ] Código subido a GitHub
- [ ] Proyecto conectado en Vercel
- [ ] Primer deploy exitoso
- [ ] Sitio funcionando correctamente

## 🐛 Problemas Comunes

### Git: "fatal: remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/tu-usuario/assistflowmx.git
```

### Vercel: Build falla

1. Verifica que `package.json` tenga el script `build`
2. Revisa los logs en el dashboard de Vercel
3. Asegúrate de que todas las dependencias estén en `package.json`

### Vercel: Página en blanco

1. Verifica que `vercel.json` esté configurado correctamente
2. Asegúrate de que el build se complete sin errores
3. Revisa la consola del navegador para errores

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs de build en Vercel
2. Verifica la consola del navegador
3. Asegúrate de seguir todos los pasos en orden

---

**¡Listo para desplegar!** 🚀
