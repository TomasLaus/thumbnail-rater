'use client';

import { useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { UploadButton, UploadFileResponse } from '@xixixao/uploadstuff/react';
import '@xixixao/uploadstuff/react/styles.css';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function CreatePage() {
    const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  // const saveStorageId = useMutation(api.files.saveStorageId);
  const [imageA, setImageA] = useState('');
  const [imageB, setImageB] = useState('');

  return (
    <div className='mt-16'>
      <h1 className='text-4xl font-bold mb-8'>Create a Thumbnail Test</h1>

      <p className='text-lg max-w-md mb-8'>
        Create your test so that other people can vote on their favorite thumbnail and help you
        redesign or pick the best options.
      </p>

      <form className='grid grid-cols-2 gap-8 mb-8'>
        <div>
          <div className='flex flex-col gap-4 rounded p-2'>
            <h2 className='text-2xl font-bold'>Test Image A</h2>

            <Image
              width={200}
              height={200}
              alt='test image a'
              src={`https://fleet-wombat-27.convex.cloud/api/storage/${imageA}`}
            />

            <UploadButton
              uploadUrl={generateUploadUrl}
              fileTypes={['image/*']}
              onUploadComplete={async (uploaded: UploadFileResponse[]) => {
                setImageA((uploaded[0].response as any).storageId);
              }}
              onUploadError={(error: unknown) => {
                alert(`ERROR! ${error}`);
              }}
            />
          </div>

          <div className='flex flex-col gap-4 rounded p-2'>
            <h2 className='text-2xl font-bold'>Test Image B</h2>

            {imageB && (
              <Image
                width={200}
                height={200}
                alt='test image b'
                src={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${imageB}`}
              />
            )}

            <UploadButton
              uploadUrl={generateUploadUrl}
              fileTypes={['image/*']}
              onUploadComplete={async (uploaded: UploadFileResponse[]) => {
                setImageB((uploaded[0].response as any).storageId);
              }}
              onUploadError={(error: unknown) => {
                // Do something with the error.
                alert(`ERROR! ${error}`);
              }}
            />
          </div>
        </div>

        <Button>Create Thumbnail Test</Button>
      </form>
    </div>
  );
}
