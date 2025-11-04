import BlogsHeader from '../Components/Blogs/BlogsHeader'
import FeaturedArticles from '../Components/Blogs/FeaturedArticles'
import RecentArticles from '../Components/Blogs/RecentArticles'

export default function BlogsPage() {
    return(
        <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
            <BlogsHeader />
            <FeaturedArticles />
            <RecentArticles />
        </div>
    )
}