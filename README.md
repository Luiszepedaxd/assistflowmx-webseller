# AssistFlowMX

Landing page para AssistFlowMX - Automatizacion de atencion al cliente en WhatsApp.

## Descripcion

Sitio web responsivo que presenta los servicios de automatizacion de AssistFlowMX, enfocado en cotizaciones automaticas y atencion 24/7 a traves de WhatsApp.

## Caracteristicas

- Diseno responsivo optimizado para mobile
- Animaciones suaves y efectos hover
- Mockup interactivo de WhatsApp
- Optimizado para SEO
- Listo para deployment en Vercel

## Estructura del proyecto

```
assistflowmx/
├── index.html          # Pagina principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interactividad
├── vercel.json         # Configuracion de Vercel
├── package.json        # Metadatos del proyecto
├── .gitignore         # Archivos a ignorar en Git
└── README.md          # Este archivo
```

## Deployment en Vercel

1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectara automaticamente la configuracion
3. El sitio se desplegara en: https://assistflowmx.vercel.app

Para usar tu dominio personalizado:
1. Ve a la configuracion del proyecto en Vercel
2. Agrega `assistflowmx.online` en la seccion de dominios
3. Configura los DNS segun las instrucciones de Vercel

## Desarrollo local

Para probar localmente:

```bash
# Opcion 1: Servidor Python
python -m http.server 3000

# Opcion 2: Servidor Node.js (si tienes http-server instalado)
npx http-server -p 3000

# Opcion 3: Live Server en VS Code
# Instala la extension Live Server y haz clic derecho en index.html
```

## Personalizacion

### Cambiar numero de WhatsApp

Busca y reemplaza `5215500000000` con tu numero real en:
- `index.html` (todos los enlaces de WhatsApp)

### Modificar colores

Los colores principales estan definidos en `styles.css`:
- Azul: `#2D9CDB`
- Verde: `#27AE60`
- Fondo: `#fff`

### Actualizar contenido

Todo el texto esta en `index.html` y puede ser modificado directamente.

## Optimizaciones incluidas

- Fuentes optimizadas con `font-display: swap`
- Imagenes lazy loading
- CSS minificado para produccion
- Headers de seguridad configurados
- Animaciones con `prefers-reduced-motion`

## Soporte

Para modificaciones o soporte tecnico, contacta al equipo de desarrollo.

## Licencia

MIT License - Ver archivo LICENSE para detalles.

