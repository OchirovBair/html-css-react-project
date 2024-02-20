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
1) на секции Main кнопку и текст по кругу лучше сделать через абсолют и отступы от картинки чтобы задать размеры контейнеру?
через абсолют поробовать-----2) Лого в шапке лучше через абсолют задать или  оставить так но сделать разные паддинги снизу и сверху?
посмотреть варианты в интернете------3) Как сделать стилизованную компоненту GridWrapper по аналогии Flexwrapper?
4) Нормально ли заголовок каждой секции делать через компоненту SectionTitle? Каждую строчку в отдельный тег.
сделано------5) Как в компоненте Card у props сделать типизацию вместо any на object
в фигурных не подефолту------6) В компоненте CardList импорт data происходит только в фигурных скобках (требует по дефолту) как сделать не по дефолту
-----------7) в файле Create сомпонент StyledCreateInfo задан маржин, если его убрать то элементы располагаются на весь контейнер. Правильно ли сделаннно что задан маржин?
да ------ 8) В компонентах много используется FlexWrapper это норм практика?
9) как правильно спозиционировать картинки в Main и Create секциях? хардкодить высоту и ширину?
через скрывание и поробовать через srcset ----- 10) как лучше подменять картинки при адаптиве в секции PopularArtist через srsset или делать через медия запрос и скрывание элемента
через абсолют и привязать к секции -------11) как добавить пятна на секциях? через позицию абсолют? и потом красить через blender-mode?
Сделал через класс ----- 12) в файле PopularArtist задавал последнему div grid-area, но это значение прокидывается дальше внуть Dashboard и этот селектор применяется к последнему div перезатирая grid-area. Как это лучше пофиксить?
13) в футере допустимо ли применять несколько тегов nav или делать один тег на все меню?
14) в консоли предупреждения, что требует?
16) как лучше подменять картинки при адаптиве в секции PopularArtist через srsset или делать через медия запрос и скрывание элемента
*/



// 1) пятнам задать чере before и спозиционировать оносительно секции и наложить color-burn
// 2) поробовать надпись по кругу сделать через after и также спозиционировать
// 3)