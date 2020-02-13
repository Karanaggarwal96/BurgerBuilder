import React from 'react'
import './Layout.css'
const Layout=(props)=>(

    <React.Fragment>
    <div>SideDrawer,Toolbar,Backdrop</div>
    <main className='Content'>
        {props.children}
    </main>
    </React.Fragment>
);

export default Layout;