import React from "react";
import {Icon} from "../icons";
import {Text} from "../Text";

interface NavbarProps {
  options: { label: string; icon: string }[];
  selected: string;
  onChange: (value: string) => void;
}

export const Navbar = ({ options, selected, onChange }: NavbarProps) => {
  return (
    <div className="flex w-full p-3 bg-white gap-3 justify-around max-w-[400px]">
      {options.map((option) => (
        <div
          onClick={() => onChange(option.label)}
          className={'flex flex-col justify-center items-center cursor-pointer'}
        >
          <Icon variant={option.icon} size="small" color={selected === option.label ? 'primary' : 'black'} />
          <Text variant={'body4'} className={`text-[8px] font-light ${selected === option.label ? 'text-primary' : 'text-black'}`}>{option.label}</Text>
        </div>
      ))}
    </div>
  );
};
