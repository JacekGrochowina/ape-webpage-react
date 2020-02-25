import React from 'react';
import ReturnBtn from '../components/ReturnBtn';

const HobbyPage = () => {
    return (
        <div className="hobby">
            <div className="container hobby__container">
                <ReturnBtn backTo="/" />
                <h1 className="title hobby__title">Po godzinach ...</h1>

                <p className="rodo__p">Nie wiem czy każdy, nie wiem czy nawet większość ale na pewno jest takie grono ludzi, którzy poza swoją pracą zawodową mają jeszcze jakieś hobby robiąc w tzw. czasie wolnym coś dla relaksu i przyjemności. Nie oznacza to, że również praca zawodowa nie może być wykonywana z pasją, zadowoleniem i satysfakcją ale często chodzi o to by móc robić jeszcze coś zupełnie odmiennego, może trochę oddać pole drugiej naturze lub móc dalej marzyć.</p>

                <p className="rodo__p">Twórczość amatorska, bez względu na swoja postać, zawsze rodzi się z pasji i takie tez źródło miał i ma po dziś dzień „Teatr Ludzi Upartych”. Zgromadzone tu materiały to przekrój działalności tego teatru od chwili powstania po początek lat 2000. Może przypadkowy gość znajdzie tu cześć historii własnej, rodziny lub znajomych.</p>

                <p className="rodo__p--author">Życzę miłego oglądania, <span>Piotr Wysocki</span></p>

                <div className="hobby__button-wraper">
                    <a href="http://teatr.apepw.pl/" className="button hobby__button">Teatr Ludzi Upartych</a>
                </div>
            </div>
        </div>
    )
}

export default HobbyPage;