# CLAUDE.md - Project Guidelines

## Build & Development Commands
- `npm run dev` - Start development server with turbopack
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style Guidelines
- **TypeScript**: Use strict mode, proper type annotations for all functions and variables
- **Components**: Functional components with proper React hooks usage
- **Imports**: Use path aliases with `@/*` for src directory imports
- **Formatting**: 
  - 2-space indentation
  - No trailing commas
  - Semicolons required
- **Naming**: 
  - PascalCase for components and types
  - camelCase for variables and functions
  - Use descriptive, semantic names
- **Error Handling**: Use try/catch for async operations, provide meaningful error messages
- **CSS**: Use className approach with Tailwind utility classes
- **File Structure**: Group related components and utilities in appropriate directories
- **Comments**: Only add comments for complex logic or non-obvious implementations

This project is built with Next.js 15, React 19, and TypeScript, focusing on creating a central hub for Aiptimization practices and standards.