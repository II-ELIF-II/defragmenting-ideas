import headerURLParams from "@/types/headerURLParams";
import Link from 'next/link';

const HeaderURLComp = (HeaderURL: headerURLParams) => {
  return(
    <Link href={HeaderURL.href} target={HeaderURL.target} className="flex flex-col group h-full justify-center">
      <p className="group-hover:text-teal-400 ease-in-out duration-500">{HeaderURL.label}</p>
      <div className="h-0.5 w-0 group-hover:w-full bg-teal-400 ease-in-out duration-500"/>
    </Link>
  );
};

export default HeaderURLComp;