import { API_URL } from "@/config/index";
import Link from 'next/link';

import { useRouter } from "next/router";
import { gql, useQuery } from '@apollo/client';
import CategoryItem from "@/components/CategoryItem";
const CategoryPage = () => {
  const router = useRouter();
  const locale = router.locale;
  const { catSlug } = router.query;
  let imageSrc = null;
  const QUERY = gql`query  getPosts($catSlug: String,$locale : I18NLocaleCode!){
        posts(filters: {categories: {catSlug: {eq: $catSlug}}},locale:$locale) {
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
               categories{
                  data{
                    attributes{
                      name
                      catSlug
                    }
               }
             }
             }
           }
         }
       }  
     
      `;
  const { data, loading, error } = useQuery(QUERY, { variables: { catSlug, locale } });
  console.log(data[0].title)
  console.log(error)
  try {
    return (
      <div className="col-12 mt-5 " style={{marginLeft:'10px'}}>
          <div className="block-title-4 text-center ">
                        <h1><span>{data.title}</span></h1>
                        </div>
        
        {data.posts && data.posts.data.map((item) => {
          return (
            <div className="row" key={item.id}>
              <div className="entry-content post-content post-page">
                <CategoryItem key={item.id} item={item} ></CategoryItem>

              </div>
              <hr></hr>
            </div>
           
          )
        })}
      </div>
    )
  }
  catch {
    return <p style={{ marginTop: "10px" }}>Oops! No Data please return to <Link href="/"><a>Home Page</a></Link></p>;
  }

}


export default CategoryPage;