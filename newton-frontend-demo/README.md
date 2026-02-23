# Video Game Catalogue Application

A modern Angular application for managing a video game catalogue with full CRUD operations.

## Tech Stack

### Core Framework
- **Angular 21.1.0** - Latest Angular framework with standalone components
- **TypeScript 5.7.2** - Strongly-typed JavaScript superset
- **RxJS 7.8.0** - Reactive programming with observables

### UI Framework
- **Bootstrap 5** - Responsive CSS framework for styling and layout

### Architecture
- **Standalone Components** - Angular component architecture
- **Service Layer** - Centralized GameService for API communication
- **Shared Components** - Reusable AlertComponent and LoadingSpinnerComponent
- **Constants/Labels** - Externalized strings and validation messages


## Project Structure

```
src/app/
├── home/                          # Game list page
│   ├── home.component.ts/html/css
│   └── home.labels.ts
├── edit/                          # Game edit page
│   ├── edit.component.ts/html/css
│   └── edit.labels.ts
├── service/
│   ├── game.service.ts            # API service
│   └── game.service.messages.ts
├── model/
│   ├── game.ts
│   └── game-response.ts
└── shared/
    ├── components/
    │   ├── alert/                 # Reusable alert component
    │   └── loading-spinner/       # Loading indicator
    └── constants/
        ├── app-labels.constants.ts
        ├── age-ratings.constants.ts
        └── validation-messages.constants.ts
```

## Development Server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.


