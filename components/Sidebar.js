import { useRouter } from 'next/router'
import useSWR from 'swr'
import ProfileSidebar from '@/components/ProfileSidebar';
const loadData = async (locale) => {
  const response = await fetch(`${API_URL}/api/categories?` + new URLSearchParams({
    locale: locale,
   
  }))
  const data = await response.json();
  return data['data'];
};
  export default function Sidebar({profileData}) {
  const { locale, locales } = useRouter();
  let className='';
  const { data } = useSWR([locale, "categoires"], loadData);
  if(locale=="en"){className='list-unstyled sidebar-link dark before-caret-dark custom-category'} else {className='list-unstyled sidebar-link dark  custom-category'}
  return (
    <aside className="col-md-4 widget-area end-sidebar-lg" id="right-sidebar"  dir={locale === 'ur-PK' ? 'rtl' : 'ltr'}>
     <ProfileSidebar profileData={profileData}/>
      <aside id="categories_custom-1" className="widget widget_categories widget_categories_custom" >
        <div className="block-title-4">
          <h4 className="h5 title-arrow"><span>{locale=='ur-PK'?'زمرہ جات ':'Categories'}</span></h4>
        </div>
        <ul className={className} style={locale=='en'?{ 'listStyle':'none'}:{'listStyle':'circle '}}>
          {data && data.map((item) => {
            return (
          <li className={`cat-item cat-item-${item.id}`} key={item.id}>
              <a href="#"><span className="cat-name">{item.attributes.name}</span> 
              &nbsp;<span className="badge bg-primary rounded-pill">5</span></a>
            </li>
            )
         })}
          </ul>
      </aside>
    </aside>
  )
}