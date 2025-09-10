# Roadmap de Proyecto React + TypeScript + Tailwind + Supabase (One Piece)

---

## Fase 0: Fundamentos de JS/TS
**Objetivo:** Crear estructuras de datos tipadas y funciones básicas.

**Ejercicios:**
- Crear un array de personajes con propiedades: `name`, `bounty`, `crew`, `abilities`.
- Escribir funciones para:
  - Filtrar personajes por tripulación.
  - Ordenar personajes por bounty.
  - Mostrar habilidades de un personaje en string separado por comas.
- Crear interfaces para tipar los personajes y las funciones.

**Resultado:** Datos tipados listos para usar en React.

---

## Fase 1: React básico + TypeScript
**Objetivo:** Crear la UI modular.

**Ejercicios:**
- Crear un proyecto React + TypeScript con Vite.
- Crear componentes:
  - `CharacterCard` → muestra nombre, tripulación, bounty y habilidades.
  - `CharacterList` → renderiza una lista de `CharacterCard`.
  - `Button` → botón reutilizable con `props`.
- Pasar props tipadas con interfaces.
- Usar `useState` para manejar la lista de personajes.
- Renderizado condicional: mostrar “No hay personajes” si la lista está vacía.
- Añadir eventos (`onClick`) a botones para agregar personajes a favoritos.

**Resultado:** UI funcional con estado local y componentes modulares.

---

## Fase 2: Hooks avanzados y lógica de datos
**Objetivo:** Conectar UI con datos dinámicos.

**Ejercicios:**
- Usar `useEffect` para cargar personajes desde un JSON local o `json-server`.
- Implementar funciones `GET` y `POST` simuladas con `fetch()`:
  - GET → traer lista de personajes.
  - POST → añadir un personaje nuevo.
- Formulario controlado para añadir personajes.
- Implementar filtrado y búsqueda en la lista de personajes.

**Resultado:** Datos dinámicos manejados por hooks, UI actualizada automáticamente.

---

## Fase 3: Tailwind CSS
**Objetivo:** Hacer la UI atractiva y responsiva.

**Ejercicios:**
- Instalar y configurar Tailwind.
- Estilizar componentes:
  - `CharacterCard` con sombras, bordes y padding.
  - `Button` con colores y hover.
  - Layout general: `Header`, `Sidebar`, `Main`, `Footer`.
- Responsividad: mostrar la lista en columnas según el tamaño de pantalla.
- Añadir modales o tooltips para habilidades especiales de personajes.

**Resultado:** UI profesional y responsiva, lista para producción.

---

## Fase 4: Supabase
**Objetivo:** Persistir datos reales en la nube.

**Ejercicios:**
- Crear proyecto en Supabase y tabla `characters`.
- Configurar `supabaseClient.ts`.
- Traer la lista de personajes desde Supabase (`GET`).
- Añadir personajes o favoritos con `POST`.
- Actualizar UI automáticamente al hacer cambios en la BD.
- Probar `DELETE` para eliminar un personaje de favoritos.

**Resultado:** App funcional con backend real, persistencia de datos.

---

## Fase 5: Preparación para Next.js
**Objetivo:** Convertir tu app React en Next.js.

**Ejercicios:**
- Crear proyecto Next.js + TypeScript + Tailwind.
- Copiar componentes (`CharacterCard`, `CharacterList`, `Button`, `Header`, etc.) a `/components`.
- Crear páginas en `/pages` (`index.tsx`, `/favorites.tsx`).
- Usar `getServerSideProps` o `getStaticProps` para cargar datos desde Supabase.
- Mantener toda la lógica de UI sin cambios.
- Implementar rutas dinámicas si quieres páginas individuales de personajes (`/characters/[id].tsx`).

**Resultado:** App escalable, optimizada y lista para producción con Next.js.

---

## Fase 6: Extras y mejoras
**Ejercicios opcionales:**
- Filtrado avanzado y búsqueda por tripulación, bounty o habilidades.
- Ordenar por bounty o nombre.
- Autenticación de usuarios con Supabase Auth.
- Guardar favoritos por usuario.
- Optimización: `React.memo`, lazy loading de imágenes, animaciones con Tailwind.

**Resultado:** App profesional lista para publicar.

---


**Consejo:** Cada fase se puede hacer con **datos locales primero**, y luego migrar a Supabase y Next.js sin rehacer nada. Esto mantiene tu proyecto limpio y modular.

