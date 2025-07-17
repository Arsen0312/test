"use client"

import React from 'react';
import {Button} from "@/components/ui/button";
import SegmentControl from "@/components/ui/SegmentControl";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {SegmentControls} from "@/components/ui/segementControlers";
import {Switch} from "@/components/ui/switch";
import {Toggle} from "@/components/ui/toggle";

const Page = () => {
    const [value, setValue] = React.useState<string>("on");
    const [segemnt, setSegemnt] = React.useState<string>("1");

    return (
        <div className="flex items-center justify-center h-full gap-1" style={{background: "white"}}>
            <div className="flex flex-col gap-1">
                <Button size="sm" variant="black">
                    Кнопка по умолчанию
                </Button>
                <Button size="sm" variant="black" disabled>
                    Кнопка disabled
                </Button>
            </div>
            <div className="flex flex-col gap-1">
                <Button size="sm" variant="default">
                    Кнопка по умолчанию
                </Button>
                <Button size="sm" variant="default" disabled>
                    Кнопка disabled
                </Button>
            </div>
            <div className="flex flex-col gap-1">
                <Button size="sm" variant="white">
                    Кнопка по умолчанию
                </Button>
                <Button size="sm" variant="white" disabled>
                    Кнопка disabled
                </Button>
            </div>
            <div>
                <SegmentControl value={value} onChange={(e) => setValue(e)}
                                options={[{label: "Отключены", value: "off"}, {label: "Включены", value: "on"}]} />
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Нажми что бы выбрать" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup className="gap-1">
                            <SelectLabel>Фрукты</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <SegmentControls onChange={setSegemnt} options={[{label: "1", value: "1"},{label: "2", value: "2"},{label: "3", value: "3"},]} value={segemnt}/>
                <Switch />
                <Toggle disabled>
                    Серебро
                </Toggle>
                <Toggle>
                    Серебро
                </Toggle>
            </div>
        </div>
    );
};

export default Page;