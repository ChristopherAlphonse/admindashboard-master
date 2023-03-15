import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import React,{ Fragment, useState } from 'react'

import { BiChevronDown } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import {HiXMark} from 'react-icons/hi2';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-semibold text-green-cashapp">1NVENT</span>
            
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
         

         
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="px-6 py-2 font-medium tracking-wide text-gray-100 capitalize transition-colors duration-300 transform  mr-5">
            Log in <span aria-hidden="true"></span>
          </a>
          <a href="/register" className="px-6 py-2 font-medium tracking-wide text-zinc-100 capitalize transition-colors duration-300 transform bg-green-cashapp  hover:bg-green-500 ">
            Register <span aria-hidden="true">&rarr;</span>
          </a>

         

        </div>
       
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#333333] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-semibold text-green-cashapp">1NVENT</span>
            
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-zinc-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
             
              <div className="pt-2">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
              <div className="py-1">
                <a
                  href="/register"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
