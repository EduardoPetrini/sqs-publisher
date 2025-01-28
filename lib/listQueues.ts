export const listQueues = async (sqs: AWS.SQS) => {
  try {
    const data = await sqs.listQueues().promise();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
