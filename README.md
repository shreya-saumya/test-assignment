# aspire test (aspire-test)

aspire test

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### E2E testing

```bash
npm run test:e2e
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

## Explanation

#### Assumptions

1. New card validity and numbers are created randomly
2. Transactions List and Cards List are data variable created in Store

### creating layouts

Layout is the overall skeleton where the pages will be injected whenever a route matches.

### creating pages

Individual pages injected in layout for distinct routes

### creating components

codes of pages are split into atomic components which can be reused by any pages in routes

### creating stores

Modular store based on functionality like cards, user, dashboard, etc

### creating routes

Breaking routes in modules for example, dashboard routes, settings routes, card routes, can be different from auth routes.

### creating helpers

helpers are the utility functions created for a component/page

# 📦 Project Directory Structure

This document outlines the structure and purpose of each folder in the project.

```bash
├── src/
│   ├── assets/              # images and svgs
│   ├── components/
│       ├── card/            # components based on the cards page
│       ├── dashboard/       # similarly, components used in dashboard page
│       ├── transactions/
│       ├── ...
│   ├── layouts/             # Overall skeleton for pages with same layout structure
│   ├── pages/               # Route pages (each maps to a route)
│         ├── cards/
│         ├── credit/
│         ├── dashboard/
│         ├── payments/
│         ├── settings/
│         ├── ...
│   ├── router/              # Vue Router configuration
│   ├── stores/              # Pinia stores (or Vuex if older)
│   ├── helpers/             # Helper functions like creating random card digits
│   ├── App.vue              # Root Vue component
```
