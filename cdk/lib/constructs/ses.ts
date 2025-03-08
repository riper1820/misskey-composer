import { Stack } from "aws-cdk-lib";
import { EmailIdentity, Identity } from "aws-cdk-lib/aws-ses";
import { Construct } from "constructs";

export type SESProps = {
  domain: string
}

export class SES extends Construct{
  constructor(scope: Construct, id: string, props: SESProps) {
    super(scope, id);

    const emailIdentity = new EmailIdentity(this, "EmailIdentity", {
      identity: Identity.domain(props.domain)
    })
  }
}