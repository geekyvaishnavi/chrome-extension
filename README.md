# Todo Chrome Extension

A simple **Todo Chrome Extension** built with **React** and **Vite**.
This extension allows users to manage their tasks directly from the browser popup.


---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

## Development

Start the development server:

```bash
npm run dev
```

Vite will start a local development server and provide a preview URL.

---

## Build

To create a production build:

```bash
npm run build
```

The optimized extension build will be generated in the **`dist`** folder.

---

## Load the Extension in Chrome

1. Build the project:

```bash
npm run build
```

2. Open Chrome and go to:

```
chrome://extensions
```

3. Enable **Developer Mode** (top right).

4. Click **Load unpacked**.

5. Select the **`dist`** folder.

The extension will now appear in your browser.

---

## Project Structure

```
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── background
│   │   └── background.js
│   ├── icons
│   │   ├── todoIcon128.png
│   │   ├── todoicon128Full.jpg
│   │   ├── todoIcon24.png
│   │   └── todoIcon48.png
│   └── manifest.json
├── README.md
├── src
│   ├── content
│   │   └── content.js
│   ├── index.css
│   ├── index.jsx
│   ├── popup
│   │   ├── App.jsx
│   │   ├── App.scss
│   │   ├── App.test.js
│   │   └── custom.scss
│   └── utils
│       └── storage.js
├── structure.txt
└── vite.config.js
```

---

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Starts the Vite development server  |
| `npm run build`   | Builds the extension for production |
| `npm run preview` | Preview the production build        |

---

## Contributing

Contributions are welcome.
Feel free to fork the repository and submit a pull request with improvements.
