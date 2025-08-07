import React, { useState, KeyboardEvent } from 'react';
import { IconX, IconPlus, IconTag } from '@tabler/icons-react';

interface TagsInputProps {
    tags: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
    className?: string;
}

export default function TagsInput({ tags = [], onChange, placeholder = "Add tags...", className = "" }: TagsInputProps) {
    const [inputValue, setInputValue] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag();
        } else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
            // Remove last tag when backspace is pressed on empty input
            removeTag(tags.length - 1);
        }
    };

    const addTag = () => {
        const newTag = inputValue.trim();
        if (newTag && !tags.includes(newTag)) {
            onChange([...tags, newTag]);
            setInputValue('');
        }
    };

    const removeTag = (indexToRemove: number) => {
        onChange(tags.filter((_, index) => index !== indexToRemove));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
        if (inputValue.trim()) {
            addTag();
        }
    };

    return (
        <div className={className}>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <IconTag className="w-4 h-4 mr-1" />
                Tags
            </label>

            <div
                className={`
          w-full min-h-[48px] px-3 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 
          rounded-xl text-gray-900 dark:text-white transition-all duration-200 cursor-text
          ${isInputFocused ? 'ring-2 ring-gray-900 dark:ring-white border-transparent' : 'hover:border-gray-300 dark:hover:border-gray-700'}
        `}
                onClick={() => document.getElementById('tags-input')?.focus()}
            >
                <div className="flex flex-wrap gap-2 items-center">
                    {/* Existing Tags */}
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-gradient-to-r from-orange-100 via-pink-100 to-red-100 dark:from-orange-900/30 dark:via-pink-900/30 dark:to-red-900/30 text-orange-800 dark:text-orange-200 border border-orange-200 dark:border-orange-800"
                        >
                            {tag}
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeTag(index);
                                }}
                                className="ml-2 hover:bg-orange-200 dark:hover:bg-orange-800 rounded-full p-0.5 transition-colors duration-150"
                            >
                                <IconX className="w-3 h-3" />
                            </button>
                        </span>
                    ))}

                    {/* Input Field */}
                    <input
                        id="tags-input"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={handleInputBlur}
                        className="flex-1 min-w-[120px] bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500"
                        placeholder={tags.length === 0 ? placeholder : "Add another tag..."}
                    />

                    {/* Add Button */}
                    {inputValue.trim() && (
                        <button
                            type="button"
                            onClick={addTag}
                            className="flex items-center justify-center w-6 h-6 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors duration-150"
                        >
                            <IconPlus className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                        </button>
                    )}
                </div>
            </div>

            {/* Helper Text */}
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Press Enter or comma to add tags. Click × to remove.
            </p>
        </div>
    );
}