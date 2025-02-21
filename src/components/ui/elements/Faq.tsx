import { Disclosure } from "@headlessui/react";
import { ReactNode } from "react";
import { SoArrowDown, SoArrowUp } from "solom-icon";

interface IProps {
  question: string;
  answer: string | ReactNode;
  width?: string;
}

const FaqCards = ({ question, answer, width }: IProps) => {
  return (
    <div className="w-full">
      <div className={`w-full p-2 px-5 border-b border-[#D9DBE9]`}>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full justify-between gap-12 rounded-lg bg-transparent py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-primary p-3}`}
              >
                <span
                  className={`text-lg font-bold max-sm:text-base text-left
                                        duration-150 ${
                                          open
                                            ? "text-primary"
                                            : "text-[#111827]"
                                        }`}
                >
                  {question}
                </span>
                {open ? (
                  <SoArrowUp
                    className={`transform h-6 w-6 text-primary ${width}`}
                  />
                ) : (
                  <SoArrowDown
                    className={`transform h-6 w-6 text-[#170F49] ${width}`}
                  />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 pt-4 text-base text-[#4B5563]">
                {answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FaqCards;
