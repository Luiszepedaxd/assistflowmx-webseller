# AssistFlowMX

Landing page moderna para AssistFlowMX - Automatización de atención al cliente en WhatsApp.

## 🚀 Descripción

Sitio web responsivo desarrollado con **React + Vite** que presenta los servicios de automatización de AssistFlowMX, enfocado en cotizaciones automáticas y atención 24/7 a través de WhatsApp.

## ✨ Características

- ⚡ **React + Vite** - Desarrollo rápido y eficiente
- 📱 Diseño responsivo optimizado para mobile y desktop
- 🎨 Animaciones suaves y efectos hover
- 💬 Mockup interactivo de WhatsApp
- 🔍 Optimizado para SEO
- ⚙️ Hooks personalizados para mejor organización
- 🚀 Listo para deployment en Vercel

## 📁 Estructura del Proyecto

```
assistflowmx/
├── src/
│   ├── components/         # Componentes React
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Benefits.jsx
│   │   ├── Process.jsx
│   │   ├── Pricing.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── hooks/              # Hooks personalizados
│   │   ├── useAnalytics.js
│   │   ├── useAnimations.js
│   │   ├── useScrollToTop.js
│   │   └── useSmoothScrolling.js
│   ├── constants/          # Constantes del proyecto
│   │   └── contact.js      # Número de WhatsApp y mensajes
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── public/                 # Archivos estáticos
├── dist/                   # Build de producción (generado)
├── vercel.json             # Configuración de Vercel
├── vite.config.js          # Configuración de Vite
├── package.json            # Dependencias y scripts
└── README.md               # Este archivo
```

## 🛠️ Instalación y Desarrollo Local

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Pasos para correr el proyecto

1. **Instalar dependencias** (si no las tienes):
```bash
npm install
```

2. **Iniciar servidor de desarrollo**:
```bash
npm run dev
```
O también:
```bash
npm start
```

El proyecto se abrirá automáticamente en `http://localhost:3000`

3. **Crear build de producción**:
```bash
npm run build
```

4. **Previsualizar el build**:
```bash
npm run preview
```

## 🚀 Deployment en Vercel

El proyecto ya está configurado para Vercel con `vercel.json`.

### Opción 1: Deploy desde terminal
```bash
npm run deploy
```

### Opción 2: Conectar con GitHub

1. Sube tu código a GitHub:
```bash
git add .
git commit -m "Actualización"
git push origin main
```

2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente la configuración de Vite
4. El sitio se desplegará automáticamente

### Dominio personalizado

El proyecto está configurado para usar `assistflowmx.online`:
1. Ve a la configuración del proyecto en Vercel
2. Agrega `assistflowmx.online` en la sección de dominios
3. Configura los DNS según las instrucciones de Vercel

## 🔧 Personalización

### Cambiar número de WhatsApp

Edita el archivo `src/constants/contact.js`:
```javascript
export const WHATSAPP_NUMBER = "5213322705363"; // Cambia este número
```

### Modificar mensajes predefinidos

Los mensajes están en `src/constants/contact.js` en el objeto `MESSAGES`:
- `HERO` - Mensaje desde la sección principal
- `PILOT_PLAN` - Mensaje para plan piloto
- `MONTHLY_PLAN` - Mensaje para plan mensual
- `FINAL_CTA` - Mensaje desde el CTA final

### Actualizar contenido

- **Texto**: Edita los componentes en `src/components/`
- **Estilos**: Modifica `src/index.css` o los estilos inline en los componentes
- **Colores principales**: Busca las variables CSS en `src/index.css`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm start` - Alias para `npm run dev`
- `npm run build` - Crea build de producción
- `npm run preview` - Previsualiza el build
- `npm run deploy` - Despliega a Vercel (producción)

## 🌐 Repositorio Git

El proyecto está conectado a:
- **GitHub**: `https://github.com/assistflowmx/assistflowmx.git`
- **Rama principal**: `main`

### Comandos Git útiles

```bash
# Ver estado actual
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Tu mensaje"

# Subir cambios
git push origin main

# Verificar configuración remota
git remote -v
```

## 🎯 Estado Actual del Proyecto

✅ Git configurado y conectado
✅ Vercel configurado con `vercel.json`
✅ Dependencias instaladas
✅ Build funcionando correctamente
✅ Estructura de componentes organizada
✅ Hooks personalizados implementados

## 📝 Tecnologías Utilizadas

- **React 18.2.0** - Biblioteca UI
- **Vite 5.2.0** - Build tool y dev server
- **CSS3** - Estilos personalizados

## 📄 Licencia

MIT License - Ver archivo LICENSE para detalles.

## 💬 Soporte

Para modificaciones o soporte técnico, contacta al equipo de desarrollo.