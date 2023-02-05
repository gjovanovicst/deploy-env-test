# Hello World TypeScript Project

This is a simple TypeScript project that demonstrates the basics of building a web application with TypeScript and HTML. The project includes two pages: "home" and "about us", and uses routing to navigate between these pages.

## Getting Started

1. Clone the repository:

   ```shell
    git clone https://github.com/<YOUR_USERNAME>/hello-world-typescript-project.git
   ```

2. Change into the project directory:

   ```shell
   cd deploy-env-test
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Build the project:

   ```shell
   npm run build
   ```

5. Start the development server:

   ```shell
   npm start
   ```

The project will be available at `http://localhost:8080`.

## Project Structure

The project has the following structure:

```
deploy-env-test/
├── index.html
├── index.ts
├── home.html
├── about.html
├── www/
│ ├── index.html
│ ├── about.html
│ ├── index.js
│ └── index.js.map
├── package.json
├── LICENCE
└── README.md
```

## npm Tasks

The following npm tasks are available:

- `npm start`: Start the development server.
- `npm run build`: Build the project and place the output in the `/www` folder.
