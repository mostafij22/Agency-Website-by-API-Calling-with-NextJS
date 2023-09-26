
import './globals.css'
import NextTopLoader from 'nextjs-toploader';
import SiteFooter from '@/components/SiteFooter';
import SiteNavBar from '@/components/SiteNavBar';



export async function generateMetaData(){
  //SEO Data Fetch
  return {
    title:"Home",
    keyword: "",
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color='#269669' height={3} speed={200}/>
        <SiteNavBar/>
        {children}
        <SiteFooter/>
      </body>
    </html>
  )
}

