import { useRouter } from "next/router";

const CarRentalService = () => {
    const router = useRouter()
    return (
        <section className="py-28 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `linear-gradient(rgba(10, 25, 49, 0.5), rgba(10, 25, 49, 0.7)), url('https://kitnew.moxcreative.com/mobirentz/wp-content/uploads/sites/28/2022/12/female-driver-inside-of-modern-automobile-testing-brand-new-car.jpg')` }}>
            <div className='mx-auto max-w-7xl text-white flex justify-end'>
                <div className='md:w-6/12 mx-1'>
                    <div className='flex gap-x-2'>4.8 (729 Reviews)
                        <div className='text-[#ffc947]'>
                            <i className="mr-1 text-sm fa-solid fa-star"></i>
                            <i className="mr-1 text-sm fa-solid fa-star"></i>
                            <i className="mr-1 text-sm fa-solid fa-star"></i>
                            <i className="mr-1 text-sm fa-solid fa-star"></i>
                            <i className="mr-1 text-sm fa-solid fa-star-half-stroke"></i>
                        </div>
                    </div>
                    <h2 className='text-xl sm:text-3xl lg:text-5xl font-bold md:my-4'>Car Rental Service With Smiling Prices</h2>
                    <p className='text-sm mb-4'>Tempus aliquet duis himenaeos maecenas efficitur senectus iaculis penatibus torquent. Mattis torquent praesent maecenas semper ac. Tellus mollis si turpis tristique faucibus a pretium dis.</p>
                    <button onClick={() => router.push('/about')} className='bg-[#ffc947] text-black px-4 md:px-6 py-2 rounded mt-1 md:mt-3'>More About Us</button>
                </div>
            </div>
        </section>
    );
};

export default CarRentalService;