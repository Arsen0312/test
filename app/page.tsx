"use client"

import {SegmentControls} from "@/components/ui/segementControlers";
import React, {useState} from "react";
import {Toggle} from "@/components/ui/toggle";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Switch} from "@/components/ui/switch";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import mainImage4Page from "../public/assets/mainImage4Page.png"
import ProductList from "@/feature/ProductList/ui/ProductList";
import ProductCard from "@/feature/ProductCard/ui/ProductCard";
import avatarSeller from "../public/assets/avatarSeller.png"
import {StaticImport} from "next/dist/shared/lib/get-img-props";

const toggleOptions = [
    {label: "Робуксы", value: "robuxes", count: 395, active: true},
    {label: "Подарочные карты", value: "gift-cards", count: 1193},
    {label: "Донат робуксов (паки)", value: "donat-packs", count: 777},
    {label: "Premium", value: "premium", count: 1193},
];

const optionSelectServer = [
    {label: "Европа", value: "Европа"},
    {label: "Азия", value: "Азия"},
    {label: "Южная Америка", value: "Южная Америка"},
    {label: "Северная Америка", value: "Северная Америка"},
];

const optionSelectSide = [
    {label: "Хорошие", value: "Хорошие"},
    {label: "Плохие", value: "Плохие"},
];

type ToggleOption = {
    label: string;
    value: string;
};

const optionsForSegmentControls: ToggleOption[] = [
    {label: "RU", value: "ru"},
    {label: "EU, NA", value: "en, na"},
    {label: "FREE", value: "free"},
]

export type TOptionMainDataPage = {
    server: string;
    side: string;
    count: number;
    price: number;
    seller: {
        username: string;
        id: string;
        rating: number;
        avatar: string | StaticImport;
        reviews: number;
        seniority: string
        online: boolean
    }
}

const avatar = avatarSeller

const optionsMainDataPage: TOptionMainDataPage[] = [
    {
        server: "Асгард", side: "Элийцы", count: 200, price: 124,
        seller: {
            username: "Кто-то",
            id: "0",
            rating: 4.5,
            reviews: 123,
            seniority: "4 года",
            avatar: avatar,
            online: false
        }
    },
    {
        server: "Европа", side: "Плохие", count: 315, price: 111,
        seller: {
            username: "Торговец",
            id: "1",
            rating: 4.2,
            reviews: 87,
            seniority: "2 года",
            avatar: avatar,
            online: true
        }
    },
    {
        server: "Азия", side: "Хорошие", count: 500, price: 130,
        seller: {
            username: "Старик",
            id: "2",
            rating: 5.0,
            reviews: 205,
            seniority: "6 лет",
            avatar: avatar,
            online: false
        }
    },
    {
        server: "Южная Америка", side: "Элийцы", count: 100, price: 180,
        seller: {
            username: "Продайко",
            id: "3",
            rating: 3.8,
            reviews: 44,
            seniority: "1 год",
            avatar: avatar,
            online: true
        }
    },
    {
        server: "Северная Америка", side: "Плохие", count: 1250, price: 90,
        seller: {
            username: "Бывалый",
            id: "4",
            rating: 4.8,
            reviews: 512,
            seniority: "8 лет",
            avatar: avatar,
            online: true
        }
    },
    {
        server: "Асгард", side: "Хорошие", count: 850, price: 150,
        seller: {
            username: "Игроман",
            id: "5",
            rating: 4.0,
            reviews: 66,
            seniority: "3 года",
            avatar: avatar,
            online: false
        }
    },
    {
        server: "Европа", side: "Элийцы", count: 340, price: 140,
        seller: {
            username: "Эмиль",
            id: "6",
            rating: 3.5,
            reviews: 143,
            seniority: "5 лет",
            avatar: avatar,
            online: true
        }
    },
    {
        server: "Азия", side: "Плохие", count: 210, price: 170,
        seller: {
            username: "OnlinePro",
            id: "7",
            rating: 4.9,
            reviews: 612,
            seniority: "7 лет",
            avatar: avatar,
            online: false
        }
    },
    {
        server: "Южная Америка", side: "Хорошие", count: 920, price: 95,
        seller: {
            username: "Ветеран",
            id: "8",
            rating: 5.0,
            reviews: 245,
            seniority: "10 лет",
            avatar: avatar,
            online: true
        }
    },
    {
        server: "Северная Америка", side: "Элийцы", count: 410, price: 99,
        seller: {
            username: "Новичок",
            id: "9",
            rating: 3.7,
            reviews: 32,
            seniority: "6 месяцев",
            avatar: avatar,
            online: false
        }
    },
    {
        server: "Асгард", side: "Плохие", count: 370, price: 165,
        seller: {
            username: "Робот",
            id: "10",
            rating: 4.3,
            reviews: 299,
            seniority: "3 года",
            avatar: avatar,
            online: true
        }
    },
    {
        server: "Европа", side: "Хорошие", count: 120, price: 134,
        seller: {
            username: "Профи",
            id: "11",
            rating: 4.7,
            reviews: 421,
            seniority: "9 лет",
            avatar: avatar,
            online: false
        }
    },
    {
        server: "Азия", side: "Элийцы", count: 670, price: 128,
        seller: {
            username: "Маркетолог",
            id: "12",
            rating: 4.4,
            reviews: 56,
            seniority: "2 года",
            avatar: avatar,
            online: true
        }
    },
    {
        server: "Южная Америка", side: "Плохие", count: 720, price: 147,
        seller: {
            username: "Успешный",
            id: "13",
            rating: 4.1,
            reviews: 78,
            seniority: "1 год",
            avatar: avatar,
            online: true
        }
    },
    {
        server: "Северная Америка", side: "Хорошие", count: 530, price: 143,
        seller: {
            username: "Надежный",
            id: "14",
            rating: 5.0,
            reviews: 567,
            seniority: "11 лет",
            avatar: avatar,
            online: false
        }
    }
];

const Home = () => {
    const [value, setValue] = useState<string>(optionsForSegmentControls[0].value);

    return (
        <main className="conteinerPage relative">
            <section className="max-w-[808] w-full">
                <Image className="absolute right-0 top-0 pointer-events-none" src={mainImage4Page} alt="mainImage"
                       width={450} height={450}/>
                <SegmentControls options={optionsForSegmentControls} value={value} onChange={setValue}/>
                <h1 className="mt-2 text-2xl font-semibold">
                    Робуксы Roblox
                </h1>
                <p className="mt-1 text-[var(--p-text-gray)] leading-6 max-w-[680px] w-full font-sans font-normal text-base tracking-normal">
                    Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории, на которую вы
                    сейчас смотрите. Какой-то длинный текст, связанный с SEO-оптимизацией относительно данной категории,
                    на которую вы сейчас смотрите.
                </p>
                <div className="flex gap-2 mt-4">
                    {toggleOptions.map((option) =>
                        (<Toggle pressed={option?.active} key={option.label}>{option.label} {option.count}</Toggle>)
                    )}
                </div>
            </section>
            <hr className="max-w-[808] w-full mt-6 mb-4"/>
            <section className="max-w-[808] w-full">
                <div className="flex gap-1">
                    <Select>
                        <SelectTrigger className="w-[168px]">
                            <SelectValue placeholder="Сервер"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className="gap-1">
                                {optionSelectServer.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[168px]">
                            <SelectValue placeholder="Сторона"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className="gap-1">
                                {optionSelectSide.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div className="flex items-center gap-1 border border-gray-200 rounded-md px-3">
                        <span>Только продавцы онлайн</span>
                        <Switch/>
                    </div>
                    <Button className="w-[209px]">
                        Продать игровую валюту
                    </Button>
                </div>
            </section>
            <section className="mt-6 max-w-[808] w-full">
                <div className="flex gap-6">
                    <span className="max-w-[104px] w-full">Сервер</span>
                    <span className="max-w-[168px] w-full">Сторона</span>
                    <span className="max-w-[232px] w-full">Продаваец</span>
                    <span className="max-w-[104px] w-full text-right">Наличие</span>
                    <span className="max-w-[104px] w-full text-right">Цена/1кк</span>
                </div>
                <ProductList isLoading={false} list={optionsMainDataPage}
                             render={(product) =>
                                 <ProductCard server={product.server} seller={product.seller} count={product.count}
                                              price={product.price} side={product.side}/>
                             }/>
                <Button variant="white" className="w-full text-center mt-6">
                    Показать больше
                </Button>
            </section>
            <section className="mt-10 text-[var(--p-text-gray)] text-sm">
                <hr/>
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="mt-6">
                            Робуксы — это валюта платформы мини игр Roblox, обеспечивающая комфортный геймплей и расширенные
                            возможности для игрока. Что естественно притягивает толпы желающих их приобрести. Сделать это
                            безопасно и без переплат лучше всего на проверенной площадке, которой и является биржа игровых
                            ценностей FunPay. Мы обеспечиваем комфортные условия для торговли робуксами Roblox без посредников,
                            поэтому на нашей торговой площадке всегда присутствует:
                        </p>
                        <ul style={{ listStyle: "inside"}}>
                            <li>
                                Безопасность сделок. Они проходят в три этапа: оплата, получение игровой валюты, подтверждение
                                выполнения заказа.
                            </li>
                            <li>
                                Реальный рыночный курс робуксов. Формируется в условиях естественной конкуренции между
                                продавцами.
                            </li>
                            <li>
                                Быстрое оформление заказов. Всего за несколько кликов, с оплатой любым удобным для вас способом.
                            </li>
                        </ul>
                        <p>
                            Если же у вас возникнут вопросы, то служба поддержки FunPay ответит на них в любое время суток!
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium text-base">Как купить</h3>
                        <p>
                            Покупка робуксов осуществляется просто, как мы писали выше, нужно сделать всего три действия:
                        </p>
                        <ol style={{ listStyle: "inside"}}>
                            <li>Выбрать предложение, кликнув на него, и находясь на странице оформления заказа, связаться с продавцом.</li>
                            <li>Оплатить заказ на нужное количество робуксов.</li>
                            <li>Получить игровую валюту RBX и подтвердить выполнение заказа. После можно оставить отзыв продавцу и
                                оценить его работу.</li>
                        </ol>
                        <p>
                            Продавец получит ваши деньги только после того, как вы получите робуксы в Roblox и отправите системе
                            подтверждение о выполнении заказа.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium text-base">Продавцам</h3>
                        <p>
                            Если вы опытный продавец или начинаете свой путь с нуля — неважно, у вас есть замечательная возможность
                            продать робуксы через FunPay. Чтобы стать продавцом нашей биржи, следуйте следующим принципам:
                        </p>
                        <ol style={{ listStyle: "inside" }}>
                            <li>Выставляйте на продажу только ту сумму, что есть у вас в наличии, чтобы вы смогли быстро передать
                                игровую валюту клиенту.</li>
                            <li>Вежливо отвечайте на вопросы потенциальных покупателей.</li>
                            <li>Ответственно относитесь к своим обязанностям и выполняйте заказы в кратчайшие сроки.</li>
                            <li>Покупатель должен получить столько робуксов, сколько он указал в заказе.</li>
                        </ol>
                        <p>
                            И помните, чем больше у вас довольных клиентов, тем выше шанс превратить своё хобби в отличный источник
                            дохода. Присоединяйтесь к FunPay!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;