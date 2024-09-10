import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import Search from '../components/Search';
import { FaHome } from 'react-icons/fa';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export default function Home() {

  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  
 
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
     
<div className='relative flex flex-col items-center justify-center'>
  <img src="5.jpg" alt="" className='h-[580px] w-full opacity-95'/>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-6 pt-20 px-3 max-w-6xl'>
    <h1 className='font-bold text-3xl lg:text-5xl text-center text-white'>
    <span className='text-4xl font-bold '>
       The Best Way To</span>
      <br />
      <span className=''> Find Your Perfect Home</span>
    </h1>
   <div className='my-12'> <Search/></div>
  </div>
</div>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3 flex items-center justify-between'>
             <div> <h2 className='text-2xl lg:text-4xl font-semibold lg:font-bold text-gradient'>Featured Properties</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more featured Properties</Link></div>
              <h1 className='lg:px-28 flex items-center'>
                <FaHome size={30} color='green'/>
                <p className='px-2'><span className='text-green-700 font-bold'>1000+</span> Available Properties</p>
              </h1>
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
              <div className='my-3 flex items-center justify-between'>
             <div> <h2 className='text-2xl lg:text-4xl font-semibold lg:font-bold text-gradient'>Recent Places For Rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link></div>
              <h1 className='lg:px-28 flex items-center'>
                <AssuredWorkloadIcon size={30} className='text-green-700'/>
                <p className='px-2'>All Properties <span className='text-green-700 font-bold'>For Rent</span> </p>
              </h1>
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
             <div className='my-3 flex items-center justify-between'>
             <div> <h2 className='text-2xl lg:text-4xl font-semibold lg:font-bold text-gradient'>Recent Places For Sold</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for Sold</Link></div>
              <h1 className='lg:px-28 flex items-center'>
                <CurrencyExchangeIcon size={30} className='text-green-700'/>
                <p className='px-2'>All Properties <span className='text-green-700 font-bold'>For Sold</span> </p>
              </h1>
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
