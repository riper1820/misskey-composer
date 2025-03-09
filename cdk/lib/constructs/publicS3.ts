import { AccessKey, AnyPrincipal, PolicyStatement, User } from "aws-cdk-lib/aws-iam";
import { BlockPublicAccess, Bucket, BucketPolicy } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export type PublicS3Props = {
  bucketName: string;
};

export class PublicS3 extends Construct {
  public readonly bucket: Bucket
  public readonly user: User
  constructor(scope: Construct, id: string, props: PublicS3Props) {
    super(scope, id);

    this.bucket = new Bucket(this, "Bucket", {
      bucketName: props.bucketName,
      publicReadAccess: true,
      blockPublicAccess: new BlockPublicAccess({ restrictPublicBuckets: false , blockPublicPolicy: false}),
    })

    this.user = new User(this, "BucketUser")
    this.bucket.grantReadWrite(this.user)
  }
}