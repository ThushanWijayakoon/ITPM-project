import { useRef } from 'react' ;
import html2canvas from 'html2canvas' ;
import { jsPDF } from 'jspdf' ;
import './ViewDetails.css' ;
import background from "./Supply.jpg";
import ListItem from '../components/ListItem';

const ViewDetails = () => {
  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", -150, 20);
      pdf.save("Item Details.pdf");
    });
  };

  return (
    <>
      <div className="ViewDetails" style={{ backgroundImage: `url(${background})` }}>
        <div id="divToPrint" ref={inputRef}>
          <br/><br/>
          <div> <ListItem/> </div>
        </div>
        <br/>
        <div className="mb5">
          <button className='btn2' onClick={printDocument}><h6><b>Download File</b></h6></button>
        </div>
        <br/><br/>
      </div>
    </>
  );
};

export default ViewDetails ;