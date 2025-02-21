/* eslint-disable @typescript-eslint/no-explicit-any */
import { SoEditSquare2, SoTrash } from "solom-icon";
import Button from "../../../components/ui/elements/Button";
import { useEffect, useState } from "react";
import useAuthenticatedQuery from "../../../hooks/useAuthenticatedQuery";
import axiosInstance from "../../../config/axios.config";
import toast from "react-hot-toast";
import InputField from "../../../components/ui/elements/InputField";
import Cookies from "universal-cookie";
import {
  tokenSelector,
  updateUsername,
  updateProfilePicture,
} from "../../../app/functions/token";
import { useDispatch, useSelector } from "react-redux";
import {
  AtSign,
  HomeIcon,
  LockIcon,
  LockOpen,
  PhoneCall,
  UserCheck2,
} from "lucide-react";

interface ProfileState {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
  profile_picture: File | string | null;
}

interface ErrorsState {
  [key: string]: string[];
}

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const token = new Cookies().get("userLoggedCIT");
  const { user } = useSelector(tokenSelector);

  const [profile, setProfile] = useState<ProfileState>({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    profile_picture: null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [changes, setChanges] = useState({
    name: false,
    email: false,
    phone: false,
    password: false,
    password_confirmation: false,
    profile_picture: false,
  });

  const { data, isLoading, error } = useAuthenticatedQuery({
    queryKey: ["userProfile"],
    URL: "user",
    config: {
      headers: {
        Authorization: `Bearer ${token?.token}`,
      },
    },
  });

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        password: "",
        password_confirmation: "",
        profile_picture: user.profile_picture,
      });

      setImagePreview(user.profile_picture || null);
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    setChanges((prevChanges) => ({
      ...prevChanges,
      [name]: value !== data?.data?.user?.[name],
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
      if (!validTypes.includes(file.type)) {
        toast.error(
          "Please select an image in jpeg, png, jpg, or gif format only."
        );
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setProfile((prevProfile) => ({
        ...prevProfile,
        profile_picture: file,
      }));
    }
  };

  const handleSubmit = async () => {
    const newErrors: ErrorsState = {};
    const formData = new FormData();

    Object.entries(profile).forEach(([key, value]) => {
      if (value && value !== data?.data?.user?.[key]) {
        if (key === "profile_picture") {
          if (value instanceof File) {
            formData.append(key, value);
          } else {
            formData.append(key, "");
          }
        } else {
          formData.append(key, value.toString());
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      toast.error("No field has been updated!");
      return;
    }

    setIsUpdating(true);
    try {
      const response = await axiosInstance.post(
        `v1/users/update-profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        dispatch(updateUsername(response.data.data.user.name));
        dispatch(updateProfilePicture(response.data.data.user.profile_picture));
        setChanges({
          name: false,
          email: false,
          phone: false,
          password: false,
          password_confirmation: false,
          profile_picture: false,
        });
        if (response.data?.user) {
          setProfile((prev) => ({
            ...prev,
            ...response.data.user,
            password: "",
            password_confirmation: "",
          }));
        }
        toast.success("User Updated successfully!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        const errorMessages = error.response.data.data.errors;
        const firstErrorField = Object.keys(errorMessages)[0];
        const firstErrorMessage = errorMessages[firstErrorField][0];
        toast.error(firstErrorMessage);
      } else {
        toast.error("An unexpected error occurred!");
      }
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (!isUpdating && Object.values(changes).some((change) => change)) {
      setChanges({
        name: false,
        email: false,
        phone: false,
        password: false,
        password_confirmation: false,
        profile_picture: false,
      });
    }
  }, [changes, isUpdating]);

  const handleCancel = () => {
    if (user) {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        password: "",
        password_confirmation: "",
        profile_picture: user.profile_picture,
      });
    }
    toast.success("Fields reset successfully!");
  };

  // if (isLoading)
  //   return (
  //     <div className="w-full h-[50vh] flex items-center justify-center">
  //       <LoadingScreen />
  //     </div>
  //   );
  // if (error) return <div>Error loading profile</div>;

  return (
    <section
      id="userProfile"
      className="w-full flex flex-col items-start p-4 pr-8"
    >
      <div className="bg-white px-6 w-full">
        <div className="relative flex items-center mb-6">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt={profile.name}
              className="w-28 h-28 border-2 border-primary rounded-full"
            />
          ) : (
            <div className="w-28 h-28 bg-black/20 rounded-full" />
          )}
          <div className="absolute bottom-2 right-0 bg-white p-1 rounded-full cursor-pointer">
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <SoEditSquare2 className="w-5 h-5 text-primary" />
            </label>
          </div>
        </div>
        <form>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <InputField
                id="user"
                label="الاسم"
                name="name"
                value={profile.name || ""}
                onChange={handleChange}
                icon={UserCheck2}
              />
              <InputField
                id="email"
                label="البريد الإلكتروني"
                name="email"
                value={profile.email || ""}
                onChange={handleChange}
                icon={AtSign}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                id="phone"
                label="رقم الهاتف"
                name="phone"
                value={profile.phone || ""}
                onChange={handleChange}
                icon={PhoneCall}
              />
              <InputField
                id="address"
                label="العنوان"
                name="address"
                // value={profile.phone || ""}
                value={""}
                placeholder="مدينة النصر، شارع الثورة، حي الزمالك"
                onChange={handleChange}
                icon={HomeIcon}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                id="password"
                label="كلمة السر"
                name="password"
                value={profile.password}
                onChange={handleChange}
                placeholder="*********"
                icon={LockIcon}
              />
              <InputField
                id="password_confirmation"
                label="تاكيد كلمة السر"
                name="password_confirmation"
                value={profile.password_confirmation}
                onChange={handleChange}
                placeholder="*********"
                icon={LockOpen}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-3 mt-6">
            <Button
              fullWidth
              type="submit"
              onClick={handleSubmit}
              isLoading={isUpdating}
              className="gradientBg rounded-full text-white duration-150"
            >
              حفظ
            </Button>
            <Button
              fullWidth
              type="button"
              onClick={handleCancel}
              className="hidden bg-transparent border border-[#848484] dark:text-[#848484] hover:bg-[#848484] hover:dark:text-white duration-150"
            >
              Cancel
            </Button>
          </div>
        </form>
        <div className="mt-8 hidden">
          <h3 className="text-gray-800 font-semibold mb-2">Delete Account</h3>
          <p className="text-gray-600 mb-4">
            Deleting your account will remove all of your information. This
            cannot be undone.
          </p>
          <button className="w-full bg-red-100 text-red-600 flex items-center justify-center gap-3 font-semibold rounded-lg px-4 py-2 hover:bg-red-500 hover:text-white">
            Delete Account <SoTrash className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserProfilePage;
