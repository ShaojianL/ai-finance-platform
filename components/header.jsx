import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard } from 'lucide-react'

const Header = () => {
    return (
        <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>

            <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
                <Link href="/">
                    <Image
                        src={"/Arasaka_Logo_CP2077.png"} alt='Arasaka logo' height={60} width={420}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                <div>
                    <SignedIn>
                        <Link href={"/dashboard"}>
                            <Button variant={"outline"}>
                                <LayoutDashboard size={18}/>
                                <span className='hidden md:inline'>Dashboard</span>
                            </Button>
                        </Link>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl='/dashboard'>
                            <Button variant={"outline"}>
                                Sign in
                            </Button>
                        </SignInButton>
                        {/* <SignUpButton /> */}
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </div>
    )
}

export default Header