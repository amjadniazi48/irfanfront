import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/router";
import { gql, useQuery } from '@apollo/client';
const PostPage = () => {
  function createMarkup(c){
    return {__html: c}
  }
  const router = useRouter();
  const locale = router.locale;
  const { slug } = router.query;
  let imageSrc = null;
  const QUERY = gql`query  getPosts($slug: String!,$locale : I18NLocaleCode!){
    posts(filters: { slug: { eq: $slug } },locale:$locale) {
      data {
        id
        attributes {
          title
          slug
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
    `;
  const { data, loading, error } = useQuery(QUERY, { variables: { slug, locale } });
  if (error || !data){
    return (<p>No Data</p>);
  }
  try {
    imageSrc = data.posts.data[0].attributes.image.data[0].attributes.formats.medium.url
  }
  catch {
    imageSrc = '/images/pentwo.jpg';
   }

  try {
    return (

      <div className="card p-1" dir={locale === 'ur-PK' ? 'rtl' : 'ltr'}>
        <Image
          src={imageSrc}
          width={800}
          height={600}
        />
        <div className="card-body">
          <h3>{data.posts.data[0].attributes != undefined ? data.posts.data[0].attributes.title : ''}</h3>
          {data.posts.data[0].attributes &&  <div dangerouslySetInnerHTML={createMarkup(data.posts.data[0].attributes.description)}></div>}
        </div>
      </div>
    );
  }
  catch {
    return <p style={{marginTop:"10px"}}>Oops! No Data please return to <Link href="/"><a>Home Page</a></Link></p>;
  }
};

export default PostPage;
