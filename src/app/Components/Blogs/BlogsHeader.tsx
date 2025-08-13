"use client";

function BlogsHeader() {
    return(
        <section className="text-center py-20 px-4">
            {/* Heading */}
            <h1 className="text-5xl font-bold">
                My <span className="text-blue-500">Blog</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Sharing insights, tutorials and experiences from my journey as a 
                full-stack develpoer. Topics include React, Next.js, TypeScript, and
                modern web development practices.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    6 Articles
                </span>

                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    Web Development
                </span>

                <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    Published on Medium
                </span>
            </div>
        </section>
    )
}

export default BlogsHeader