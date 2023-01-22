import {link} from './link.js';


//      Update Data
        
export function ubah() {
    let id = 5;

    let data = {
        pelanggan : 'update pelanggan axios lagi',
        alamat    : 'update alamat axios lagi',
        telp      : '0882999'
    }  

    link.put('/pelanggan/' + id, data).then(res => {
        // console.log(res);

        let tampil = `<h1>${res.data.pesan}</h1>`;

        document.querySelector('#out').innerHTML = tampil;
    })
}