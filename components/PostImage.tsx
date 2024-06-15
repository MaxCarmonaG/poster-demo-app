'use client';

import { CldImage } from 'next-cloudinary';
import { FC } from 'react';
// import Image, { ImageLoaderProps } from 'next/image';

/* function imageLoader(config: ImageLoaderProps) {
  const [urlStart, urlEnd] = config.src.split('upload/');
  const transformations = 'w_200,q_' + config.quality;
  return urlStart + transformations + urlEnd;
} */

interface PostImageProps {
  imageUrl: string;
  alt: string;
}

const PostImage: FC<PostImageProps> = ({ imageUrl, alt }) => (
  <div className="post-image">
    {/* <Image loader={imageLoader} src={imageUrl} fill alt={alt} quality={50} /> */}
    <CldImage
      src={imageUrl}
      alt={alt}
      width={128}
      height={96}
      crop={{ type: 'auto', source: true }}
      priority={true}
    />
  </div>
);

export default PostImage;
