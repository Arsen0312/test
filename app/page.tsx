const Page = () => {
    return (
        <main className="w-full max-w-[1128px] mx-auto" style={{backgroundColor: "white"}}>
            <div className="font-sans w-[90%] mx-auto ">
                <section className="flex flex-col items-center justify-center pt-12 mb-10">
                    <h1 className="text-5xl font-bold">
                        Myrzabekov Arsen
                    </h1>
                    <h2 className="text-4xl">Fronted-developer</h2>
                    <div className="flex gap-1 text-xl w-full flex-wrap justify-center">
                        <a href="tel:+996 225 673 838" className="underline">+996 225 673 838</a> |
                        <a href="https://t.me/Arsen03120" className="underline">telegram</a> |
                        <a href="mailto:myrzabekovarsen03120@gmail.com"
                           className="underline">myrzabekovarsen03120@gmail.com</a> |
                        <a href="https://www.linkedin.com/in/myrzabekov-arsen-frontend-developer/"
                           className="underline">linkedin.com</a>|
                        <a href="https://github.com/Arsen0312" className="underline">github.com</a>
                    </div>
                </section>
                <section>
                    <h2 className="text-3xl">Experience</h2>
                    <hr className="w-full" style={{backgroundColor: "black", borderColor: "black"}}/>
                    <div className="pl-4 pr-4 pt-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">IBRUSH</h2>
                            <h2 className="text-1xl">Апрель 2024 – Март 2025</h2>
                        </div>
                        <h3 className="italic text-xl font-medium">Frontend-разработчик</h3>
                    </div>
                    <ul className="pl-10">
                        <li><h3 className="font-bold text-xl">• Nashenka — Интернет-магазин фермерских продуктов
                            питания</h3></li>
                        <ol className="pl-7 text-xl font-medium">
                            <li>∗ Разработал главную страницу, каталог, карточки товаров и страницу оформления заказа с
                                использованием компонентного подхода и FSD-архитектуры.
                            </li>
                            <li>
                                ∗ Внедрил адаптивную вёрстку и создал переиспользуемые UI-компоненты, что упростило
                                поддержку и
                                масштабирование интерфейса.
                            </li>
                            <li>
                                ∗ Выстроил структуру локального состояния с учётом фильтрации, управления корзиной,
                                оформлением
                                заказа и логикой отображения элементов.
                            </li>
                            <li>
                                ∗ Оптимизировал загрузку интерфейса с помощью ленивой подгрузки, мемоизации и разбивки
                                чанков.
                            </li>
                            <li>
                                ∗ Работал в тесной связке с дизайнером и backend-разработчиком, адаптировал компоненты под
                                дизайн-систему и REST API.
                            </li>
                        </ol>
                        <li><h3 className="font-bold text-xl">• Mister Sleep — Интернет-магазин матрасов и товаров для
                            сна</h3></li>
                        <ol className="pl-7 text-xl font-medium">
                            <li>∗ Разработал страницу каталога с фильтрацией и динамической подгрузкой товаров: товары
                                разделяются
                                по категориям и отображаются в зависимости от входящих данных.
                            </li>
                            <li>
                                ∗ Реализовал сложные карточки товаров с разной структурой в зависимости от типа продукта,
                                включая
                                скидки, отзывы, таймеры и т.д.
                            </li>
                            <li>
                                ∗ Построил локальное хранилище для управления корзиной, избранным и фильтрами, с
                                возможностью
                                обновления, сброса и комбинирования параметров.
                            </li>
                            <li>
                                ∗ Оптимизировал загрузку и работу интерфейса с помощью мемоизации, ленивой загрузки и
                                фонового
                                получения потенциально нужных данных.
                            </li>
                            <li>
                                ∗ Плотно взаимодействовал с дизайнерами и backend-разработчиком для адаптации компонентов
                                под
                                новую дизайн-систему и API.
                            </li>
                        </ol>
                        <li><h3 className="font-bold text-xl">• Castorama — Каталог товаров крупнейшего ритейлера</h3></li>
                        <ol className="pl-7 text-xl font-medium">
                            <li>∗ Участвовал в разработке и внедрении архитектуры приложения на основе FSD.
                            </li>
                            <li>
                                ∗ Разработал масштабируемый каталог с более чем 12 000 товаров, распределённых по сотням
                                категорий и
                                подкатегорий.
                            </li>
                            <li>
                                ∗ Интегрировал frontend с PIM-системой (PimCore) и CMS, настроил отображение связанных
                                данных:
                                медиа, описаний, характеристик, остатков.
                            </li>
                            <li>
                                ∗ Оптимизировал производительность: разбивка чанков, кеширование и отложенный рендер.
                            </li>
                            <li>
                                ∗ Участвовал в code review и обсуждении архитектурных решений, включая адаптацию
                                PIM-контента под
                                frontend.
                            </li>
                        </ol>
                    </ul>
                    <div className="pl-4 pr-4 pt-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Friflex</h2>
                            <h2 className="text-1xl">Декабрь 2023 – Март 2024</h2>
                        </div>
                        <h3 className="italic text-xl font-medium">Frontend-разработчик</h3>
                    </div>
                    <ul className="pl-10 text-xl font-medium">
                        <li>
                            • Быстро освоил внутренние процессы компании: git-флоу, code review, взаимодействие между
                            командами,
                            работа с таск-трекерами.
                        </li>
                        <li>
                            • Реализовывал задачи по доработке и правке существующих компонентов, участвовал в развитии
                            UI-библиотеки проекта.
                        </li>
                        <li>• Работал с дизайн-макетами (Figma), адаптировал интерфейсы под дизайн-систему, следуя
                            pixel-perfect-подходу.
                        </li>
                        <li>• Внедрял мелкие улучшения: вёрстка, стили, логика отображения элементов — с учётом отзывчивости
                            и UX.
                        </li>
                        <li>• Получил опыт командной разработки на React, SCSS и TypeScript, включая архитектуру по FSD и
                            работу с
                            git в рамках CI-процессов.
                        </li>
                    </ul>
                </section>
                <section className="mt-12 pb-40">
                    <h2 className="text-3xl">Technical Skills</h2>
                    <hr className="w-full" style={{backgroundColor: "black", borderColor: "black"}}/>
                    <div className="pl-8 pr-8">
                        <div className="flex">
                            <h2 className="font-semibold">Programming languages: </h2> TypeScript, JavaScript,
                        </div>
                        <div className="flex">
                            <h2 className="font-semibold">Frontend: </h2> React, Next.js, Vue3, HTML5, CSS3, SCSS, styled components, swiper, i18n,
                            redux, redux-toolkit, pinia,
                            react-hook-form, Web socket, REST API, eslint, vue-draggable-plus
                        </div>
                        <div className="flex">
                            <h2 className="font-semibold">languages: </h2> Kyrgyz(Native), Russian (Native)
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Page;