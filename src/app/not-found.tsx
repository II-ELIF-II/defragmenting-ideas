import HeaderBarComp from '@/components/HeaderComps/HeaderBarComp';
import BackgroundComp from '@/components/MiscComps/BackgroundComp';
import ErrorCardComp from '@/components/MiscComps/ErrorCardComp';

const NotFound = () => {
  return (
    <div className="flex w-screen min-h-screen overflow-x-hidden">
      <HeaderBarComp/>
      <div className="flex min-h-screen w-full">
        <ErrorCardComp error={'404 page not found'} errorMessage={'The page or content you requested may have been moved, removed, renamed, or is temporarily unavailable.'}/>
      </div>
      <BackgroundComp />
    </div>
  );
};

export default NotFound;