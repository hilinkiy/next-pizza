import React from "react";
import {cn} from '@/lib/utils'
import {FilterCheckbox, FilterCheckboxProps} from "@/components/shared/filter-checkbox";

type TItem = FilterCheckboxProps

interface IProps {
    title: string;
    items: TItem[];
    defaultItems?: TItem[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (value: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFilterGroup: React.FC<IProps> = (
    {className,
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = 'Поиск...',
        onChange,
        defaultValue
    }) => {
    return (
        <div className={cn('', className)}>
            <p className={"font-bold mb-3"}>
                {title}
            </p>
            <div className={"mb-5"}>
                <input placeholder={searchInputPlaceholder} className={"bg-gray-50 border-none"}/>
            </div>
            <div className={"flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar"}>
                {items.map((item, index) => (
                    <FilterCheckbox onCheckedChange={(ids) => console.log(ids)}
                                    key={index}
                                    checked={false}
                                    value={item.value}
                                    text={item.text}
                                    endAdornment={item.endAdornment}
                    />
                ))}
            </div>
        </div>
    )
}