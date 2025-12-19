## Client

### Development Guide

#### 0. Prerequisites

1. Install package manager
    ```bash
    npm install --global corepack@latest
    corepack enable pnpm
    ```
2. Add ENV variables
    ```plaintext
    VITE_SERVER_HOST=http://...
    ```

#### 1. Install Dependencies
```bash
pnpm install
```
- Add a package
    ```bash
    pnpm add <pkg>
    ```
- Add a dev dependency
    ```bash
    pnpm add -D <pkg>
    ```

#### 2. Run Dev Server
```bash
pnpm dev
```

#### 3. Build
```bash
pnpm build
```

#### 4. Production
```bash
pnpm preview
```
