import FooterComp from '@/components/FooterComp'
import BodyComp from '@/components/BodyComp'
import HeaderComp from '@/components/HeaderComp'
import postSearchParams from '@/types/postSearchParams';

const Home = async(Params : any) => {
  const postSearchParameters = {} as postSearchParams;
  postSearchParameters.page = parseInt(Params.searchParams.page) || 1; 
  postSearchParameters.query = Params.searchParams.query || "";
  
  return (
    <div className="min-w-screen min-h-screen h-fit">
      <HeaderComp/>
      <BodyComp {...postSearchParameters}/>
      <FooterComp/>
    </div>
  )
}

export default Home