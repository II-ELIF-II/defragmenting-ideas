import FooterComp from '@/components/FooterComp';
import BodyComp from '@/components/BodyComp';
import postListSearchParams from '@/types/postListSearchParams';
import HeaderComp from '@/components/HeaderComp';

const Home = async(Params: any) => {
  const {params, searchParams: SearchParameters} = Params;
  // TO DO in the future:
  // 1. Make sure the URL is the only source of truth for processing search parameters.

  //Get search parameters
  const searchParams = {
    page: parseInt(SearchParameters.page) || 1,
    query: SearchParameters.query || "",
    tag: parseInt(SearchParameters.tag) || 0,
  } as postListSearchParams;

  //Validate search parameters
  //Prevent zero and negative page selection
  if(searchParams.page < 1)
    searchParams.page = 1;

  return (
    <div className="min-w-screen min-h-screen h-fit">
      <HeaderComp/>
      <BodyComp SearchParams={searchParams}/>
      <FooterComp/>
    </div>
  );
};

export default Home;