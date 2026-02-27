// import { headers as getHeaders } from 'next/headers.js'
// import Image from 'next/image'
// import { getPayload } from 'payload'
// import React from 'react'
// import { fileURLToPath } from 'url'

// import config from '@/payload.config'
// import './styles.css'

// export default async function HomePage() {
//   const headers = await getHeaders()
//   const payloadConfig = await config
//   const payload = await getPayload({ config: payloadConfig })
//   const { user } = await payload.auth({ headers })

//   const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

//   return (
//     <div className="home">
//       <div className="content">
//         <picture>
//           <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
//           <Image
//             alt="Payload Logo"
//             height={65}
//             src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
//             width={65}
//           />
//         </picture>
//         {!user && <h1>Welcome to your new project.</h1>}
//         {user && <h1>Welcome back, {user.email}</h1>}
//         <div className="links">
//           <a
//             className="admin"
//             href={payloadConfig.routes.admin}
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Go to admin panel
//           </a>
//           <a
//             className="docs"
//             href="https://payloadcms.com/docs"
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Documentation
//           </a>
//         </div>
//       </div>
//       <div className="footer">
//         <p>Update this page by editing</p>
//         <a className="codeLink" href={fileURL}>
//           <code>app/(frontend)/page.tsx</code>
//         </a>
//       </div>
//     </div>
//   )
// }
import About1 from "@/components/about/About1";
import Banner1 from "@/components/banner/Banner1";
import BestOffer1 from "@/components/bestOffer/BestOffer1";
import RecentPost1 from "@/components/blog/RecentPost1";
import Experties1 from "@/components/cookingExperties/Experties1";
import Footer from "@/components/footer/Footer";
import Gallery1 from "@/components/gallary/Gallery1";
import Header from "@/components/header/Header";
import Topbar from "@/components/header/Topbar";
import MenuList1 from "@/components/MenuList/MenuList1";
import PopularItem1 from "@/components/popularItem/PopularItem1";
import NewItem1 from "@/components/tems/NewItem1";
import TesimonialVideo from "@/components/testimonial/TesimonialVideo";
import Testimonial1 from "@/components/testimonial/Testimonial1";

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <Banner1 />
      <About1 />
      <NewItem1 />
      <PopularItem1 />
      <MenuList1 />
      <BestOffer1 />
      <Testimonial1 />
      <TesimonialVideo />
      <Experties1 />
      <Gallery1 />
      <RecentPost1 />
      <Footer />
    </>
  );
}