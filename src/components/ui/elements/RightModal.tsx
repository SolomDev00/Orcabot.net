/* eslint-disable react-refresh/only-export-components */
import { Fragment, ReactNode, memo } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface IProps {
  title?: string;
  isOpen: boolean;
  children: ReactNode;
  description?: string;
  closeModal: () => void;
}

const RightModal = ({
  isOpen,
  closeModal,
  title,
  description,
  children,
}: IProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[999999999]"
          onClose={closeModal}
        >
          <div
            className="fixed inset-0 bg-black/25 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 flex items-center">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out-in duration-300"
              enterFrom="translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transform transition ease-out-in duration-200"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-0"
            >
              <Dialog.Panel className="w-[500px] h-full overflow-y-auto bg-[#3a3a4b] shadow-lg p-6 transform transition-all">
                {title && (
                  <Dialog.Title className="text-lg font-medium text-gray-900">
                    {title}
                  </Dialog.Title>
                )}
                {description && (
                  <p className="text-sm text-gray-500 mt-3">{description}</p>
                )}
                <div className="mt-4 relative">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default memo(RightModal);
