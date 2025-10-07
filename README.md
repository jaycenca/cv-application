# CV Applcation

This is a very simple react based application to generate curriculum vitae. Project relies heavily on react hooks specifically `useState` for data. [Live Preview](https://cv-project.jaycenca-github.workers.dev/)

## Structure

There are 3 main components under root

- main.jsx (In this they are defined inside file)
- Components
  - Education.jsx
  - Information.jsx
  - WorkExperience.jsx

- Shared Components
  - Textbox

All of the data/state is passed into the root `App` component and passed via reference to the other components.

## Build and Install

To run locally clone the repo and run

```bash
npm i
npm run dev
```

To build locally 

```bash
npm run build
```