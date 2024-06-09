'use client';

import { useSession } from '@clerk/nextjs';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

export default function Home() {
  const { isSignedIn } = useSession();

  const createThumbnail = useMutation(api.thumbnails.createThumbnail);
  const thumbnails = useQuery(api.thumbnails.getThumbnailsForUser);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {isSignedIn && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(e.currentTarget);
            const title = formData.get('title') as string;
            await createThumbnail({ title: title });
            form.reset();
          }}>
          <label>Title</label>
          <input className='text-black' name='title' />
          <button>Submit</button>
        </form>
      )}

      {thumbnails?.map((thumbnail) => <div key={thumbnail._id}>{thumbnail.title}</div>)}
    </main>
  );
}
