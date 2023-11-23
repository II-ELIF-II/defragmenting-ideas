export default function HeaderURLItem(props: any) {
  return (<a href={props.href} target={props.target} className="group">
    <p className="group-hover:text-teal-400 ease-in-out duration-500">{props.label}</p>
    <div className="h-0.5 w-0 group-hover:w-full bg-teal-400 ease-in-out duration-500"></div>
  </a>)
}