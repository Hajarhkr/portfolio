import react from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'

export default function NavBar(){
    return (
       <header className='bg-red-600'  >
        <div className="container mx-auto flex justfy-between">
            <nav className="flex">
                <NavLink to='/'
                 exact
                 activeClassName="text-white "
                 className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl fonct-bold cursive tracking-widest">
                    Hajar
                </NavLink>
                <NavLink to='/Posts'
                activeClassName="text-red-100 bg-red-700"
                className="inline -flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-green-800 ">
                    Blog Posts
                </NavLink>
                <NavLink to='/Projects'
                activeClassName="text-red-100 bg-red-700"
                 className="inline -flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-green-800 ">
                    Projects
                </NavLink>
                <NavLink to='/about'
                activeClassName="text-red-100 bg-red-700"
                className="inline -flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-green-800 ">
                    About Me!
                </NavLink>
            </nav>
            <div className='inline-flex py-3 px-3 my-6'>
                <SocialIcon url="https://www.instagram.com/hajarelhakour/" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 35, width:35}}/>
                <SocialIcon url="https://www.linkedin.com/in/hajar-el-hakour-26385a127/" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 35, width:35}}/>
                <SocialIcon url="https://www.facebook.com/hajar.elhakour.3" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 35, width:35}}/>

            </div>
        </div>
        </header> 
        
    )
}