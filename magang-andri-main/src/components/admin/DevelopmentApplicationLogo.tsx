import {FC, useMemo} from 'react';
import image1 from '../../assets/LogoMitraDevApp/partner-hover1.png';
import image2 from '../../assets/LogoMitraDevApp/partner-hover2.png';
import image3 from '../../assets/LogoMitraDevApp/partner-hover3.png';
import image4 from '../../assets/LogoMitraDevApp/partner-hover4.png';
import image5 from '../../assets/LogoMitraDevApp/partner-10.png';
import image6 from '../../assets/LogoMitraDevApp/partner-hover11.png';
import image7 from '../../assets/LogoMitraDevApp/partner-hover12.png';
import image8 from '../../assets/LogoMitraDevApp/partner-5.png';
import image9 from '../../assets/LogoMitraDevApp/partner-6.png';
import image10 from '../../assets/LogoMitraDevApp/partner-7.png';
import image11 from '../../assets/LogoMitraDevApp/partner-8.png';
import image12 from '../../assets/LogoMitraDevApp/partner-9.png';
import image13 from '../../assets/LogoMitraDevApp/partner-14.png';
import image14 from '../../assets/LogoMitraDevApp/partner-15.png';
import image15 from '../../assets/LogoMitraDevApp/partner-25.png';
import image16 from '../../assets/LogoMitraDevApp/03.png';
import image17 from '../../assets/LogoMitraDevApp/04.png';
import Table from './Table';
import {Column} from 'react-table';
import { useSearch } from '../../context/SearchContext';


type DokumentasiData = {
  id : number;
  image: string;
};

const dokumentasiData: DokumentasiData[] = [
  {
    id : 1,
    image: image1 ,
  },
  {
    id : 2,
    image: image2 ,
  },
  {
    id : 3,
    image: image3 ,
  },
  {
    id : 4,
    image: image4,
  },
  {
    id : 5,
    image: image5,
  },
  {
    id : 6,
    image: image6,
  },
  {
    id : 7,
    image: image7,
  },
  {
    id : 8,
    image: image8,
  },
  {
    id : 9,
    image: image9,
  },
  {
    id : 10,
    image: image10,
  },
  {
    id : 11,
    image: image11,
  },
  {
    id : 12,
    image: image12,
  },
  {
    id : 13,
    image: image13,
  },
  {
    id : 14,
    image: image14,
  },
  {
    id : 15,
    image: image15,
  },
  {
    id : 16,
    image: image16,
  },
  {
    id : 17,
    image: image17,
  },
];

const dokumetasiColumns: Column<DokumentasiData>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Image",
    accessor: "image",
    Cell: ({ value }) => (
      <img
        src={value}
        alt="Testimonial"
        className="w-20 h-16 object-cover rounded-full"
      />
    ),
  },
  {
    Header: "Actions",
    Cell: () => (
      <div className='flex gap-2'>
        <button className="text-blue-500 hover:underline">Edit</button>
      </div>
    ),
  },
];

const DokumentasiTable: FC = () => {
  const { searchQuery } = useSearch();

  const filteredData = useMemo(() => {
    return dokumentasiData.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <>
        <Table columns={dokumetasiColumns} data={filteredData} isDokumentasi={true} />
    </>
  );
};

export default DokumentasiTable;