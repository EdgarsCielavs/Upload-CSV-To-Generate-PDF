import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

function CertificatePage({data}) {

    const GenerateQRCode = (item) => {
        let qrCode = '';
        QRCode.toDataURL(item['QR Code'], {
            width: 200,
            margin: 2,
            color: {
                // dark: '#335383FF',
                // light: '#EEEEEEFF'
            }
        }, (err, url) => {
            if (err) return console.error(err)
            qrCode = url;
        });
        return qrCode;
    }

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}><div>
            {data.map((item) => {
                return(
                    <div key={item['Learner Name']} className={'certification-page'} style={{textAlign: 'center', width: '794px', display: 'block'}}>
                        <br /><br /><br />
                        <div style={{fontSize: '60px', fontWeight: '400', fontFamily: 'Brush Script MT', color: '#002060'}}>Certificate Of Achievement</div>
                        <div style={{fontSize: '26px', fontWeight: '400', lineHeight: '250%'}}>This is to certify that</div>
                        <div style={{fontSize: '40px', fontWeight: '400', textDecoration: 'underline', color: '#00B050'}}>{item['Learner Name']}</div>
                        <div style={{fontSize: '22px', fontWeight: '500', lineHeight: '250%'}}>Has successfully achieved the following Qualification</div>
                        <div style={{fontSize: '36px', fontFamily: 'Brush Script MT', color: '#00B050'}}>{item['Qualification Title']}</div>
                        <div style={{fontSize: '24px', fontWeight: '500', lineHeight: '250%'}}>On</div>
                        <div style={{fontSize: '18px', fontWeight: '500', textDecoration: 'underline', color: '#00B050'}}>{item['Date of issuance']}</div>
                        <div style={{fontSize: '18px', fontWeight: '700', lineHeight: '800%'}}>Certificate Number: <span style={{textDecoration: 'underline', color: '#00B050'}}>{item['Certificate number']}</span></div>
                        <div><img src={GenerateQRCode(item)} style={{border: '3px solid black'}} /></div>
                    </div>
                )
            })}
        </div></div>
    )
}

export default CertificatePage;