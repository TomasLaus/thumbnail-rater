'use client';

import { SignInButton, SignOutButton, useSession } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

export default function Home() {
  const { isSignedIn } = useSession();

  const createThumbnail = useMutation(api.thumbnails.createThumbnail);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {isSignedIn ? <SignOutButton /> : <SignInButton />}

      {isSignedIn && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(e.currentTarget);
            const title = formData.get('title') as string;
            //todo: pass to mutation
            await createThumbnail({ title: title });
            form.reset();
          }}>
          <label>Title</label>
          <input className='text-black' name='title' />
          <button>Submit</button>
        </form>
      )}
    </main>
  );
}
