const Footer = () => (
  <div className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 text-center flex justify-center w-full flex-col sm:flex-row">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
      Made with
      {'  '}
    </span>
    <img className="h-8 mr-3 justify-center" src="https://www.svgrepo.com/show/13666/heart.svg" alt="XaveFresh Logo" />
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
      by Xavelli & Freshenext
    </span>
  </div>
);

export default Footer;
