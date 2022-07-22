import Layout from '@/components/Layout';
import 'bootstrap/dist/css/bootstrap.css'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { useRouter } from "next/router";
import '../styles/bootnews.css';
import { API_URL, PER_PAGE } from '@/config/index';
import { request, GraphQLClient, gql } from 'graphql-request';
import useSWR from 'swr';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from '@/context/AuthContext';
import apolloClient from 'lib/apollo';
function MyApp({ Component, pageProps }) {
  const { locale, locales } = useRouter();
  const variables = { locale: `${locale}` }
  const fetcher = (query, variables) => {
    //console.log(query, variables);
    return request(`${API_URL}/graphql`, query, variables);
  };
  const { data:menus, error } = useSWR([
    `query ($locale : I18NLocaleCode!) {
     global(locale: $locale){
      data {
        id
        attributes {
          locale
          navigation {
                ... on ComponentGlobalNavigation {
                 panels {
                      link {
                        href
                        label
                          }
                      sublinks{
                        href
                        label
                      }  
                    }
                  }
                }
              }
            }
          }
        }`, variables
    ], fetcher);
 // console.log(menus)
  return (
    <AuthProvider>
    <ApolloProvider client={apolloClient}>
    <Layout menus={menus}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
    </AuthProvider>
  )
}

export default MyApp

