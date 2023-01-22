import {link} from './link.js';


//      Menambahkan Data

export function post () {
            
    let data = {
        pelanggan : 'pelanggan axios ada',
        alamat    : 'alamat axios ada',
        telp      : '0812345678'
    }

    link.post('/pelanggan', data).then(res => {
        // console.log(res);

        let tampil = `<h1>${res.data.pesan}</h1>`;

        document.querySelector('#out').innerHTML = tampil;
    });
}