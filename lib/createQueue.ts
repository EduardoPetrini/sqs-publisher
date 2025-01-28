export const createQueue = async (sqs: AWS.SQS, queueName: string) => {
  try {
    const data = await sqs.createQueue({ QueueName: queueName }).promise();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
