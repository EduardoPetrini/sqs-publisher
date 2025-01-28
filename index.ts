import AWS from "aws-sdk";
import { listQueues } from "./lib/listQueues";
import { deleteQueues } from "./lib/deleteQueues";
import { createQueue } from "./lib/createQueue";
AWS.config.update({ region: "us-east-1" });

const SQS = new AWS.SQS();

(async () => {
  const queues = await listQueues(SQS);
  console.log(queues);

  if (queues.QueueUrls) {
    const deletedQueues = await deleteQueues(SQS, queues.QueueUrls);
    console.log(deletedQueues);
  }

  const result = await createQueue(SQS, "test-queue-1");
  console.log(result);
})();
