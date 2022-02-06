import  NavBar from '../navBar/navBar.jsx';
import AllCards from '../allCards/AllCards';
import './Home.css';

export default function Home() {

    return (
        <div>
            <NavBar />
            <div>
                <div className='home-background'>
                    {<AllCards/>}
                </div>
            </div>
        </div>
    )
}
