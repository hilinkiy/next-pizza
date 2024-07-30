import React from "react";
import {cn} from '@/lib/utils'
import {FilterCheckbox, RangeSlider, Title} from "@/components/shared/index";
import {Input} from "@/components/ui/index";
import {CheckboxFilterGroup} from "@/components/shared/checkbox-filters-group";

interface IProps {
    className?: string
}

export const Filters: React.FC<IProps> = ({className}) => {
    return (
        <div className={cn('', className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text="Можно собирать" value={1} />
                <FilterCheckbox text="Новинки" value={2} />
            </div>

            <div className="mt-5 border-y border-y-neutral-400 py-6 pb-7">
                <p className={"font-bold mb-3"}>Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type={"number"} placeholder={'0'} min={0} max={5000} defaultValue={0} />
                    <Input type={"number"} min={100} max={5000} placeholder={'5000'} value={500} />
                </div>
                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>
            <CheckboxFilterGroup title={"Ингредиенты"}
                                 items={}
                                 className={"mt-5"}
                                 limit={5}
                                 defaultItems={[
                                     {
                                         text: "fafas",
                                         value: '1',
                                     },
                                     {
                                         text: "fafasfasfas",
                                         value: '2',
                                     },
                                     {
                                         text: "fafahffhfdhds",
                                         value: '3',
                                     },
                                     {
                                         text: "fafa674tewerfs",
                                         value: '4',
                                     },
                                 ]}
                                 items={[
                                     {
                                         text: "fafas",
                                         value: '1',
                                     },
                                     {
                                         text: "fafasfasfas",
                                         value: '2',
                                     },
                                     {
                                         text: "fafahffhfdhds",
                                         value: '3',
                                     },
                                     {
                                         text: "fafa674tewerfs",
                                         value: '4',
                                     },
                                 ]}
            />
        </div>
    )
}