# Sanity 5 Starter

This starter repository facilitates the creation of new Sanity Studio projects using the configuration described below.

To learn how to use a GitHub template repository, check
out [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

![project status](https://img.shields.io/badge/project_status-active-success?style=for-the-badge)

## Tech Stack

### Backend

- **Headless CMS**: [Sanity 5](https://www.sanity.io/)

## How to Update

To check for outdated packages, run `npm outdated`.

```bash
# Update dependencies (this will rewrite package-lock.json and package.json)
npm update --save
npm install --save-exact --save-dev prettier@latest
```

## Notes

- The GitHub Action `actions/setup-node@v6` relies on both `package.json` `engines` and `devEngines` to set the Node.js version and automatically cache npm dependencies.

## Dev Environment & Tools

- **System**: [Ubuntu](https://ubuntu.com/desktop)
- **Editor**: [VS Code](https://code.visualstudio.com/)
- **Formatter**: [Prettier](https://prettier.io/)
- **Linter**: [ESLint](https://eslint.org/)
- **AI assistant**: [GitHub Copilot](https://github.com/features/copilot)

## Copyright

© 2026 Johnny Gérard
