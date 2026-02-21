# Gastón Ferrari - Portfolio Profesional

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer)

Bienvenido al repositorio de mi portfolio profesional. Este proyecto ha sido desarrollado siguiendo principios de **Clean Architecture** para garantizar escalabilidad, mantenibilidad y una clara separación de responsabilidades, al mismo tiempo que ofrece un diseño moderno mediante el uso de Glassmorphism y animaciones fluidas.

##  Tecnologías Principales

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/)
- **Formularios**: [Web3Forms](https://web3forms.com/) para el manejo de contactos.

## Arquitectura del Proyecto

El código se organiza siguiendo una estructura modular dentro de la carpeta `src/`, optimizada para el crecimiento futuro:

```text
src/
├── app/            # Rutas, Layout principal y configuración de Next.js
├── shared/         # Componentes y utilidades compartidas
│   ├── components/ # Componentes de UI reutilizables (Hero, Secciones, Sidebar)
│   ├── lib/        # Fuente centralizada de datos (portfolio-data.ts)
└── styles/         # Estilos globales y tokens de diseño personalizados
```

### Características Destacadas
- **Diseño Moderno**: Implementación moderna con efectos *Glassmorphism* limpios y estéticos.
- **Tipado Estricto**: Uso extensivo de TypeScript para prevenir errores en tiempo de desarrollo.
- **Rendimiento**: Optimización avanzada mediante Server Components y carga diferida.
- **SEO**: Meta etiquetas y arquitectura optimizada para buscadores.

## Configuración Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/gfdev10/Portfolio.git
   cd Portfolio
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env.local` en la raíz (puedes basarte en `.env.example` si existe) e incluye tus claves de servicio:
   ```env
   NEXT_PUBLIC_CONTACT_FORM_KEY=tu_clave_de_web3forms
   ```

4. **Ejecutar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   *Accede a [http://localhost:3000](http://localhost:3000) en tu navegador.*

5. **Construir para producción**:
   ```bash
   npm run build
   npm start
   ```

## Contacto

Si tienes alguna pregunta, propuesta de proyecto o interés profesional, no dudes en contactarme directamente a través de mi portfolio o vía [LinkedIn](www.linkedin.com/in/gastonferrari98).

---
Desarrollado con pasión y excelencia por **Gastón Ferrari**.
