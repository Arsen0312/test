import Image from "next/image";
import TextCurds from "@/feature/TextCurd/TextCurds";
import Link from "next/link";
import SectionCertificate from "@/feature/SectionCertificate/ui/SectionCertificate";
import React from "react";
import BonusCurd from "@/feature/BonusCurd/BonusCurd";
import {TwoGisMap} from "@/feature/TwoGisMap/TwoGisMap";
import CurdStoreForMap from "@/feature/CurdStoreForMap/ui/CurdStoreForMap";
import {ScrollArea} from "@/components/ui/scroll-area";

const storeLocations = [
    {
        name: "Город Ош: Масалиева 18/1, пересекает Зайнабетдинова",
        duringWork: "24/7"
    }, {
        name: "Город Ош: ул. Кара-суу, 8Б (Ошский р-н, рядом с Мээрим рест-н)",
        duringWork: "24/7"
    }, {
        name: "Город Ош: Макском: Аскар Шакиров, 30",
        duringWork: "24/7"
    }, {
        name: "Город Ош: Аманат Сити Бимар: Пайзида Айтмаматов, 3",
        duringWork: "07:00-01:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    }, {
        name: "Микрорайон Джал-23, 28 «Bimar»",
        duringWork: "7:00-00:00"
    },
]

const Page = () => {
    return (
        <main className="w-full">
            <section className="w-full h-auto mb-[90px]">
                <Image src="/assets/mainImageBimar.png" priority alt="mainImageBimar"
                       width={1240} height={600}
                       className="w-full h-auto"
                />
            </section>
            <section className="flex flex-col gap-10 self-stretch items-center">
                <div className="flex max-w-[1440px] px-[100px] flex-col align-center gap-3.5">
                    <h2 className="max-w-[1203px] text-[var(--primary)] text-center text-4xl font-bold leading-11.5 h-23">
                        <div>Первая безалкогольная сеть</div>
                        <div>в Центральной Азии</div>
                    </h2>
                </div>
                <div className="w-full relative flex justify-between pr-[90px]">
                    <div className="w-full aspect-885/686 max-w-[885px] max-h-[686px] bg-cover bg-left"
                         style={{backgroundImage: 'url(/assets/Иллюстрация.png)'}}>
                        <Image
                            className="aspect-110/110 object-cover rounded-[50%] absolute top-[45px] left-[100px] boxShadowForSecondImg"
                            src="/assets/imgMagazinBimar.png" priority alt="imgMagazinBimar" width={580} height={580}/>
                    </div>
                    <div
                        className="flex gap-6 flex-col justify-center items-end absolute top-[50%] right-[90px] transform -translate-y-1/2">
                        <span>
                            <div
                                className="rounded-3xl py-6 px-10 gap-6 items-center inline-flex bg-white boxShadowForCard">
                            <span className="text-5xl text-[var(--primary)] font-bold">30</span>
                            <span className="text-[22px] font-semibold ">супермаркетов в 2025 году</span>
                        </div>
                        </span>
                        <span>
                            <div
                                className="rounded-3xl py-6 px-10 gap-6 items-center inline-flex bg-white boxShadowForCard">
                            <span className="text-5xl text-[var(--primary)] font-bold">16 000 +</span>
                            <span className="text-[22px] font-semibold ">Ежедневно транзакций</span>
                        </div>
                        </span>
                        <span>
                            <div
                                className="rounded-3xl py-6 px-10 gap-6 items-center inline-flex bg-white boxShadowForCard">
                            <span className="text-5xl text-[var(--primary)] font-bold">10 000 +</span>
                            <span className="text-[22px] font-semibold ">Разнообразие ассортимента</span>
                        </div>
                        </span>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-10 self-stretch items-center">
                <div className="flex max-w-[1440px] px-[100px] flex-col align-center gap-3.5">
                    <h2 className="max-w-[1203px] text-[var(--primary)] text-center text-4xl font-bold leading-11.5 h-23">
                        <div>BIMAR - Свежие продукты и турецкие деликатесы</div>
                        <div>каждый день</div>
                    </h2>
                </div>
                <div className="w-full h-auto">
                    <div className="w-full h-auto flex gap-11 pl-[100px] pr-13">
                        <div className="flex items-center">
                            <TextCurds
                                title="Свежие продукты каждый день"
                                description="Каждый день — свежее халал мясо, овощи, фрукты, молочная продукция, турецкие и импортные деликатесы: суджук, оливки, специи, сухофрукты, традиционные сладости и многое другое для вкусных завтраков и семейных ужинов."
                            />
                        </div>
                        <Image src="assets/FreshProduce.svg" priority alt="FreshProduce"
                               width={312} height={312}
                               className=""
                        />
                    </div>
                    <div className="w-full h-auto flex gap-11 pl-[100px] pr-13">
                        <div className="flex items-center gap-7">
                            <Image src="assets/ReadyMeals.svg" priority alt="ReadyMeals"
                                   width={312} height={312}
                                   className=""
                            />
                            <TextCurds
                                title="Готовые блюда и комфорт"
                                description="Свежие готовые блюда и выпечка — для профессионалов, которые ценят вкусную и доступную еду на обед в плотном графике. Современные стандарты обслуживания и комфорт в каждом магазине."
                            />
                        </div>
                    </div>
                    <div className="w-full h-auto flex gap-11 pl-[100px] pr-13">
                        <div className="flex items-center gap-11">
                            <TextCurds
                                title="Программа лояльности"
                                description="Акции и бонусы для наших почётных клиентов: скидки, кэшбэк, подарок в день рождения, участие в промо-акциях и многое другое. Станьте почётным клиентом в 2 клика: скачайте приложение в App Store или Play Market и пользуйтесь всеми привилегиями."
                            />
                            <div className="flex flex-col">
                                <Link href="https://apps.apple.com/kg/app/%D0%B1%D0%B8%D0%BC%D0%B0%D1%80/id6747991622"
                                      className="">
                                    <Image src="assets/appStore.svg" priority alt="appStore"
                                           width={320} height={107}/>
                                </Link>
                                <Link href="https://play.google.com/store/apps/details?id=com.navisdevs.bimar"
                                      className="">
                                    <Image src="assets/googleStrore.svg" priority alt="googleStrore"
                                           width={320} height={107}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionCertificate/>
            <section className="flex flex-col gap-10 self-stretch items-center mt-9" id="Лояльность">
                <div className="flex max-w-[1440px] px-[100px] flex-col align-center">
                    <h2 className="max-w-[1203px] text-[var(--primary)] text-center text-4xl font-bold leading-11.5">
                        <div>Копите бонусы с BIMAR!</div>
                    </h2>
                    <p className="text-[28px] font-semibold text-[#212121] leading-9 max-w-[1240px] mt-3.5 text-center">
                        Участвуйте в нашей программе и получайте до 10% стоимости покупок обратно
                        в виде бонусов
                    </p>
                </div>
                <div className="w-full h-auto flex relative">
                    <div
                        className="max-h-[686px] aspect-[885/686] bg-contain w-full bg-no-repeat h-auto bg-left relative"
                        style={{backgroundImage: "url(/assets/Иллюстрация.png)"}}
                    >
                        <Image src="/assets/iPhone_screen3_option3.png" priority alt="iPhone_screen3_option3.png"
                               width={336} height={705}
                               className="h-full w-auto rounded-[40px] object-contain 336/705 absolute top-0 left-[270px]"
                        />
                    </div>
                    <div
                        className="flex flex-col gap-10 pr-[100px] w-auto absolute right-0 top-1/2 transform -translate-y-1/2">
                        <span>
                            <BonusCurd
                                title="Бонусы за каждую покупку"
                                img={<Image src="/assets/teleshka.svg" priority
                                            width={154} height={154}
                                            alt="teleshka.svg"/>}
                            />
                        </span>
                        <span>
                            <BonusCurd
                                title="Моментальное зачисление через QR"
                                img={<Image src="/assets/lego.svg" priority
                                            width={154} height={154}
                                            alt="lego.svg"/>}
                            />
                        </span>
                        <span>
                            <BonusCurd
                                title="Обменяйте бонусы на скидки и подарки"
                                img={<Image src="/assets/podarok.svg" priority
                                            width={154} height={154}
                                            alt="podarok.svg"/>}
                            />
                        </span>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-10 self-stretch items-center mt-9">
                <div className="flex max-w-[1440px] px-[100px] flex-col align-center">
                    <h2 className="max-w-[1203px] text-[var(--primary)] text-center text-4xl font-bold leading-11.5">
                        <div>Ваша бонусная карта — ключ к выгодным покупкам</div>
                    </h2>
                    <p className="text-[28px] font-semibold text-[#212121] leading-9 max-w-[1240px] mt-3.5 text-center">
                        Копите и тратьте бонусы легко — в любом магазине BIMAR.
                    </p>
                </div>
                <div className="w-full h-auto flex relative">
                    <Image alt="subsection.svg" src="assets/subsection.svg" className="w-full h-auto" width={1440}
                           height={715}/>
                </div>
            </section>
            <section className="flex flex-col gap-10 self-stretch items-center mt-9" id="Скачать">
                <div className="flex max-w-[1440px] px-[100px] flex-col align-center">
                    <h2 className="max-w-[1203px] text-[var(--primary)] text-center text-4xl font-bold leading-11.5">
                        <div>Ваш супермаркет в телефоне</div>
                    </h2>
                    <p className="text-[28px] font-semibold text-[#212121] leading-9 max-w-[1240px] mt-3.5 text-center">
                        Скачайте бесплатное приложение BIMAR для iOS и Android — акции, бонусы и избранное всегда под
                        рукой.
                    </p>
                </div>
                <div className="w-full h-auto flex relative overflow-hidden">
                    <div
                        className="max-h-[686px] aspect-[885/686] bg-contain w-full bg-no-repeat h-auto bg-[100px] relative"
                        style={{backgroundImage: "url(/assets/Иллюстрация.png)"}}
                    >
                        <Image src="/assets/iphone.svg" priority alt="iphone"
                               width={980} height={857}
                               className=" rounded-[40px] object-contain 980/857 absolute top-1/2 left-[50px] transform -translate-y-1/2"
                        />
                    </div>
                    <div className="flex flex-col absolute gap-8 top-1/2 right-[100px] transform -translate-y-1/2">
                        <Link href="https://apps.apple.com/kg/app/%D0%B1%D0%B8%D0%BC%D0%B0%D1%80/id6747991622">
                            <Image src="assets/appStore.svg" priority alt="appStore"
                                   width={320} height={107}
                                   className=""
                            />
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.navisdevs.bimar"
                              className="">
                            <Image src="assets/googleStrore.svg" priority alt="googleStrore" width={320} height={107}/>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-10 self-stretch items-center mt-9 pb-14" id="Карта">
                <div className="flex max-w-[1440px] px-[100px] flex-col align-center">
                    <h2 className="max-w-[1203px] text-[var(--primary)] text-center text-4xl font-bold leading-11.5">
                        <div>Где нас найти</div>
                    </h2>
                    <p className="text-[28px] font-semibold text-[#212121] leading-9 max-w-[1240px] mt-3.5 text-center">
                        Здесь отмечены все филиалы сети BIMAR. Выберите ближайший, чтобы узнать точный адрес и время
                        работы.
                    </p>
                </div>
                <div className="max-w-[1240px] aspect-1440/589 w-full h-full flex gap-5">
                    <div className="w-[70%] h-full">
                        <div className="rounded-3xl h-full overflow-hidden">
                            <TwoGisMap/>
                        </div>
                    </div>
                    <div className="w-[30%] h-full flex flex-col gap-1">
                        <div className="flex flex-col">
                            <span
                                className="text-[#DD2B1C] text-[22px] font-semibold leading-[22px]">Наши адресса</span>
                            <span className="text-[18px] font-medium leading-[24px]">г. Бишкек:</span>
                        </div>
                        <ScrollArea style={{ height: 'calc(100% - 50px)', width: 'calc(100% - 34px)' }}>
                            <div className="flex flex-col gap-2">
                                {storeLocations.map((location, idx) => (
                                    <CurdStoreForMap duringWork={location.duringWork} name={location.name} key={idx}/>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Page;