import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { SESv2Client } from "@aws-sdk/client-sesv2";

// Amplify blocks custom env vars starting with AWS_, so we use APP_REGION.
const region = process.env.APP_REGION ?? "ap-south-1";

export const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({ region }), {
  marshallOptions: { removeUndefinedValues: true },
});
export const ses = new SESv2Client({ region });
