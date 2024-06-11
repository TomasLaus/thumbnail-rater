'use client';

export default function CreatePage() {
  return (
    <div className='mt-16'>
      <h1 className='text-4xl font-bold mb-8'>Create a Thumbnail Test</h1>

      <p className='text-lg max-w-md mb-8'>
        Create your test so that other people can vote on their favorite thumbnail and help you
        redesign or pick the best options.
      </p>

      <form>
        <div className='flex flex-col gap-4 mb-8'></div>

        <div className='grid grid-cols-2 gap-8 mb-8'>
          <div>
            <h2 className='text-2xl font-bold'>Test Image A</h2>
            <h2 className='text-2xl font-bold'>Test Image B</h2>
          </div>
        </div>
      </form>
    </div>
  );
}
