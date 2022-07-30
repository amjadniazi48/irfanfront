
import useTranslation from 'next-translate/useTranslation'
import { API_URL, PER_PAGE } from '@/config/index';
import Carousel from 'react-bootstrap/Carousel';
import Sidebar from '@/components/Sidebar';
import ArticleItem from '@/components/ArticleItem';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr'
import Publications from '@/components/Pulbications';

const loadData = async (locale) => {
  const response = await fetch(`${API_URL}/api/posts?sort=createdAt:desc&` + new URLSearchParams({
    locale: locale,
    populate: 'image',
  }))
  const data = await response.json();
  return data['data'];
};

export default function Home({ profileData }) {
  const { t, lang } = useTranslation('common')
  const { locale, locales } = useRouter();
  const { data } = useSWR([locale, "articles"], loadData);
  let imageSrc = null;
  return (
    <main id="content" dir={locale === 'ur-PK' ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="row">
          <div className="top-section col-12 mt-05">
            <div className="gap-15"></div>
            <div className="mb-5">
              <div className="position-relative overflow-hidden">
                <Carousel >
                  {data && data.map((item) => {
                  try{
                    imageSrc = item.attributes.image.data[0].attributes.formats.medium.url
                      
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

              <div className="col-12 mb-4" > 

                <div className="block-area p-4 border bg-light-black" >

                 
                    <h4 className="h5 " >
                      <span>{t('common:publications')}</span>
                    </h4>
                   <hr></hr>
                  <div className="row"  dir={locale === 'ur-PK' ? 'rtl' : 'ltr'}>

                    {data && data.map((item) => {
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
                        {data && data.map((item) => {
                          if (item.attributes.type == "Normal" && item.attributes.type != "Slider" && item.attributes.type != "Publication")
                            return <ArticleItem key={item.id} item={item} ></ArticleItem>
                        })}
                      </div>
                    </div>
                    <div className="clearfix my-4">
                      <nav className="float-start" aria-label="Posts navigation">
                        <ul className="pagination">
                          <li className="page-item active">
                            <span aria-current="page" className="page-link current">1</span></li>
                          <li className="page-item ">
                            <a className="page-link" href="https://demo.bootstrap.news/travel/page/2/">2</a></li>
                          <li className="page-item ">
                            <a className="page-link" href="https://demo.bootstrap.news/travel/page/3/">3</a></li>
                          <li className="page-item ">
                            <a className="next page-link" href="https://demo.bootstrap.news/travel/page/2/">&raquo;</a></li>
                        </ul>
                      </nav>
                      <span className="py-2 float-end"></span>
                    </div>
                  </div>
                  <Sidebar profileData={profileData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export async function getServerSideProps({ locale }) {
  const res = await fetch(`${API_URL}/api/profile?populate=image&locale=${locale}`)
  const data = await res.json()
  const profileData = data['data']

  if (!profileData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { profileData }, // will be passed to the page component as props
  }
}