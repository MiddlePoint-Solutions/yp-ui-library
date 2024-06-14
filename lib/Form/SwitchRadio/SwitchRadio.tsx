import clsx from "clsx";
import React, { forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

interface SwitchRadioOption {
  label: string;
  value: string;
}

interface SwithRadioProps {
  options: SwitchRadioOption[];
  selected: string;
  onChange: (selected: string) => void;
  className?: string;
}

export const SwitchRadio: React.FC<SwithRadioProps> = forwardRef<
  HTMLInputElement,
  SwithRadioProps
>(({ options, selected, onChange, className }, ref) => {
  const optionRef = React.useRef<HTMLLabelElement | null>(null);
  const selectedIndex = options.findIndex(
    (option) => option.value === selected,
  );
  const selectedLeft = useMemo(() => {
    if (optionRef.current) {
      return optionRef.current.clientWidth * selectedIndex;
    }
    return 0;
  }, [selectedIndex]);

  return (
    <div
      className={twMerge(
        clsx(
          "relative group inline-flex h-5 items-center rounded-full  transition",
          "bg-grayish-900 border border-grayish-600",
          className,
        ),
      )}
    >
      {options.map((option, index) => (
        <label
          key={option.value}
          className="flex z-10 w-5 justify-center items-center cursor-pointer"
          ref={(el) => {
            if (index === 0) {
              optionRef.current = el;
            }
          }}
          onClick={() => onChange(option.value)}
        >
          <input
            type="radio"
            value={option.value}
            checked={selected === option.value}
            className="hidden"
            ref={ref}
          />
          <span className="text-xss p-1 text-grayish-500">{option.label}</span>
        </label>
      ))}
      <span
        aria-hidden="true"
        className={twMerge(
          clsx("absolute size-5 rounded-full transition bg-white"),
        )}
        style={{ transform: `translateX(${selectedLeft}px)` }}
      />
    </div>
  );
});
