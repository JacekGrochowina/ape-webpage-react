import React from 'react';
import ReturnBtn from '../components/ReturnBtn';

const RodoPage = () => {
    return (
        <div className="rodo">
            <div className="container rodo__container">
                <ReturnBtn backTo="/" />
                <h1 className="title rodo__title">Polityka RODO</h1>

                <p className="rodo__p">Od dnia 25 Maja 2018r wchodzi w życie Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016r. w sprawie ochrony osób fizycznych, dotyczące przetwarzania danych osobowych i ich swobodnego przepływu. W związku z powyższym informujemy, że Państwa dane osobowe są przetwarzanezgodnie z tym rozporządzeniem.</p>

                <ol className="rodo__numbered-list">
                    <li className="rodo__numbered-item">Administratorem danych osobowych jest firma APE Piotr Wysocki, ul Wyszyńskiego 19/3, 87-800 Włocławek.</li>
                    <li className="rodo__numbered-item">Państwa dane przetwarzane będą w wersji elektronicznej i papierowej:
                    <ul className="rodo__unnumbered-list">
                            <li className="rodo__unnumbered-item">w celu wykonania umowy kupna-sprzedaży produktów oraz usług,</li>
                            <li className="rodo__unnumbered-item">w celu wypełnienia obowiązków prawnych i publicznych, do których zobligowany jest Administrator (na podstawie Art. 6, ust.1 rozporządzeniem Parlamentu Europejskiego),</li>
                            <li className="rodo__unnumbered-item">w celach marketingowych (przedstawiania ofert, tworzenia zestawień, analiz i statystyk wykorzystywanych przez Administratora).</li>
                        </ul>
                    </li>
                    <li className="rodo__numbered-item">Dane osobowe jakie będą przetwarzane przez APE Piotr Wysockito: nazwa firmy, imię i nazwisko; adres e-mail; numer telefonu.</li>
                    <li className="rodo__numbered-item">Podanie danych osobowych jest dobrowolne, chyba że przepisy prawa stanowią inaczej.</li>
                    <li className="rodo__numbered-item">Przetwarzanie danych osobowych odbywa się wyłącznie za zgodą Administratora i dotyczy:
                    <ul className="rodo__unnumbered-list">
                            <li className="rodo__unnumbered-item">realizacji działań związanych z wykonaniem umowy, zlecenia, zakupu itp. właściwych dla prowadzonej działalności gospodarczej,</li>
                            <li className="rodo__unnumbered-item">podmiotów wspierających wykonanie umowy (m.in.: firmy kurierskie; firmy windykacyjne),</li>
                            <li className="rodo__unnumbered-item">usług doradczych świadczonych na rzecz Administratora (m.in.: usługi audytorskie, konsultacyjne).</li>
                        </ul>
                    </li>
                    <li className="rodo__numbered-item">Posiadane dane osobowe będą przechowywane w okresie prowadzenia działalności gospodarczej przez formę APE Piotr Wysocki, a w przypadku dochodzenia roszczeń – do czasu ich przedawnienia.</li>
                    <li className="rodo__numbered-item">Mają Państwo prawo do:
                    <ul className="rodo__unnumbered-list">
                            <li className="rodo__unnumbered-item">dostępu do treści swoich danych,</li>
                            <li className="rodo__unnumbered-item">sprostowania, usunięcia lub ograniczenia przetwarzania danych,</li>
                            <li className="rodo__unnumbered-item">przenoszenia danych,</li>
                            <li className="rodo__unnumbered-item">wniesienia sprzeciwu,</li>
                            <li className="rodo__unnumbered-item">cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.</li>
                        </ul>
                    </li>
                </ol>

                <p className="rodo__p">Ponadto mają Państwo prawo do wniesienia skargi do Prezesa Urzędu ds. OchronyDanych Osobowych w przypadku, gdy uznają Państwo, że przetwarzanie danych osobowych narusza przepisy rozporządzenia. </p>
                <p className="rodo__p">Firma APE Piotr Wysocki zgodnie z przepisami prawa dokłada wszelkich starań, aby zapewnić możliwe środki ochrony danych osobowych przed ich przypadkowym lub umyślnym zniszczeniem, utratą, ujawnieniem lub wykorzystaniem.</p>
                <p className="rodo__p">Niniejsze pismo ma charakter informacyjny z datą wejścia w życie dnia 25 Maja 2018r.</p>
            </div>
        </div>
    )
}

export default RodoPage;