import { SoArrowRightDouble } from 'solom-icon';
import SuccessImg from '../../assets/success.svg'
import { Link } from "react-router-dom";

const SuccessPage = () => {
    return (
        <div className="bg-black fixed inset-0 flex items-center justify-center p-5 w-full z-[9999999]">
            <div className="flex flex-col items-center text-center">
                <img className="w-80" src={SuccessImg} alt="500 - Server Error" />
                <h2 className="mt-5 text-[36px] font-bold lg:text-[50px] text-white dark:text-white">
                    Successful Purchase!
                </h2>
                <p className="mt-5 lg:text-lg text-white dark:text-white">
                    The package or plan has been purchased successfully, <br /> please go to the Dashboard homepage to see more!
                </p>
                <div className="flex items-center justify-center space-x-4 my-10">
                    <Link
                        to={"/dashboard"}
                        className="bg-primary flex flex-row items-center gap-2 py-2 px-8 rounded-md text-base text-white hover:gap-5 duration-150"
                        reloadDocument
                    >
                        Dashboard
                        <SoArrowRightDouble className='w-5 h-5 text-white' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
