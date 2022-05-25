# Nest Clean Project

### Removed testing env for future customization

- script level
  - "test": "jest",
  - "test:watch": "jest --watch",
  - "test:cov": "jest --coverage",
  - "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
  - "test:e2e": "jest --config ./test/jest-e2e.json"
- dev deps
  - "@types/jest": "27.5.0"
  - "@types/supertest": "^2.0.11"
  - "jest": "28.0.3"
  - "supertest": "^6.1.3"
  - "ts-jest": "28.0.1"
- jest config:
  - "jest": {
    "moduleFileExtensions": [
    "js",
    "json",
    "ts"
    ],
    "rootDir": "src",
    "testRegex": "._\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
    "\*\*/_.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
    }

### Code structure and linting

- updated prettier script:
  - "format": "prettier --write \"src/**/\*.ts\" \"test/**/\*.ts\""
- updated lint script:
  - "lint": "eslint \"{src,apps,libs,test}/\*_/_.ts\" --fix"

### Logging

- added custom winston logger
- integrated into default nestjs log flow
- added request.logger.middleware to core
- added logging to global exception filter
- logging for errors also takes error stack

### Errors

- custom error handling via error-responses with error classes
- added global exception filter

### DB

- db.provider is added as a boilerplate code to customize the place of DB connection initialization
