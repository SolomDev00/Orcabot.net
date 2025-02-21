import { SoEditSquare2, SoTrash } from "solom-icon";
import Button from "../../../components/ui/elements/Button";
import Input from "../../../components/ui/elements/Input";
import PersonIcon from "../../../assets/icons/person.svg";

const AdminSettingsPage = () => {
  return (
    <section id="adminSettings" className="w-full flex flex-col items-start">
      <div className="h-auto w-full flex flex-col items-center pt-12 pb-6">
        <div className="w-full flex flex-row items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-[#374151]">Settings</h2>
        </div>
        <div className="w-full">
          <div className="bg-white w-full p-5 border border-[#E5E7EB] rounded-xl mb-5">
            <h3 className="text-2xl font-semibold text-black mb-5">
              Account
            </h3>
            <div className="flex justify-center items-center mb-10">
              <div className="relative">
                <img
                  className="w-36 h-36"
                  src={PersonIcon}
                  alt="Person"
                />
                <div className="absolute bottom-2 left-28 bg-white p-1 rounded-full cursor-pointer">
                  <SoEditSquare2 className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
            <form>
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="name" className="text-[#070D18]">
                        Name
                      </label>
                      <button className="text-primary text-sm">
                        Edit
                      </button>
                    </div>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="email" className="text-[#070D18]">
                        Email
                      </label>
                      <button className="text-primary text-sm">
                        Edit
                      </button>
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Example@Email.exp"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password" className="text-[#070D18]">
                      Password
                    </label>
                    <button className="text-primary text-sm">Edit</button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-center gap-3 mt-6">
                <Button
                  fullWidth
                  type="submit"
                  className="bg-[#848484] border border-[#848484] text-white hover:bg-transparent hover:text-[#848484] duration-150"
                >
                  Save
                </Button>
                <Button
                  fullWidth
                  type="button"
                  className="bg-transparent border border-[#848484] dark:text-[#848484] hover:bg-[#848484] hover:dark:text-white duration-150"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
          <div className="p-5 border border-[#E5E7EB] rounded-xl">
            <h3 className="text-2xl font-semibold text-black mb-5">
              Help
            </h3>
            <form>
              <div className="grid grid-cols-1 gap-4">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="contact" className="text-[#070D18]">
                      Contact Us
                    </label>
                    <button className="text-primary text-sm">Edit</button>
                  </div>
                  <Input
                    id="contact"
                    type="email"
                    placeholder="Youssefwael@email.com"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="num" className="text-[#070D18]">
                      Number Phone
                    </label>
                    <button className="text-primary text-sm">Edit</button>
                  </div>
                  <Input
                    id="num"
                    type="text"
                    placeholder="+1 x xxx xxx xxxx"
                  />
                </div>
                <div className="w-full flex justify-center items-center gap-3 mt-6">
                  <Button
                    fullWidth
                    type="submit"
                    className="bg-[#848484] border border-[#848484] text-white hover:bg-transparent hover:text-[#848484] duration-150"
                  >
                    Save
                  </Button>
                  <Button
                    fullWidth
                    type="button"
                    className="bg-transparent border border-[#848484] dark:text-[#848484] hover:bg-[#848484] hover:dark:text-white duration-150"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-5 p-5 border border-[#E5E7EB] rounded-xl">
            <h3 className="text-[#1F2937] font-semibold mb-2">
              Delete Account
            </h3>
            <p className="text-[#6B7280] mb-4">
              Deleting your account will remove all of your information
              from our database. This cannot be undone.
            </p>
            <button className="w-full bg-[#FDDFDF] text-[#DB2323] flex items-center justify-center gap-3 font-semibold rounded-lg px-4 py-2 hover:bg-primary/90 hover:text-white duration-150">
              Delete Account <SoTrash className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSettingsPage;
