# Case Lab KEA

[![Netlify Status](https://api.netlify.com/api/v1/badges/8ca5dec9-7e67-4286-9fad-339942ae2f09/deploy-status)](https://app.netlify.com/sites/circularlab/deploys)

## 💻 Install on local PC

**Clone project to local folder**

```sh
git clone https://github.com/kodeaberne/circularlab.git
```

**Install dependencies**

```sh
npm install
```

**Create .env file in project root folder**

```sh
touch .env
```

**Add following content to .env**

```
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

```

```

**Run dev server to see if Astro is working**

```sh
npm run dev
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
