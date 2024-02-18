import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {MainSection} from "./layout/sections/main/MainSection";
import {ExamplesSection} from "./layout/sections/examples/ExamplesSection";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainSection/>
            <ExamplesSection/>
        </div>
    );
}

export default App;


/*
1) заголовки на главной секции правильно расположенны? По правильным ли тегам?
2) Лого в шапке лучше через абсолуб стедать или  оставить так но сделать разные паддинги снизу и сверху?
3) Как сделать стилизованную компоненту GridWrapper по аналогии Flexwrapper?
4) Нормально ли заголовок каждой секции делать через компоненту SectionTitle? Каждую строчку в отдельный тег.
5) Как в компоненте Card у props сделать типизацию вместо any на object
6) В компоненте CardList импорт data происходит только в фигурных скобках (требует по дефолту) как сделать не по дефолту
*/
