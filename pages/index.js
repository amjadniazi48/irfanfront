
import useTranslation from 'next-translate/useTranslation'
import { gql, useQuery } from '@apollo/client';
import { API_URL, PER_PAGE } from '@/config/index';
import Carousel from 'react-bootstrap/Carousel';
import Sidebar from '@/components/Sidebar';
import ArticleItem from '@/components/ArticleItem';
import Pagination from '@/components/Pagination';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import Publications from '@/components/Pulbications';
export default function Home({ postsData,page,paginationData}) {

  const { t, lang } = useTranslation('common')
  const { locale, locales } = useRouter();
  
  const QUERY = gql `query  getProfile($locale : I18NLocaleCode!){
    profile(locale:$locale) {
       data {
         id
         attributes {
           name  
           description
           image {
             data{
                attributes{
                 formats
               }
             }
           }
        
         }
       }
     }
   }  
   `
  const { data, loading, error } = useQuery(QUERY, { variables: {  locale } });
   //console.log(error)
   
  
   //console.log(  JSON.stringify(data))

 
  
   //return <div>{JSON.stringify(profileData)}</div>;
 
  // render data
 
  //console.log(profileData)
  let imageSrc ;
  return (
    <main id="content" dir={locale === 'ur-PK' ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="row">
          <div className="top-section col-12 mt-05">
            <div className="gap-15"></div>
            <div className="mb-5">
              <div className="position-relative overflow-hidden">
                <Carousel>
                  {postsData && postsData.map((item) => {
                  try{
                    imageSrc = item.attributes.image.data[0].attributes.formats.thumbnail.url
                      
                    }
                    catch {
                     imageSrc = '/images/pentwo.jpg';
                    }
                    if (item.attributes.type == "Slider" && item.attributes.type != "Normal" && item.attributes.type != "Publication")
                      return (
                        <Carousel.Item>
                          <Image
                            src={imageSrc}
                            alt="First slide"
                            width={1150}
                            height={500}
                          />
                          <Carousel.Caption >
                            <h1 className='' style={{ fontWeight: 900, color: 'white' }}>
                            <Link href={`/posts/${item.attributes.slug}`}><a style={{ fontWeight: 900, color: 'white' }}>{item.attributes.title}</a></Link>
                              </h1>
                            <p style={{ fontWeight: 900, color: 'white' }}>{item.attributes.description.slice(0, 50) + '...'}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      )
                  })}
                </Carousel>
              </div>
              <div className="col-12 mb-4"> 
                <div className="block-area p-4 border bg-light-black">
                    <h4 className="h5" >
                      <span>{t('common:publications')}</span>
                    </h4>
                   <hr></hr>
                  <div className="row"  dir={locale === 'ur-PK' ? 'rtl' : 'ltr'}>

                    {postsData && postsData.map((item) => {
                      if (item.attributes.type == "Publication" && item.attributes.type != "Normal" && item.attributes.type != "Slider")
                        return <Publications key={item.id} item={item} ></Publications>
                    })}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="block-area">
                      <div className="block-title-4 ">
                        <h3 className="h3"><span>{t('common:currentPosts')}</span></h3>
                        </div>
                      <div className="border-bottom-last-0 first-pt-0">
                        {postsData && postsData.map((item) => {
                          if (item.attributes.type == "Normal" && item.attributes.type != "Slider" && item.attributes.type != "Publication")
                            return <ArticleItem key={item.id} item={item} ></ArticleItem>
                        })}
                      </div>
                    </div>
                    <Pagination page={page} paginationData ={paginationData} ></Pagination>
                  </div>
                  {data &&
                   <Sidebar profileData={data} />
                   }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export async function getServerSideProps({ locale,query:{page=1}}) {
  const start =  +page==1 ? 0 : (+page-1)*PER_PAGE
  //total 
  //const totalRes = await fetch(`${API_URL}/events/count`)
 
  const res = await fetch(`${API_URL}/api/posts?populate=image&sort[0]=publishedAt:desc&pagination[limit]=${PER_PAGE}&pagination[start]=${start}&locale=${locale}`)
  const data = await res.json()

  const postsData = data['data']
  const paginationData= data['meta'];
  //console.log('Hello this is the post page'+JSON.stringify(postsData))
  
  if (!postsData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { postsData,page:+page,paginationData}, // will be passed to the page component as props
  }
}