import { setTimeout } from "timers/promises";
import { QueueUrlList } from "aws-sdk/clients/sqs";

export const deleteQueues = async (sqs: AWS.SQS, queueUrls: QueueUrlList) => {
  try {
    const results: unknown[] = [];
    for (const queueUrl of queueUrls) {
      const data = await sqs.deleteQueue({ QueueUrl: queueUrl }).promise();
      results.push(data);
    }

    // Wait for 1 minute before returning
    console.log("Waiting for 1 minute before returning");
    await setTimeout(1000 * 60);
    return results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
