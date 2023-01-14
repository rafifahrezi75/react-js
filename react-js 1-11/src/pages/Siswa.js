import Listsiswa from "./Listsiswa";

function Siswa() {

    const judul = ['joni', 'budi', 'siti']

    return (
    <div className="App">
        
        <Listsiswa judul={judul} />

    </div>
    );
}

export default Siswa;