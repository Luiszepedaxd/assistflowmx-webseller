# AssistFlowMX - Landing Page

Landing page comercial para generación de leads vía WhatsApp, diseñada para PYMEs, emprendedores y comercios locales en México.

## 🏗️ Arquitectura del Proyecto

Este proyecto está estructurado siguiendo los **principios SOLID**:

- **Single Responsibility**: Cada componente tiene una única responsabilidad
- **Open/Closed**: Abierto para extensión, cerrado para modificación
- **Liskov Substitution**: Componentes intercambiables
- **Interface Segregation**: Hooks y constantes separados por funcionalidad
- **Dependency Inversion**: Dependencias inyectadas, no hardcodeadas

### Estructura de Carpetas

```
assistflowmx/
├── src/
│   ├── components/          # Componentes React (uno por archivo)
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── WhatWeOfferSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── FinalCTASection.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppFloatingButton.jsx
│   ├── constants/           # Constantes y configuración
│   │   ├── whatsapp.js      # Configuración de WhatsApp
│   │   └── content.js       # Contenido estático
│   ├── hooks/               # Hooks personalizados
│   │   ├── useScrollVisibility.js
│   │   └── useScrollState.js
│   ├── styles/              # Estilos globales
│   │   └── GlobalStyles.jsx
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos de Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json              # Configuración de Vercel
└── .gitignore               # Archivos ignorados por Git
```

## 🚀 Instalación

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar número de WhatsApp

Edita `src/constants/whatsapp.js`:

```javascript
export const WHATSAPP_NUMBER = "521234567890"; // Cambia por tu número real
```

**Formato:** Código de país + número sin espacios ni guiones
- México: `521234567890`

### 3. Personalizar mensajes de WhatsApp

Edita `src/constants/whatsapp.js`:

```javascript
export const WHATSAPP_MESSAGES = {
  general: "Hola, me interesa conocer más sobre los servicios de AssistFlowMX",
  basico: "Hola, me interesa el Paquete Básico de $1,200 MXN",
  interactivo: "Hola, me interesa el Paquete Interactivo de $2,200 MXN",
  publicitaria: "Hola, me interesa el Paquete Landing Publicitaria de $3,200 MXN",
};
```

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run preview      # Previsualiza el build

# Linting
npm run lint         # Ejecuta ESLint
```

## 📦 Configuración de Git

### 1. Inicializar repositorio (si no está inicializado)

```bash
git init
```

### 2. Agregar archivos al staging

```bash
git add .
```

### 3. Hacer commit inicial

```bash
git commit -m "Initial commit: Landing page con arquitectura SOLID"
```

### 4. Conectar con repositorio remoto

```bash
# Si ya tienes un repositorio en GitHub/GitLab
git remote add origin https://github.com/tu-usuario/assistflowmx.git
git branch -M main
git push -u origin main
```

### 5. Crear repositorio nuevo en GitHub

1. Ve a [GitHub](https://github.com/new)
2. Crea un nuevo repositorio (no inicialices con README)
3. Sigue los pasos 4 anteriores

## 🚀 Despliegue en Vercel

### Opción 1: Desde la línea de comandos

```bash
# Instalar Vercel CLI (si no lo tienes)
npm i -g vercel

# Hacer login
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

### Opción 2: Desde GitHub (Recomendado)

1. **Sube tu código a GitHub** (sigue los pasos de configuración de Git)

2. **Ve a [Vercel](https://vercel.com)** y haz login con GitHub

3. **Importa tu proyecto**:
   - Click en "Add New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite

4. **Configuración automática**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Variables de entorno** (si las necesitas):
   - Agrega variables en la sección "Environment Variables"

6. **Deploy**:
   - Click en "Deploy"
   - Vercel construirá y desplegará tu proyecto automáticamente

### Configuración de Vercel

El archivo `vercel.json` ya está configurado para:
- ✅ Build automático con Vite
- ✅ SPA routing (todas las rutas van a `index.html`)
- ✅ Optimizaciones de producción

## 🎨 Personalización

### Modificar contenido

Todo el contenido estático está en `src/constants/content.js`:
- `FEATURES`: Características principales
- `PACKAGES`: Paquetes y precios
- `BENEFITS`: Beneficios del servicio
- `PROCESS_STEPS`: Pasos del proceso
- `FAQS`: Preguntas frecuentes

### Modificar colores

Los colores principales están en las clases de Tailwind. Busca y reemplaza:
- `emerald-500`, `emerald-600` → tu color principal
- `cyan-500`, `cyan-400` → tu color secundario
- `slate-900`, `slate-800` → tus colores de fondo

### Agregar nuevas secciones

1. Crea un nuevo componente en `src/components/`
2. Importa y agrega en `src/App.jsx`
3. Sigue el patrón de los componentes existentes

## 📱 Estructura de Secciones

1. **Header** - Navegación fija con logo y CTA
2. **Hero** - Mensaje principal y llamada a acción
3. **Qué ofrecemos** - 4 características principales + nota sobre hosting
4. **Paquetes** - 3 paquetes con precios y CTAs individuales
5. **Beneficios** - 6 razones para elegir el servicio
6. **Proceso** - 4 pasos del proceso de trabajo
7. **FAQ** - Acordeón con preguntas frecuentes
8. **CTA Final** - Llamada a acción final
9. **Footer** - Links y copyright
10. **WhatsApp Flotante** - Botón que aparece al hacer scroll

## 🔧 Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **ESLint** - Linter para código

## 📝 Notas Importantes

- El diseño deja **MUY claro** que no incluye hosting ni dominio
- Todos los CTAs dirigen a WhatsApp con mensajes predefinidos
- El texto está en español mexicano, optimizado para PYMEs locales
- Los precios están en MXN
- El proyecto sigue principios SOLID para mantenibilidad

## 🐛 Solución de Problemas

### Error al hacer build

```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Error en Vercel

- Verifica que `vercel.json` esté en la raíz del proyecto
- Asegúrate de que `package.json` tenga el script `build`
- Revisa los logs de build en el dashboard de Vercel

### Estilos no se aplican

- Verifica que `src/index.css` tenga las directivas de Tailwind
- Asegúrate de que `tailwind.config.js` esté configurado correctamente
- Ejecuta `npm run dev` para ver cambios en tiempo real

## 📄 Licencia

Este proyecto es privado y está destinado para uso comercial de AssistFlowMX.

---

**AssistFlowMX** - Tu sitio web listo para anunciarse, sin complicaciones.
