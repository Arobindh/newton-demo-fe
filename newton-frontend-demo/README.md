# Video Game Catalogue Application

A modern Angular application for managing a video game catalogue with full CRUD operations.

## Tech Stack

### Core Framework
- **Angular 21.1.0** - Latest Angular framework with standalone components
- **TypeScript 5.7.2** - Strongly-typed JavaScript superset
- **RxJS 7.8.0** - Reactive programming with observables

### UI Framework
- **Bootstrap 5** - Responsive CSS framework for styling and layout
- **Modern Angular Control Flow** - Using `@if`, `@for`, `@empty` syntax (Angular 17+)

### Form Management
- **Template-Driven Forms** - Angular FormsModule with two-way data binding
- **Custom Validation** - Comprehensive field validation with user-friendly error messages

### State Management
- **BehaviorSubject & Subject** - RxJS-based state management in services
- **Observable Pattern** - Reactive data streams for games, errors, and loading states

### HTTP Communication
- **HttpClient** - Angular's built-in HTTP service for REST API calls
- **Environment Configuration** - Separate configs for development and production

### Architecture
- **Standalone Components** - Modern Angular component architecture (no NgModules)
- **Service Layer** - Centralized GameService for API communication
- **Shared Components** - Reusable AlertComponent and LoadingSpinnerComponent
- **Constants/Labels** - Externalized strings and validation messages

### Change Detection
- **Default Strategy** - For page components (HomeComponent, EditComponent)
- **OnPush Strategy** - For pure presentational components (AlertComponent, LoadingSpinnerComponent)

### Routing
- **Angular Router** - Client-side routing with route parameters
- **Lazy Loading Ready** - Structure supports code splitting

## Key Features

✅ **Game List Display** - View all games in a responsive table  
✅ **Edit Games** - Update game details with validation  
✅ **Error Handling** - User-friendly error messages for API failures  
✅ **Loading States** - Visual feedback during data fetching  
✅ **Form Validation** - Required fields, min/max length, numeric constraints  
✅ **Responsive Design** - Mobile-friendly Bootstrap layout  
✅ **Reusable Components** - DRY principle with shared alert and spinner components  

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

## API Configuration

Configure the backend API URL in:
- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

## Code Quality Highlights

- ✅ Externalized strings and constants
- ✅ Type safety with TypeScript
- ✅ Immutable state updates
- ✅ Error handling and user feedback
- ✅ Responsive and accessible UI
- ✅ Component reusability

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
