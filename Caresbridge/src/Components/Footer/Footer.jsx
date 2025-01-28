import React from "react";
import {Link} from 'react-router-dom'
export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-rose-900 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="text-white mb-6 md:mb-0">
                    <div className="text-xl font-bold hover:text-gray-300">CARESBRIDGE 
          <br />PHARMACEUTICALS</div>

                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase  hover:text-pink-500">Resources</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline  hover:text-pink-500">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline  hover:text-pink-500">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase  hover:text-pink-500">Follow us</h2>
                            <ul className="text-white k font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline  hover:text-pink-500"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline  hover:text-pink-500">
                                        Facebook
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase  hover:text-pink-500">Legal</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline  hover:text-pink-500">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline  hover:text-pink-500">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            Copyright
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-white hover:text-pink-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        
                        <Link to="#" className="text-white hover:text-pink-500 transition-colors">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm1.635 5.417a1.462 1.462 0 1 1-2.932 0 1.462 1.462 0 0 1 2.932 0ZM10 15.254c-2.587 0-4.683-2.095-4.683-4.683 0-2.587 2.096-4.683 4.683-4.683 2.588 0 4.683 2.096 4.683 4.683 0 2.588-2.095 4.683-4.683 4.683Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Instagram account</span>
          </Link>
          <Link to="tel:+123456789" className="text-white hover:text-pink-500 transition-colors">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.782 12.419a1.67 1.67 0 0 0-1.1-.986l-2.315-.579a1.67 1.67 0 0 0-1.875.765l-.676 1.128a11.048 11.048 0 0 1-5.75-5.75l1.127-.676a1.671 1.671 0 0 0 .765-1.875L8.567 4.318a1.67 1.67 0 0 0-.986-1.1l-2.53-.625a1.672 1.672 0 0 0-1.88.721A13.578 13.578 0 0 0 2.82 6.676a13.584 13.584 0 0 0 8.94 8.94 13.578 13.578 0 0 0 3.363-.848 1.672 1.672 0 0 0 .721-1.88l-.625-2.53ZM7.258 3.742l2.53.625c.512.127.973.512 1.1.986l.579 2.316a1.673 1.673 0 0 1-.765 1.875l-1.127.676a11.048 11.048 0 0 0 5.75 5.75l.676-1.127a1.671 1.671 0 0 1 1.875-.765l2.315.579a1.67 1.67 0 0 1 .986 1.1l.625 2.53c.127.512-.052 1.075-.448 1.472a13.578 13.578 0 0 1-3.363.848 13.584 13.584 0 0 1-8.94-8.94 13.578 13.578 0 0 1 .848-3.363c.397-.396.96-.575 1.472-.448Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">WhatsApp contact</span>
          </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
