'use server';

import { uploadImage } from '@/lib/cloudinary';
import { storePost, updatePostLikeStatus } from '@/lib/posts';
import { FormErrorsType } from '@/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createPost = async (
  { errors }: FormErrorsType,
  formData: FormData,
) => {
  const title = formData.get('title') as string;
  const image = formData.get('image') as File;
  const content = formData.get('content') as string;

  errors = [];

  if (!title || !title.trim().length) {
    errors.push('Title is required.');
  }

  if (!content || !content.trim().length) {
    errors.push('Content is required.');
  }

  if (!image || !image.size) {
    errors.push('Image is required.');
  }

  if (errors.length) {
    return { errors };
  }

  try {
    const imageUrl = await uploadImage(image);

    await storePost({
      imageUrl,
      title,
      content,
      userId: 1,
    });
  } catch (error) {
    throw new Error(
      'Image upload failed, post was not created. Please try again later',
    );
  }

  revalidatePath('/', 'layout');
  redirect('/feed');
};

export const togglePostLikeStatus = async (postId: number) => {
  await updatePostLikeStatus(postId, 2);
  revalidatePath('/feed');
};
