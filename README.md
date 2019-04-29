# Node Service Template
Template project to speed up development of Node services with TypeScript, Koa and Jest.

## Instructions
- Install packages using `yarn` or `npm install`

### Development
- Run tests in watch mode with `yarn test`
- Run dev server with `yarn dev`

### Production
- Build application with `yarn build`
- Start application with `yarn start`

### Docker
- Build the Docker image with `docker build -t node-template .`
- Run Docker container with `docker run -p 4000:4000 -d node-template`
