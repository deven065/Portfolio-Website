import BlogsHeader from '../Components/Blogs/BlogsHeader'
import FeaturedArticles from '../Components/Blogs/FeaturedArticles'
import RecentArticles from '../Components/Blogs/RecentArticles'

export default function BlogsPage() {
    return(
        <>
            <BlogsHeader />
            <FeaturedArticles />
            <RecentArticles />
        </>
    )
}