import { Route, Routes } from "react-router-dom";
import Header from '../components/Header'
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import Project from './Project';

export default function Navigation() {

    return (
        <div className='bg-[#070012] w-full min-h-full font-[Inter] text-white'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Projects' element={<Project />} />
                <Route path='/Gallery' element={<Gallery />} />
                <Route path='/Contacts' element={<Contact />} />
            </Routes>
        </div>
    )
}
