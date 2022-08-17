import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CSVFileUploader from './components/CSVFileUploader';
import Papa from 'papaparse';
import './App.css';
import PDFButton from './components/PDFButton';
import CertificatePage from './components/CertificatePage';

const certData = {
  'Learner Name': 'Learner Name',
  'Qualification Title': 'International Diploma in Business Management',
  'Date of issuance': 'Date here',
  'Certificate number': 'Number here',
  'QR Code': 'centres-management.system.uk'
}

function App() {
  const fileTypes = ['CSV'];
  const [file, setFile] = useState('');
  const [data, setData] = useState('');
  const [certification, setCertification] = useState(certData);

  const handleChange = (value) => {
    setFile(value);
    console.log(value);
    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);
      setData(columns);
      setCertification(parsedData[0]);
    };
    reader.readAsText(value);
  };

  return (
    <div className='App'>
      <CSVFileUploader fileTypes={fileTypes} file={file} handleUpload={handleChange} />
      {file ? (
        <PDFButton id={'certification-page'} label={'Generate PDF'} disabled={false} />
      ) : (
        <PDFButton id={'certification-page'} label={'Generate PDF'} disabled={true} />
      )}
      <CertificatePage data={certification} />
    </div>
  );
}

export default App;
