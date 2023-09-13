const Footer = () => (
  <div className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900 text-center flex justify-center w-full flex-col sm:flex-row">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
      Made with
      {'  '}
    </span>
    <div className="flex justify-center sm:ml-2 sm:mr-1 rounded-lg">
      <img className="h-8 justify-center" src="https://www.svgrepo.com/show/299502/heart.svg" alt="XaveFresh Logo" />
    </div>
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
      by
      {' '}
      <a href="https://github.com/mxavelli" target="_blank" className="cursor-pointer" rel="noreferrer">Xavelli</a>
      {' '}
      &
      {' '}
      <a href="https://github.com/Freshenext" target="_blank" className="cursor-pointer" rel="noreferrer">Freshenext</a>
    </span>
  </div>
);

export default Footer;
