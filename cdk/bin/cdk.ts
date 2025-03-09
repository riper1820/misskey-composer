#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { StatefulStack } from '../lib/stacks/statefulStack';

const app = new cdk.App();
new StatefulStack(app, 'StatefulStack', {
  bucketName: process.env.CDK_BUCKET_NAME,
  emailDomain: process.env.CDK_EMAIL_DOMAIN
});
