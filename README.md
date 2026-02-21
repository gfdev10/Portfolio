# Gastón Ferrari - Portfolio Profesional

Este repositorio contiene mi portfolio profesional, desarrollado con **Next.js 15**, **TypeScript** y **Tailwind CSS**. El proyecto esta estructurado siguiendo los principios de **Clean Architecture** para garantizar escalabilidad, mantenibilidad y una clara separación de responsabilidades.

## 🚀 Tecnologías Principales

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/)
- **Formularios**: [Web3Forms](https://web3forms.com/)

## 🏗️ Arquitectura del Proyecto

El código se organiza siguiendo una estructura modular dentro de la carpeta `src/`, optimizada para el crecimiento futuro:

```text
src/
├── app/            # Rutas y configuración de Next.js
├── core/           # Entidades de dominio y lógica de negocio pura
├── modules/        # Módulos específicos por funcionalidad (Feature-first)
├── shared/         # Componentes, hooks y utilidades compartidas
│   ├── components/ # Componentes de UI reutilizables
│   ├── hooks/      # Hooks personalizados
│   └── lib/        # Configuraciones y datos centralizados
└── styles/         # Estilos globales y tokens de diseño
```

### Características Principales:
- **Modularidad**: Componentes desacoplados y reutilizables.
- **Tipado Estricto**: Uso extensivo de TypeScript para prevenir errores en tiempo de desarrollo.
- **Rendimiento**: Optimización avanzada mediante Server Components y carga diferida.
- **SEO**: Optimizado para buscadores con metadatos dinámicos.

## 🛠️ Configuración Local

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
   Crea un archivo `.env.local` en la raíz basado en `.env.example`:
   ```text
   NEXT_PUBLIC_CONTACT_FORM_KEY=tu_clave_de_web3forms
   ```

4. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

5. **Construir para producción**:
   ```bash
   npm run build
   npm start
   ```

## 📩 Contacto

Si tienes alguna pregunta o propuesta, no dudes en contactarme a través del formulario en mi portfolio o vía LinkedIn.

---
Desarrollado por **Gastón Ferrari**.
