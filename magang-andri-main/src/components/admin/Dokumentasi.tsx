import {FC, useMemo} from 'react';
import image1 from '../../assets/Dokumentasi/D1.jpg';
import image2 from '../../assets/Dokumentasi/D2.jpg';
import image3 from '../../assets/Dokumentasi/D3.jpg';
import image4 from '../../assets/Dokumentasi/D4.jpg';
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