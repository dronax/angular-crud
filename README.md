# Simple Angular CRUD Application

## Task

Create a Simple CRUD Application with Reactive Programming, Cross-Component Communication, State Management, and Custom Pipe/Directive.

## Requirements

### 1. Set Up the Project

- Created a new Angular project using Angular CLI.
- Set up routing for the application.

### 2. Create a Model

- Defined a model for a simple entity, `Product` with the following properties:
  - `id: number`
  - `name: string`
  - `description: string`
  - `price: number`

### 3. Build Components

- Created the following components:
  - `ProductListComponent`: Displays a list of products.
  - `ProductDetailComponent`: Displays details of a selected product.
  - `ProductEditComponent`: Form to edit a product.
  - `ProductSearchComponent`: A separate component to handle product search and emit search events.

### 4. Implement Services with RxJS

- Created a service `ProductService` to handle CRUD operations (using a mock API or in-memory data for simplicity).
- Utilized RxJS Observables and Operators for handling data streams and asynchronous operations.

### 5. Routing

- Set up routes for the components:
  - `/products` for the product list.
  - `/products/:id` for the product details.
  - `/products/:id/edit` for editing a product.

### 6. Form Handling with Reactive Forms

- Implemented reactive forms for creating and editing products.
- Included form validation using reactive forms.

### 7. Data Binding and Async Operations

- Implemented data binding to display the product list and details.
- Used RxJS Observables to fetch and display data.
- Implemented search functionality in the product list using the `ProductSearchComponent` and RxJS operators like `debounceTime` and `distinctUntilChanged`.

### 8. Cross-Component Communication

- Implemented cross-component communication using an Event Emitter and Observer pattern with RxJS.
- Used a shared service to emit search terms from `ProductSearchComponent` and listen to them in `ProductListComponent`.

### 9. Create a Custom Pipe

- Implemented a custom pipe called `CurrencyFormatPipe` to format the product price with a currency symbol.

### 10. Create a Custom Directive

- Implemented a custom directive called `HighlightDirective` to highlight a product when the mouse hovers over it.

### 11. Error Handling

- Displayed appropriate error messages in the UI (wherever deemed necessary).

### 12. Styling

- Added basic styling to make the UI user-friendly (CSS/SCSS).

## Steps to Create the Application

### Set Up the Project

First, I set up the Angular project using Angular CLI:

```bash
ng new angular-crud-app
cd angular-crud-app
ng serve
```

### For Running The app

```bash
git clone https://github.com/dronax/angular-crud
cd angular-crud
npm i --legacy-peer-deps
ng serve
```

### Running With Docker Image

```bash
git clone https://github.com/dronax/angular-crud
cd angular-crud
docker build -t crud-app .
docker run -p -d 4200:4200 crud-app

```
