import Link from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'

export default function Publications({item}) {
    const { t, lang } = useTranslation('common')
        const router= useRouter()
          let imageSrc = null;
          if (item.attributes.image.data == null) {
              imageSrc = '/images/pentwo.jpg';
            }
            else {
              imageSrc = item.attributes.image.data[0].attributes.formats.small.url
            }
return (
  
          <article className="col-12 col-sm-6 col-lg-4 me-2" >
            <div className="col-12 mb-4">
              <div className="card card-full hover-a">
                <div className="ratio_327-278 image-wrapper">
                
                <Image
                  src={imageSrc}
                  width={365}
                  height={311}
                />
                  <div className="position-absolute p-3 b-0 w-100 bg-shadow">
                   
                    <h4 className="h3 h4-sm h3-md card-title">
                      <Link  href={`/posts/${item.attributes.slug}`}>
                      <a className="text-white">{item.attributes.title}</a>
                      </Link>
                    </h4>
                   
                    <div className="small text-light">
                    <time className="news-date" >{new Date(item.attributes.createdAt).toLocaleDateString(router.locale)} </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
         
        
       
          
        
          
       
   
    
)
}
