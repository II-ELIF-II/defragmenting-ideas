'use client';

const FooterHeaderComp = ({Text}: {Text: string}) => {
  return(
    <h3 className="text-md tracking-widest font-semibold uppercase"><span className="text-teal-400 tracking-normal">&#92; &gt; </span>{Text}</h3>
  )
}

export default FooterHeaderComp;