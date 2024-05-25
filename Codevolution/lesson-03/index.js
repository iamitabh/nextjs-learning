// Lesson 03

// Files and Folder Structure of Next.js Application

// Some Files in Next.js Application

// "package.json" => contains project dependencies

// Some configuration files
// "next.config.js" => nextjs configuration files
// "tsconfig.json" => typescript configuration files
// ".eslintrc.json" => eslint configuration files
// "postcss.config.js" & "tailwind.config.ts" => tailwind configuration files

// Some files which we shouldn't touch
// ".gitignore"
// "next-env.d.ts"
// "package-lock.json"
// "README.md"

// Some Folders in Next.js Application

// "node_modules" => contains project dependencies
// "public" => contains all the static assests to be served
// "src"/"app" => contains 4 files, 'favicon.ico', 'global.css', 'layout.tsx', 'page.tsx'

// "global.css" => the css file to apply css to entire next.js application
// "layout.tsx" => is the UI components shared between different pages
// "page.tsx" => which is the unique UI for that route. This page.tsx replace children prop in layout.tsx