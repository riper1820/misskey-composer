import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PublicS3 } from '../constructs/publicS3';
import { SES } from '../constructs/ses';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export type StatefulStackProps = cdk.StackProps & {
  bucketName: string;
  emailDomain: string;
}

export class StatefulStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: StatefulStackProps) {
    super(scope, id, props);

    const publicS3 = new PublicS3(this, "PublicS3", {
      bucketName: props.bucketName,
    });
    const ses = new SES(this, "SES", {
      domain: props.emailDomain,
    });

  }
}
