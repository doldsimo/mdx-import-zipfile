import React from 'react'
import { useEffect } from 'react';
import Navigation from './Navigation/Navigation'

const Layout = ({children, configData}) => {

    useEffect(() => {
        console.log(configData);
    }, [])

    return (
        <div>
            <Navigation/>
            <main>
            {children}
            </main>
        </div>
    )
}

export default Layout
