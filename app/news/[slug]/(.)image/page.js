import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedImagePage({params}) {
    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);
    if(!newsItem) {
        notFound();
    }

    return (
       <>
             <h2>Inercepted!</h2>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
            </div>
       </>
    );
}