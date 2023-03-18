import "./App.css";
import HisseBar from "./components/HisseBar";
import HisseBilgi from "./components/HisseBilgi";
//import BookComponent from "./components/BookComponent";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className=" ">
      <Sidebar> </Sidebar>{" "}
      <span className="space-y-8">
        <HisseBar> </HisseBar>
        <HisseBilgi> </HisseBilgi>
      </span>
    </div>
  );
}

export default App;

// Sonra lazım olcak kodlar

/* <BookComponent
        hisseisim={hisselerliste[0].hisseisim}
        fiyat={hisselerliste[0].fiyat}
        tarih={hisselerliste[0].tarih}
      ></BookComponent>
      <BookComponent
        hisseisim={hisselerliste[1].hisseisim}
        fiyat={hisselerliste[1].fiyat}
        tarih={hisselerliste[1].tarih}
      ></BookComponent>
      <BookComponent
        hisseisim={hisselerliste[2].hisseisim}
        fiyat={hisselerliste[2].fiyat}
        tarih={hisselerliste[2].tarih}
      ></BookComponent>
      <BookComponent
        hisseisim={hisselerliste[3].hisseisim}
        fiyat={hisselerliste[3].fiyat}
        tarih={hisselerliste[3].tarih}
      ></BookComponent> */

/*const hisselerliste = [
    { id: "0", hisseisim: "taoso", fiyat: 190, tarih: new Date(8, 8, 2002) },
    { id: "1", hisseisim: "aksen", fiyat: 30, tarih: new Date(8, 8, 2002) },
    { id: "2", hisseisim: "kochl", fiyat: 200, tarih: new Date(8, 8, 2002) },
    { id: "3", hisseisim: "garan", fiyat: 100, tarih: new Date(8, 8, 2002) }, 
  ]; */

/*function sitedate() {
  const day = props.tarih.toLocaleString("tr-TR", { day: "numeric" });
  const month = props.tarih.toLocaleString("tr-TR", { month: " long " });
  const year = props.tarih.toLocaleString("tr-TR", { year: "numeric" });

  return (
    <div className="text-cyan-400 grid-cols-4 ">
      <div>{day} </div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
} */
