# @sakmaral/lib

**Library of reusable helpers and components for UI and styling in React projects**

This is a collection of reusable React components and utility functions that help streamline your development process, increase maintainability, and improve UI consistency across projects.

## Installation

You can install the library using `yarn`, `npm`, or `pnpm`.

### Yarn

```sh
yarn add @sakmaral/lib
```

### Npm

```sh
npm install @sakmaral/lib

```

### Pnpm

```sh
pnpm install @sakmaral/lib
```

## Components

### **Box**

Container that extends div

| name | type              | description                                                   | example                                                            |
| ---- | ----------------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| $top | Integer \| String | Margin-top property. If it's a number, it's converted to rem. | `<Box $top={20}> ... </Box>` <br /> `<Box $top="20px"> ... </Box>` |
| ---- | ----------------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| $bg  | String            | Background color.                                             | `<Box $bg="lightgray"> ... </Box>`                                 |

### **Text**

A styled p component for text that supports dynamic font sizing, line height, color, font weight, and more. It is fully customizable through props

### **IsDesktop**

A component that hides its children on screens smaller than sm breakpoint (i.e., mobile and tablet-sized screens) and shows them on desktop-sized screens. You can also customize the display property for the component.

### **IsMobile**

A component that hides its children on screens larger than sm breakpoint (i.e., desktop-sized screens).
