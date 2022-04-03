import "../components/styles/stories.scss";
import Story from "./Story";
import HorizontalScroll from "react-scroll-horizontal";


export const Stories = () => {
  return (
    <div className="stories">
        <HorizontalScroll className='scroll' reverseScroll={true}>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </HorizontalScroll>
    </div>
  )
}

export default Stories;
