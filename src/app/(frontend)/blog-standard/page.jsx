import React from "react";
import BannerBlogWidget from "@/components/blog/BannerBlogWidget";
import CategoryBlogWidget from "@/components/blog/CategoryBlogWidget";
import RecentPostBlogWidget from "@/components/blog/RecentPostBlogWidget";
import SearchBlogWidget from "@/components/blog/SearchBlogWidget";
import TagBlogWidget from "@/components/blog/TagBlogWidget";
import Breadcrumb from "@/components/common/Breadcrumb";
import PaginatedItems from "@/components/pagination/BlogStandardPaginate";
function BlogGrid1Page() {
  return (
    <>
      <>
<Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard" />
        <div className="blog-standard-pages pt-120 mb-120">
          <div className="container">
            <div className="row g-lg-5 gy-5">
              <div className="col-lg-8">
                <PaginatedItems itemsPerPage={3} />
              </div>
              <div className="col-lg-4">
                <div className="widget-area">
                  <BannerBlogWidget />
                  <SearchBlogWidget />
                  <RecentPostBlogWidget />
                  <CategoryBlogWidget />
                  <TagBlogWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
</>
    </>
  );
}

export default BlogGrid1Page;
