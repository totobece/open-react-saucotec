import Link from 'next/link';

export default function CookieBanner() {
  return (
    <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-blue-888 rounded-lg shadow`}>
      <div className='text-center'>
  <Link href="#">
    <p className='text-white'>
      We use{''}
      <span className='text-blue-600 font-bold ml-2 mr-2'>cookies</span>
      {''}on our site.
    </p>
  </Link>
</div>



      <div className='flex gap-2'>
        <button className='px-5 py-2 text-white rounded-md border-blue-888'>Decline</button>
        <button className='bg-blue-600 px-5 py-2 text-white rounded-lg'>Allow Cookies</button>
      </div>
    </div>
  );
}
