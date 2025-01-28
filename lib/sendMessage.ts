export const sendMessage = async (SQS: AWS.SQS, queueUrl: string, message: string) => {
  const params = {
    QueueUrl: queueUrl,
    MessageBody: message,
  };
  return await SQS.sendMessage(params).promise();
};
