
import Link from "next/link";
import { getAvailableNewsYears } from "@/lib/news";



export default function FilterNewsPage({ params }) {
   const filter = params.filter;
   console.log(filter);

   const links = getAvailableNewsYears();
   // console.log(links);

   return (
      <header id="archive-header">
         <nav>
            <ul>
               {links.map((link) => (
                  <li key={link}>
                     <Link href={`/archive/${link}`}>{link}</Link>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );

   // const news = getNewsForYear(newsYear);
   // return <NewsList news={news} />
}