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

  // console.log(data.posts.data.attributes.categories.data.attributes.name)
  //console.log(error)
  try {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="block-area">
            <div className="col-12 mt-5 " style={{ marginLeft: '10px' }}>
              <div className="block-title-4 text-center ">
                <h1><span>{data.posts && data.posts.data[0].attributes.categories.data[0].attributes.name}</span></h1>
              </div>
            </div>
            {data.posts && data.posts.data.map((item) => {
              return (
                <>
                <CategoryItem key={item.id} item={item} ></CategoryItem>
                <hr></hr>
                </>
                )
            })}
          </div>
        </div>
      </div>
    )
  }
  catch {
    return <p style={{ marginTop: "10px", marginRight: '10%' }}>Oops! No Data please return to <Link href="/"><a>Home Page</a></Link></p>;
  }

}


export default CategoryPage;