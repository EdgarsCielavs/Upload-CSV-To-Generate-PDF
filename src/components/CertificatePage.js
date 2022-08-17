import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

export default function CertificatePage({data}) {
    const [qr, setQr] = useState('')

    const GenerateQRCode = () => {
        QRCode.toDataURL(data['QR Code'], {
            width: 200,
            margin: 2,
            color: {
                // dark: '#335383FF',
                // light: '#EEEEEEFF'
            }
        }, (err, url) => {
            if (err) return console.error(err)
            setQr(url)
        })
    }

    useEffect(() => {
        GenerateQRCode();
    }, []);

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <div id={'certification-page'} style={{textAlign: 'center', width: '794px', display: 'none'}}>
                <br /><br /><br />
                <div style={{fontSize: '60px', fontWeight: '400', fontFamily: 'Brush Script MT', color: '#002060'}}>Certificate Of Achievement</div>
                <div style={{fontSize: '26px', fontWeight: '400', lineHeight: '250%'}}>This is to certify that</div>
                <div style={{fontSize: '40px', fontWeight: '400', textDecoration: 'underline', color: '#00B050'}}>{data['Learner Name']}</div>
                <div style={{fontSize: '22px', fontWeight: '500', lineHeight: '250%'}}>Has successfully achieved the following Qualification</div>
                <div style={{fontSize: '36px', fontFamily: 'Brush Script MT', color: '#00B050'}}>{data['Qualification Title']}</div>
                <div style={{fontSize: '24px', fontWeight: '500', lineHeight: '250%'}}>On</div>
                <div style={{fontSize: '18px', fontWeight: '500', textDecoration: 'underline', color: '#00B050'}}>{data['Date of issuance']}</div>
                <div style={{fontSize: '18px', fontWeight: '700', lineHeight: '800%'}}>Certificate Number: <span style={{textDecoration: 'underline', color: '#00B050'}}>{data['Certificate number']}</span></div>
                <div>
                    {qr && <>
                        <img src={qr} style={{border: '5px solid black'}} />
                    </>}
                </div>
            </div>
        </div>
    )
}