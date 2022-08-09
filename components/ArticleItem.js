import { API_URL, PER_PAGE } from '@/config/index';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';
const ArticleItem=({item})=>{
  const {locale} = useRouter()
    let imageSrc = null;
    try {
      imageSrc = item.attributes.image.data[0].attributes.formats.medium.url
       
      }
      catch {
        imageSrc = '/images/pentwo.jpg';
      }
    return (
        <article className="card card-full hover-a py-4 post-1305 post type-post status-publish format-video has-post-thumbnail hentry category-video tag-science tag-starvation post_format-post-format-video" >
        <div className="row">
          <div className="col-sm-6 col-md-12 col-lg-6">
            <div className="ratio_360-202 image-wrapper">
            <Link href={`/posts/${item.attributes.slug}`}>
              <a>
                <Image
                  src={imageSrc}
                  width={500}
                  height={281}
                />
                {/* for video
                  <div className="post-type-icon">
                  <span className="fa-stack-sea text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                  </span>
                </div> */}
                
              </a>
              </Link>
            </div>
          </div>
          <div className="col-sm-6 col-md-12 col-lg-6">
            <div className="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
              <h3 className="card-title h2 h3-sm h2-md">
              <Link href={`/posts/${item.attributes.slug}`}>
                <a>{item.attributes.title}</a>
                </Link>
              </h3>
              <div className="card-text mb-2 text-muted small">
                <span className="fw-bold d-none d-sm-inline me-1">
                  <a href="#" title="Posts by aribudin" rel="author">Admin</a>
                </span>
                <time className="news-date" >{new Date(item.attributes.createdAt).toLocaleDateString(locale)} </time>
              </div>
              <p className="card-text">{item.attributes.description.slice(0, 250) + '...'}</p>
            </div>
          </div>
        </div>
      </article>
    )
}
export default ArticleItem