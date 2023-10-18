import Head from "next/head";
import styles from './layout.module.scss';
import Link from "next/link";
import React, {useState} from 'react';

export default function Layout({ children, home }) {
    const [isOpen, setOpen] = useState(false)

    // TODO
    // Logo needs to stay no matter the screen size
    // Search needs to be replaced with a search bar
    // Search bar needs empty text of Search
    // On mobile it needs to be a button that expands it to be a search bar

    return (
        <div className="flex flex-col h-screen">
            <Head></Head>
            <header className={styles.header}>
                <div className={styles.headerSectionLeft}>
                    <Link href="/" className="text-black"><div className={styles.headerItem}>Logo</div></Link>
                    <Link href="/browse" className={styles.headerItem}>
                        <div className={styles.smallItem}>B</div>
                        <div className={styles.mediumItem}>Browse</div>
                    </Link>
                    <Link href="/library" className={styles.headerItem}>
                        <div className={styles.smallItem}>L</div>
                        <div className={styles.mediumItem}>Library</div>
                    </Link>
                    <Link href="/desk" className={styles.headerItem}>
                        <div className={styles.smallItem}>D</div>
                        <div className={styles.mediumItem}>Desk</div>
                    </Link>

                    <div className={styles.headerItem}>Search</div>
                </div>
                <div className={styles.headerSectionRight}>
                    <div className="h-full relative">
                        <button onClick={() => setOpen(!isOpen)} className="relative block h-full z-30">
                            Articus
                        </button>
                        {isOpen ? (<button onClick={() => setOpen(false)} className="fixed z-20 inset-0 h-full w-full bg-black opacity-50 cursor-default" tabIndex="-1"/>) : <></> }
                        {isOpen ?
                        (<div className="-right-4 w-48 block bg-white rounded-lg py-2 shadow-2xl z-50 absolute">
                            <Link href="#" className="block sm:hidden text-center px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Browse</Link>
                            <Link href="#" className="block sm:hidden text-center px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Library</Link>
                            <Link href="#" className="block sm:hidden text-center px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Desk</Link>
                            <Link href="#" className="block text-center px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account</Link>
                            <Link href="#" className="block text-center px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Settings</Link>
                            <Link href="#" className="block text-center px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Logout</Link>
                        </div>) : <></>}
                    </div>
                </div>
            </header>
            <main className="flex flex-1 grow justify-center z-10">{children}</main>
        </div>
    )
}