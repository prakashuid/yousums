import React from 'react'
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Logo from "./assets/Images/logo.png"

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-16">
        <div className="flex items-center">
        <Image
            src={Logo}
            style={{ width: "35%", height: 'auto' }}
            alt="Thumbnail"
          />
        </div>
  
        <div className="hidden md:flex items-center">
          <Button  color="primary" className="mx-4">
            Logins
          </Button>
          <Button  color="primary" className="mx-4">
            Subscribe
          </Button>
        </div>
  
        <div className="md:hidden">
          {/* <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} /> */}
        </div>
  
        {/* Responsive Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-10">
            <div className="flex flex-col items-center justify-center h-full">
              <Button  color="primary" className="my-4">
                Login
              </Button>
              <Button color="primary" className="my-4">
                Subscribe
              </Button>
            </div>
          </div>
        )}
      </nav>
    );
  }