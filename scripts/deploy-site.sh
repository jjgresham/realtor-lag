#!/bin/bash

# Deploy to AWS S3
aws s3 sync $SOURCE_DIR s3://$AWS_S3_BUCKET/ --region $AWS_REGION --delete

# Invalidate CloudFront cache
distribution_id="E2YHMKTO1JAHMV"
aws cloudfront create-invalidation --distribution-id $distribution_id --paths "/*"
