import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React, {useState} from "react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import inputFile from "@/public/assets/inputfile.svg"

export function DialogReportProfile() {
    const [text, setText] = useState("")
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-[209px] ml-auto">
                    Продать игровую валюту
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md gap-6">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">
                        Жалоба на 0xHearts.com
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-1 w-full">
                        <Label htmlFor="SelectValue">
                            <p className="text-[var(--p-text-gray)] text-sm">Причина жалобы</p>
                        </Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue id="SelectValue" placeholder="Выберите причину жалобы"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup className="gap-1">
                                    <SelectItem value="0">Просто так</SelectItem>
                                    <SelectItem value="1">Не просто так</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <Label htmlFor="SelectValue">
                            <p className="text-[var(--p-text-gray)] text-sm">Опишите проблему</p>
                        </Label>
                        <div className="relative">
                            <Textarea className="text-base" placeholder="Введите ваш текст" value={text} onChange={(e) => setText(e.target.value)}/>
                            <span className="absolute bottom-2 right-7 text-xs" style={{ color: "rgba(158, 157, 164, 1)" }}>
                                {text.length}/200
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <Label htmlFor="fileInp">
                            <p className="text-[var(--p-text-gray)] text-sm">Доказательства</p>
                        </Label>
                        <Label htmlFor="fileInp" className="flex flex-col">
                            <div style={{ borderColor: "rgba(158, 157, 164, 1)" }} className="border-1 border-dashed w-full h-[116px] rounded-[8px] flex flex-col items-center justify-center gap-3">
                                <Image src={inputFile} alt="inputFile" width={24} height={24}/>
                                <div className="flex-col flex gap-2 items-center">
                                    <h3>Выберите файл или перетащите его сюда</h3>
                                    <p className="font-normal text-base text-[var(--p-text-gray)]">JPEG или PNG до 5 MB</p>
                                </div>
                            </div>
                        </Label>
                        <Input type="file" id="fileInp" style={{ display: "none" }}/>
                    </div>
                </div>
                <DialogFooter className="sm:justify-start mt-[-4px]">
                        <div className="flex gap-2 w-full">
                            <Button type="button" variant="white" className="w-1/2">
                                Мне нужна поддержка
                            </Button>
                            <Button className="w-1/2">
                                Пожаловаться
                            </Button>
                        </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}