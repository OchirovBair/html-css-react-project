import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {MainSection} from "./layout/sections/main/MainSection";
import {ExamplesSection} from "./layout/sections/examples/ExamplesSection";
import {Create} from "./layout/sections/create/Create";
import {PopularArtists} from "./layout/sections/popularArtists/PopularArtists";
import {Subscribe} from "./layout/sections/subscribe/Subscribe";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainSection/>
            <ExamplesSection/>
            <Create/>
            <PopularArtists/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;


/*
----------- 1) на секции Main кнопку и текст по кругу лучше сделать через абсолют и отступы от картинки чтобы задать размеры контейнеру? padding для div
----------- 2) Лого в шапке лучше через абсолют задать или  оставить так но сделать разные паддинги снизу и сверху? pad: 28px 0
----------- 3) Как сделать стилизованную компоненту GridWrapper по аналогии Flexwrapper? посмотреть варианты в интернете
----------- 4) Нормально ли заголовок каждой секции делать через компоненту SectionTitle?  Ограничить по ширине
----------- 5) Как в компоненте Card у props сделать типизацию вместо any на object? протипизировать
----------- 6) В компоненте CardList импорт data происходит только в фигурных скобках (требует по дефолту) как сделать не по дефолту? в фигурных не подефолту
----------- 7) в файле Create сомпонент StyledCreateInfo задан маржин, если его убрать то элементы располагаются на весь контейнер. Правильно ли сделаннно что задан маржин?
----------- 8) В компонентах много используется FlexWrapper это норм практика? да
----------- 9) как правильно спозиционировать картинки в Main и Create секциях? хардкодить высоту и ширину? max-widt + width 100% + height NUMpx
----------- 10) как лучше подменять картинки при адаптиве в секции PopularArtist через srsset или делать через медия запрос и скрывание элемента? чтобы подменять картинки в зависимости от размера viewport делать через @media
----------- 11) как добавить пятна на секциях? через позицию абсолют? и потом красить через blender-mode? div задать position: absolute далее цвет и эффект
----------- 12) в файле PopularArtist задавал последнему div grid-area, но это значение прокидывается дальше внуть Dashboard и этот селектор применяется к последнему div перезатирая grid-area. Как это лучше пофиксить? черзе &>div:nth-child()
----------- 13) в футере допустимо ли применять несколько тегов nav или делать один тег на все меню? можно не использовать, обернуть весь блок в nav
----------- 14) в консоли предупреждения, что требует? добавить $ везде где пропсы у FlewWrapper (почитай Passed props styled components)
----------- 15) подмена картинки в секции PopularArtists как сделать? качаю в оригинале картинку и через object-fit cover object-position start/left + liner gradient для div В котором картинка
*/




/*
1) у кнопоки в секции Examples ее ширина подстраивается под ширину родителя. Как сделать так чтобы ширина родителя подстраиваевалась под контент? если убирать grid-area у div с карточками то вроде выстраиваеться колонка под кнопку
2) почему у картинок если не задавать display: flex у родителя они не будут изменяться? так же по уголкам уходит скругление
*/