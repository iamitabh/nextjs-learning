// Lesson 04

// React Server Component

// React Server Components is a new architecture introduced by the React team in version 18 which was
// quickly embraced by Next.js
// The architecture introduces a new way of creating React componenets, splitting them into two types:
// 1. Server components
// 2. Client components

// Server Components: In next.js, all components are Server components by default. They have the ability
// to run tasks like reading files or fetching data from a database. However, they don't have the ability
// to use hooks or handle user interactions.

// Client Components: To create a Client Components, it's necessary to add "use client" at the top of the
// component file. Client components can't perform tasks like reading files, but they have the ability to 
// use hooks and manage interactions.