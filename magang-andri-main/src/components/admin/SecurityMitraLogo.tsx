import {FC, useMemo} from 'react';
import image1 from '../../assets/LogoMitraSecurity/partner-16.png';
import image2 from '../../assets/LogoMitraSecurity/partner-17.png';
import image3 from '../../assets/LogoMitraSecurity/partner-24.png';
import image4 from '../../assets/LogoMitraSecurity/partner-18.png';
import image5 from '../../assets/LogoMitraSecurity/partner-19.png';
import image6 from '../../assets/LogoMitraSecurity/partner-20.png';
import image7 from '../../assets/LogoMitraSecurity/partner-21.png';
import image8 from '../../assets/LogoMitraSecurity/partner-23.png';
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