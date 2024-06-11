'use client';

import { useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { UploadButton, UploadFileResponse } from '@xixixao/uploadstuff/react';
import '@xixixao/uploadstuff/react/styles.css';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function CreatePage() {
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
//   const saveStorageId = useMutation(api.files.saveStorageId);
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
            <h2 className='text-2xl font-bold'>Test Image A</h2>
            <UploadButton
              uploadUrl={generateUploadUrl}
              fileTypes={['image/*']}
              onUploadComplete={
                async (uploaded: UploadFileResponse[]) => {
                    setImageA((uploaded[0].response as any).storageId );
                  }
              }
              onUploadError={(error: unknown) => {
                // Do something with the error.
                alert(`ERROR! ${error}`);
              }}
            />

            <h2 className='text-2xl font-bold'>Test Image B</h2>

            <UploadButton
              uploadUrl={generateUploadUrl}
              fileTypes={['image/*']}
              onUploadComplete={
                async (uploaded: UploadFileResponse[]) => {
                    setImageB((uploaded[0].response as any).storageId );
                  }
              }
              onUploadError={(error: unknown) => {
                // Do something with the error.
                alert(`ERROR! ${error}`);
              }}
            />
          </div>

          <Button>Create Thumbnail Test</Button>
        </form>
    </div>
  );
}
