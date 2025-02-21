import { useState } from "react";
import { Heart, Minus, Plus, Share2, StarIcon } from "lucide-react";
import Chicken1 from "../../assets/chicken1.svg";
import Chicken2 from "../../assets/chicken2.svg";
import Button from "./elements/Button";
import { Disclosure } from "@headlessui/react";
import { SoArrowDown, SoArrowUp } from "solom-icon";
import RightModal from "./elements/RightModal";
import { reviews } from "../../data/review";

const images = [Chicken1, Chicken2, Chicken2, Chicken1];
const sizes = ["صغير", "وسط", "كبير"];
const extras = ["طماطم", "تومية", "سبايسي"];

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(sizes[1]);
  const [extra, setExtra] = useState(extras[2]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const filteredReviews = selectedRating
    ? reviews.filter((r) => r.rating === selectedRating)
    : reviews;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="flex flex-col">
        <div className="relative">
          <img
            src={selectedImage}
            alt="منتج"
            className="w-full max-h-[900px] rounded-lg z-0 relative"
          />
          <button className="absolute top-4 right-4 bg-[#636363]/20 p-2 rounded-full shadow-md">
            <Heart className="w-6 h-6 stroke-white" />
          </button>
          <button className="absolute top-4 left-4 bg-[#636363]/20 p-2 rounded-full shadow-md">
            <Share2 className="w-6 h-6 stroke-white" />
          </button>
          <div className="w-[90%] absolute -bottom-12 left-1/2 -translate-x-1/2 flex justify-between mt-4 bg-white px-4 py-2 rounded-md shadow-md z-10">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`صورة ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                  selectedImage === img ? "" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="mt-24">
          <h1 className="text-3xl font-medium text-black">
            فاميلي دينر (6 قطع)
          </h1>
          <div className="w-full flex items-center justify-between mt-6">
            <p className="text-black/85 text-xl font-extrabold">$227.3</p>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              ⭐<span className="text-[#374151] font-semibold">4.8 (999+)</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3 className="font-medium text-[#212121]">الحجم</h3>
          <div className="flex flex-col gap-2 mt-2">
            {sizes.map((s, idx) => (
              <label
                key={s}
                className={`flex items-center gap-2 cursor-pointer py-2 ${
                  idx === sizes.length - 1
                    ? "border-none"
                    : "border-b border-[#D5D5D5]"
                }`}
              >
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={size === s}
                  onChange={() => setSize(s)}
                  className="w-4 h-4 accent-primary bg-[#848484]"
                />
                <div className="w-full flex items-center justify-between">
                  <span className="text-[#848484]">{s}</span>
                  <span className="text-black/65 font-semibold">$$$$</span>
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-between border border-[#650E11] rounded-3xl mt-10">
          <button
            className="px-6 py-2 cursor-pointer"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 1}
          >
            <Minus className="text-[#650E11] w-4" />
          </button>
          <span className="px-4 text-[#650E11] text-lg">{quantity}</span>
          <button
            className="px-6 py-2 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="text-[#650E11] w-4" />
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <Button className="rounded-3xl">أضف إلى السلة</Button>
          <Button className="bg-[#FCE9E9] !text-primary rounded-3xl border border-[#FCE9E9] hover:border-primary hover:bg-transparent duration-200">
            شراء الآن
          </Button>
        </div>
        <Disclosure as="div" className="mt-8 max-h-28">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full justify-between gap-12 rounded-lg bg-transparent py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-primary p-3}`}
              >
                <span
                  className={`text-base font-medium max-sm:text-base text-left
                                        duration-150 ${
                                          open
                                            ? "text-primary"
                                            : "text-[#212121]"
                                        }`}
                >
                  الوصف
                </span>
                {open ? (
                  <SoArrowDown className={`transform h-5 w-5 text-primary`} />
                ) : (
                  <SoArrowUp className={`transform h-5 w-5 text-[#BEA71D]`} />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="text-base text-[#212121] border-b border-[#D5D5D5] pb-5">
                يمتلئ عشاق اللحوم بطبقة من شرائح سجق اللحم البقري، ولحم البقر
                المفروم، وبرجر اللحم البقري، ونقانق الدجاج. ,في قضمة واحدة،
                يمكنك تذوق مجموعة متنوعة من اللحوم المصنعة الكثيرة والكثيفة.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-6">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full justify-between gap-12 rounded-lg bg-transparent py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-primary p-3}`}
              >
                <span
                  className={`text-base font-medium max-sm:text-base text-left
                                        duration-150 ${
                                          open
                                            ? "text-primary"
                                            : "text-[#212121]"
                                        }`}
                >
                  الاضافات
                </span>
                {open ? (
                  <SoArrowDown className={`transform h-5 w-5 text-primary`} />
                ) : (
                  <SoArrowUp className={`transform h-5 w-5 text-[#BEA71D]`} />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col gap-2 mt-2">
                {extras.map((e, idx) => (
                  <label
                    key={e}
                    className={`flex items-center gap-2 cursor-pointer py-2 ${
                      idx === extras.length - 1
                        ? "border-none"
                        : "border-b border-[#D5D5D5]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="extra"
                      value={e}
                      checked={extra === e}
                      onChange={() => setExtra(e)}
                      className="w-4 h-4 accent-primary bg-[#848484]"
                    />
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[#848484]">{e}</span>
                      <span className="text-black/65 font-semibold">$$$$</span>
                    </div>
                  </label>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <RightModal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedRating(null)}
            className={`px-4 py-2 rounded-full ${
              selectedRating === null
                ? "bg-primary text-white"
                : "bg-[#FCE9E9] text-primary"
            }`}
          >
            الكل
          </button>
          {[5, 4, 3, 2, 1].map((star) => (
            <button
              key={star}
              onClick={() => setSelectedRating(star)}
              className={`px-4 py-2 flex items-center gap-1 rounded-full ${
                selectedRating === star
                  ? "bg-primary text-white"
                  : "bg-[#FCE9E9] text-primary"
              }`}
            >
              {star}
              <StarIcon
                className={`w-4 h-4 ${
                  selectedRating === star ? "fill-white" : "fill-primary"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          {filteredReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 rounded-lg flex items-start gap-3"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="w-full">
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span className="font-medium">{review.name}</span>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <div className="flex text-yellow-500 mt-1">
                  {"★".repeat(review.rating)}{" "}
                  <span className="text-gray-400 ml-1">
                    {"★".repeat(5 - review.rating)}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mt-2">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </RightModal>
    </div>
  );
};

export default ProductDetails;
