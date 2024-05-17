export default function Layout({children}) {
    return (
       <div>
           <div> Header </div>
           <div> { children } </div>
       </div>
    );
}
