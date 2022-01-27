import  NavBar from '../navBar/navBar.jsx';
import FilterBar from '../filterBar/filterBar';
import AllCards from '../allCards/AllCards';
import './Home.css';

export default function Home() {

    return (
        <div>
            <NavBar />
            <FilterBar />
            <div>
                <div>
                    {<AllCards/>}
                </div>
            </div>
        </div>
    )
}

/* 

----------------- COSAS QUE ME FALTAN POR HACER -------------------         ***Dificult level: 0% ==== 100%

1) Ver lo de los loadings al pasar las paginas %50

2) Corregir los clear de los filtros y el loading del inicio

3) Buscarimagenes para colocar en landing y loading. Y finalmente comenzar con los estilos % 80


*/