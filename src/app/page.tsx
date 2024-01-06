import FooterComp from '@/components/FooterComp';
import BodyComp from '@/components/BodyComp';
import postSearchParams from '@/types/postSearchParams';
import HeaderComp from '@/components/HeaderComp';

const Home = async(Params : any) => {
  const {params, searchParams} = Params;

  const postSearchParameters = {
    page: parseInt(searchParams.page) || 1,
    query: searchParams.query || "",
    tag: searchParams.tag || 0,
  } as postSearchParams;

  return (
    <div className="min-w-screen min-h-screen h-fit">
      <HeaderComp/>
      <BodyComp searchParams={postSearchParameters}/>
      <FooterComp/>
    </div>
  );
};

export default Home;