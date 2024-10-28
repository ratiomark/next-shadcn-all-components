# Shadcn All-Included Template

## Description

A Next.js template integrated with shadcn/ui, including all shadcn/ui components. Configured with TypeScript and Tailwind CSS to ensure a consistent and efficient development workflow.

## Features

- **Next.js v14.2.16:** Provides server-side rendering, routing, and performance optimizations.
- **shadcn/ui:** All UI components from the shadcn/ui library are included.
- **Tailwind CSS v3.4.1:** Utilizes utility-first CSS for rapid styling and customization.
- **TypeScript v5:** Ensures type safety and enhanced developer experience.
- **Path Aliases:** Simplifies imports with predefined aliases in `tsconfig.json`.

## Installation

Install dependencies using your preferred package manager.

```bash
npm install
```

```bash
pnpm install
```

```bash
yarn install
```

## Usage

Start the development server, build the project, and start the production server using your preferred package manager.

### npm

- **Start Development Server:**

  ```bash
  npm run dev
  ```

- **Build Project:**

  ```bash
  npm run build
  ```

- **Start Production Server:**

  ```bash
  npm run start
  ```

### pnpm

- **Start Development Server:**

  ```bash
  pnpm run dev
  ```

- **Build Project:**

  ```bash
  pnpm run build
  ```

- **Start Production Server:**

  ```bash
  pnpm run start
  ```

### yarn

- **Start Development Server:**

  ```bash
  yarn dev
  ```

- **Build Project:**

  ```bash
  yarn build
  ```

- **Start Production Server:**

  ```bash
  yarn start
  ```

## Project Structure

```
_root
├── public
│   └── fonts
│       ├── GeistMonoVF.woff
│       └── GeistVF.woff
├── src
│   ├── app
│   │   └── (Your app files here)
│   └── shared
│       ├── components
│       │   └── ui
│       │       ├── accordion.tsx
│       │       ├── alert-dialog.tsx
│       │       └── (...) [Other shadcn components]
│       ├── hooks
│       └── lib
│           └── utils.ts
└── ...config files
```

## Configuration Details

### TypeScript Configuration (`tsconfig.json`)

- **Base URL:** `.`
- **Path Aliases:**
  - `@/*` → `./src/*`
  - `#/*` → `./src/shared/components/ui/*` _(Remove the `#` alias if not needed)_

#### Example Usage of Aliases

```typescript
// Importing a component using the '@' alias
import MyComponent from '@/shared/components/MyComponent';

// Importing a UI component using the '#' alias
import Accordion from '#/accordion';
```

If the `#` alias is not required in your project, you can safely remove it from the `tsconfig.json` to avoid unnecessary complexity.

## Included Components

All UI components from the shadcn/ui library are included and available for use in your project. You can find them under `src/shared/components/ui/`.

## Aliases Usage

Path aliases are configured in `tsconfig.json` to simplify imports:

- `@/*` → `./src/*`
- `#/*` → `./src/shared/components/ui/*` _(Remove the `#` alias if not needed)_

### Example Imports

```typescript
// Using the '@' alias
import Header from '@/shared/components/Header';
import { useAuth } from '@/shared/hooks/useAuth';

// Using the '#' alias
import Button from '#/button';
import Dialog from '#/alert-dialog';
```

## Scripts

- **Development:** `npm run dev` | `pnpm run dev` | `yarn dev`
- **Build:** `npm run build` | `pnpm run build` | `yarn build`
- **Start:** `npm run start` | `pnpm run start` | `yarn start`
- **Lint:** `npm run lint` | `pnpm run lint` | `yarn lint`

## Dependencies

Key dependencies and their versions:

- **@radix-ui/react-accordion v1.2.1**
- **@radix-ui/react-alert-dialog v1.1.2**
- **react-hook-form v7.53.1**
- **zod v3.23.8**
- **Next.js v14.2.16**
- **shadcn/ui**
- **Tailwind CSS v3.4.1**
- **TypeScript v5**
- _(Refer to `package.json` for the full list of dependencies)_

## License

This project is licensed under the [MIT License](LICENSE).
