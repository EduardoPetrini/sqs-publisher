# SQS Publisher with LocalStack

A TypeScript application demonstrating AWS SQS operations using LocalStack for local development.

## Prerequisites

- Node.js (v16 or higher)
- LocalStack
- Docker (required for LocalStack)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## LocalStack Setup

1. Install and start LocalStack:

   ```bash
   docker run --rm -it -p 4566:4566 -p 4571:4571 localstack/localstack
   ```

2. The application is pre-configured to use LocalStack's endpoint. You can see this configuration in `index.ts`:
   ```typescript:index.ts
   startLine: 7
   endLine: 10
   ```

## Available Scripts

The following npm scripts are available:

- `npm run dev`: Run the application in development mode with hot-reloading.
- `npm run start`: Start the application.
- `npm run test`: Run the tests.

## Features

1. **Queue Management**

   - Create new SQS queues
   - List existing queues
   - Delete queues with a safety delay

2. **Utility Functions**
   - Random string generation for queue names
   - Promise-based AWS SDK operations
   - Error handling for all queue operations

## Code Examples

Here are some examples of how to use the application:

### Listing Queues

```typescript
import { listQueues } from "./lib/listQueues";
const queues = await listQueues(SQS);
```

### Creating a Queue

```typescript
import { createQueue } from "./lib/createQueue";
const SQS = new AWS.SQS({
  endpoint: "http://localhost:4566",
  sslEnabled: false,
});
const result = await createQueue(SQS, "test-queue-1");
```

### Deleting Queues

```typescript
import { deleteQueues } from "./lib/deleteQueues";
const SQS = new AWS.SQS({
  endpoint: "http://localhost:4566",
  sslEnabled: false,
});
const result = await deleteQueues(SQS, ["queue-url-1", "queue-url-2"]);
```
## Project Structure

├── lib/
│ ├── createQueue.ts - Queue creation
│ ├── deleteQueues.ts - Queue deletion
│ ├── listQueues.ts - Queue listing
│ └── utils.ts - Utility functions
├── tests/
│ └── utils.test.ts - Test files
├── index.ts - Application entry point
└── package.json - Project configuration