import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
// import Header from "@/components/ui/header"
import Image from 'next/image'
import { LayoutDashboard, Link } from 'lucide-react'
import { Button } from '@/components/ui/button'


const Header= () => {
  return (
    <header>
        <nav>
            <Link href="/">
            <Image 
            src="/logo.png"
            alt="Sensai Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"/>
            </Link>  
        </nav>
        
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    </header>
  )
}

export default Header