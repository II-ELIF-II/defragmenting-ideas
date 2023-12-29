import FooterComp from '@/components/FooterComp';
import BodyComp from '@/components/BodyComp';
import HeaderComp from '@/components/HeaderComp';
import postSearchParams from '@/types/postSearchParams';

const Home = async(Params : any) => {
  const {params, searchParams} = Params;

  // const postID = searchParams.id || "";

  const postSearchParameters = {
    page: parseInt(searchParams.page) || 1,
    query: searchParams.query || "",
  } as postSearchParams;

  return (
    <div className="min-w-screen min-h-screen h-fit">
      <HeaderComp/>
      <BodyComp {...postSearchParameters}/>
      <FooterComp/>
    </div>
  );
};

export default Home;