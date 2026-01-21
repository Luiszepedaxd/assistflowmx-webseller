# AssistFlowMX - Landing Page

Landing page comercial para generación de leads vía WhatsApp, diseñada para PYMEs, emprendedores y comercios locales en México.

## 🚀 Características

- ✅ React + Vite + Tailwind CSS
- ✅ Diseño 100% responsive
- ✅ One-page con scroll suave
- ✅ Animaciones y hover effects
- ✅ Botón de WhatsApp flotante
- ✅ Arquitectura modular siguiendo principios SOLID
- ✅ Componentes separados y reutilizables
- ✅ Secciones: Hero, Servicios, Paquetes, Beneficios, Proceso, FAQ, CTA
- ✅ Optimizado para conversión

## 📁 Estructura del Proyecto

```
assistflowmx/
├── src/
│   ├── components/
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
│   ├── constants/
│   │   └── whatsapp.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── vercel.json
└── README.md
```

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## ⚙️ Configuración

### Número de WhatsApp

Edita `src/constants/whatsapp.js`:

```javascript
export const WHATSAPP_NUMBER = "521234567890"; // Cambia por tu número real
```

**Formato:** Código de país + número sin espacios ni guiones
- México: `521234567890`

### Mensajes de WhatsApp

Personaliza los mensajes predeterminados en `src/constants/whatsapp.js`:

```javascript
export const WHATSAPP_MESSAGES = {
  general: "Hola, me interesa conocer más sobre los servicios de AssistFlowMX",
  basico: "Hola, me interesa el Paquete Básico de $1,200 MXN",
  interactivo: "Hola, me interesa el Paquete Interactivo de $2,200 MXN",
  publicitaria: "Hola, me interesa el Paquete Landing Publicitaria de $3,200 MXN",
};
```

## 🎨 Personalización

### Colores principales

El diseño usa principalmente:
- **Emerald** (verde): para CTAs y elementos de acción
- **Cyan**: para acentos secundarios
- **Slate**: para fondos y textos

Puedes modificar los colores buscando y reemplazando las clases de Tailwind en los componentes.

### Contenido

Cada sección tiene su propio componente. Modifica el contenido directamente en:
- `WhatWeOfferSection.jsx` - características
- `PricingSection.jsx` - paquetes y precios
- `BenefitsSection.jsx` - beneficios
- `ProcessSection.jsx` - pasos del proceso
- `FAQSection.jsx` - preguntas frecuentes

## 📱 Secciones

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

## 🚀 Deploy

### Vercel (Recomendado)

El proyecto está configurado para Vercel. Solo necesitas:

1. Conectar tu repositorio a Vercel
2. Vercel detectará automáticamente la configuración en `vercel.json`
3. El deploy se hará automáticamente en cada push

O manualmente:

```bash
npm run build
npx vercel --prod
```

### Otras plataformas

- **Netlify**: Arrastra la carpeta `dist` después de `npm run build`
- **GitHub Pages**: Con GitHub Actions

## 🔧 Tecnologías

- **React 18** - Biblioteca UI
- **Vite** - Build tool y dev server
- **Tailwind CSS 4** - Framework CSS
- **PostCSS** - Procesador CSS

## 📝 Notas importantes

- El diseño deja **MUY claro** que no incluye hosting ni dominio (aparece en múltiples secciones)
- Todos los CTAs dirigen a WhatsApp con mensajes predefinidos
- El texto está en español mexicano, optimizado para PYMEs locales
- Los precios están en MXN
- Arquitectura modular siguiendo principios SOLID para fácil mantenimiento

## 📄 Licencia

MIT

---

**AssistFlowMX** - Tu sitio web listo para anunciarse, sin complicaciones.
