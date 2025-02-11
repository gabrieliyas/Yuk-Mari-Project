import Table from "./Table";
import image1 from "../../assets/ProjectBimbleClient/B1.jpg"
import image2 from "../../assets/ProjectBimbleClient/B2.jpg"
import image3 from "../../assets/ProjectBimbleClient/B3.jpg"
import image4 from "../../assets/ProjectBimbleClient/B7.jpg"
import image5 from "../../assets/ProjectBimbleClient/B9.jpg"
import image6 from "../../assets/ProjectBimbleClient/B10.jpg"
import image7 from "../../assets/ProjectBimbleClient/B11.jpg"
import image8 from "../../assets/ProjectBimbleClient/B12.jpg"
import {Column} from 'react-table';


type TestimonialData = {
  id: number;
  image: string;
  name: string;
  company: string;
  testimonial: string;
};

const testimonialData: TestimonialData[] = [
  {
    id: 1,
    image: image1, 
    name: "Kiki Wahyudi", 
    company: "Founder Ciungwanara Adventure - Jasa Event Outbond",
    testimonial: "Kerja keras dan tuntas, terimakasih Yuk-Mari Project atas pembuatan websitenya, sudah memudahkan kami untuk mempromosikan event organizer kami." 
  },
  {
    id: 2, 
    image: image2, 
    name: "Abdul Jawad", 
    company: "Founder UMKM WuFi Food - Suplier Bubuk Cabe",
    testimonial: " Terimakasih Yuk-Mari Project, mudah - mudahan selalu terus berkembang dan sukses. Jangan Menyerah." 
  },
  {
    id: 3, 
    image: image3 , 
    name: "Teh Alya", 
    company: "Founder UMKM BnC Cookies - Cookies and Pastry",
    testimonial: "Dengan adanya website BnC Cookies ini kami jadi terbantu dalam proses Marketing Product nya, terimakasih Yuk-Mari Project." 
  },
  {
    id: 4, 
    image: image4 , 
    name: "Ibu Maida Wahyuningsih", 
    company: "Direktur - Makmur Jaya Tekstil, Ruko Taman Holis Cimahi",
    testimonial: "Saya cukup senang dengn adanya aplikasi untuk pengelolaan jenis kain, karena merasa dimudahkan, terimakasih. " 
  },
  {
    id: 5, 
    image: image5 , 
    name: "Pa Helmi Hariyadi", 
    company: "Operator  - Balai Besar Logam dan Mesin, Bandung",
    testimonial: "Bapa tidak mengerti apa itu CMS (Content Management System), yang penting aplikasi bisa dipakai dan aplikatif. Nuhun ya. " 
  },
  {
    id: 6, 
    image: image6 , 
    name: "Pahmi", 
    company: "Founder  - CV. Shover",
    testimonial: "Pengerjaan lumayan cepat dan terhitung jari. Mudah - mudahan sukses terus Yuk-Mari Project. " 
  },
  {
    id: 7, 
    image: image7 , 
    name: "Edy Ashari", 
    company: "Founder  - CV. Cipta Anugerah Arsitektur",
    testimonial: "Bagus, tingkatkan lagi kualitas, khususnya dari segi pembayarannya. " 
  },
  {
    id: 8, 
    image: image8 , 
    name: "Pa Tantan", 
    company: "Agency Indihome Telkomsel",
    testimonial: "Aammmiinn a nuhunnya tos di bantosan 🙏🙏🙏 " 
  },
];

const testimonialColumns: Column<TestimonialData>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
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
    Header: "Company",
    accessor: "company"
  },
  {
    Header: "Testimonial",
    accessor: "testimonial",
  },
  {
    Header: "Actions",
    Cell: () => (
      <div className="flex gap-2">
        <button className="text-blue-500 hover:underline">Edit</button>
        <button className="text-red-500 hover:underline">Delete</button>
      </div>
    ),
  },
];

const TestimonialTable = () => {
  return (
    <>
      <Table columns={testimonialColumns} data={testimonialData} isTestimonial={true} />
    </>
  )
};

export default TestimonialTable;
