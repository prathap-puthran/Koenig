import React from 'react';
import {DropdownContainer} from './DropdownContainer';

/**
 *
 * @param {object} options
 * @param {{value: string, label: string}[]} [options.listOptions]
 * @param {string} [options.list]
 * @returns
 */
export function Input({dataTestId, list, listOptions, listVisibility, handleOptionMouseDown, value, placeholder, onChange, onFocus, onBlur}) {
    return (
        <>
            <div className="relative">
                <input
                    className="relative w-full rounded border border-grey-300 p-2 font-sans text-sm font-normal leading-snug text-grey-900 focus-visible:outline-none dark:border-grey-900 dark:bg-grey-900 dark:text-white dark:placeholder:text-grey-800"
                    data-testid={dataTestId}
                    list={list}
                    placeholder={placeholder}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    onFocus={onFocus}
                />
                {list && listOptions && !!listOptions.length && listVisibility && <DropdownContainer>
                    {listOptions.map((item) => {
                        return <li key={item.value} className="cursor-pointer px-4 py-2 text-left hover:bg-grey-100 dark:hover:bg-black" data-testid={`${dataTestId}-listOption`} onMouseDownCapture={event => handleOptionMouseDown(event, item.value)}>
                            <span className="block text-sm font-semibold leading-tight text-black dark:text-white" data-testid={`${dataTestId}-listOption-${item.label}`}>{item.label}</span>
                            <span className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-tight text-grey-700 dark:text-grey-600" data-testid={`${dataTestId}-listOption-${item.value}`}>
                                {item.value}
                            </span>
                        </li>;
                    })}
                </DropdownContainer>
                }
            </div>
        </>
    );
}
