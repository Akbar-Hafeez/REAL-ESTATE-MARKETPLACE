import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const MainCarousel = [
        {'img':'https://firebasestorage.googleapis.com/v0/b/oneclickproperty.appspot.com/o/1718704144630pexels-alexander-f-ungerer-157458816-20702842.jpg?alt=media&token=725271c4-f6bf-4783-a8d2-68c9fd5c3ab1'},
        {'img':'https://firebasestorage.googleapis.com/v0/b/oneclickproperty.appspot.com/o/1718704753327pexels-nextvoyage-3051551.jpg?alt=media&token=625100b9-ba5a-459a-af28-ad0cc091426b'},
        {'img':'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg'},
        {'img':'https://firebasestorage.googleapis.com/v0/b/oneclickproperty.appspot.com/o/1718679401297bank-head-office-5971348_1920.jpg?alt=media&token=8b350f06-d634-43e5-b56a-aaffe884445f'},
        {'img':'https://cdn.pixabay.com/photo/2016/10/06/17/28/architecture-1719526_1280.jpg'}
        
      ]
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Autoplay,Navigation]);
 
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=6');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=6');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=6');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      
<Swiper
      navigation
      autoplay={{ delay: 3000 }}
      spaceBetween={50}
      slidesPerView={1}
    >
      {MainCarousel.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              background: `url(${slide.img}) center no-repeat`,
              backgroundSize: 'cover',
            }}
            className="h-[530px]"
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className='flex flex-col gap-6 pt-20 px-3 max-w-6xl mx-auto'>
        <h1 className=' font-bold text-3xl lg:text-6xl'>
          <span className='text-gradient'>Find your next </span><span className='text-[#000080]'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
        <span className='text-[#000080]'>  One Click Property </span>is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className=''
        >
         <button className='px-3 font-medium lg:font-bold button flex items-center justify-center gap-1 mt-2'>Let's get started
         
<span className='mt-[6px]'><lord-icon
    src="https://cdn.lordicon.com/whtfgdfm.json"
    trigger="hover"
      colors="primary:#ffffff"
    style={{width:'24px',height:'20px'}}>
      
</lord-icon></span>
         </button>
         

        </Link>
      </div>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold lg:font-bold text-gradient'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold lg:font-bold text-gradient'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold lg:font-bold text-gradient'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
