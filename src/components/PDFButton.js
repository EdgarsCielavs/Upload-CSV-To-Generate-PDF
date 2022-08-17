import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
    Button
} from '@material-ui/core';

const pxToMm = (px) => {
  return Math.floor(px/document.getElementById('myMm').offsetHeight);
};

const generatePDF = (id) => {
    const inputElements = document.getElementsByClassName(id);
    const inputHeightMm = pxToMm(inputElements[0].offsetHeight);
    const a4WidthMm = 210;
    const a4HeightMm = 297;

    for(let i = 0; i < inputElements.length; i ++) {
        inputElements[i].style.display = 'block';
        html2canvas(inputElements[i])
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                
                let pdf;
                if (inputHeightMm > a4HeightMm) {
                    pdf = new jsPDF('p', 'mm', [inputHeightMm + 16, a4WidthMm]);
                } else {
                    pdf = new jsPDF();
                }
                
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save(`${id}.pdf`);
            });
        setTimeout(() => {inputElements[i].style.display = 'none'}, 2000 * inputElements.length);
    }    
}


const PDFButton = ({id, label, disabled}) => {
    return (
        <div className="tc mb4 mt2">
            <div id="myMm" style={{height: "1mm"}} />
            {disabled ? (
                <Button variant='contained' color='primary' disabled onClick={(e) => generatePDF(id)}>
                    {label}
                </Button>
            ) : (
                <Button variant='contained' color='primary' onClick={(e) => generatePDF(id)}>
                    {label}
                </Button>
            )}
        </div>
    )
};

export default PDFButton;