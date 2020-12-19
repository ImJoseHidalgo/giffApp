import React from 'react'
import ContentLoader from "react-content-loader"

const Loading = (props) => (
  <ContentLoader className='loading-container'
    speed={3}
    width={337}
    height={790}
    viewBox="0 0 337 790"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="163" height="122" /> 
    <rect x="174" y="0" rx="10" ry="10" width="163" height="125" /> 
    <rect x="0" y="131" rx="10" ry="10" width="163" height="158" /> 
    <rect x="174" y="135" rx="10" ry="10" width="163" height="144" /> 
    <rect x="0" y="297" rx="10" ry="10" width="163" height="184" /> 
    <rect x="174" y="443" rx="10" ry="10" width="163" height="144" /> 
    <rect x="174" y="598" rx="10" ry="10" width="163" height="174" /> 
    <rect x="0" y="490" rx="10" ry="10" width="163" height="122" /> 
    <rect x="0" y="620" rx="10" ry="10" width="163" height="150" /> 
    <rect x="174" y="289" rx="10" ry="10" width="163" height="144" />
  </ContentLoader>
)
export default Loading;
// function Loading() {
//   return (
//     <div className="loading-container">
//       <div className="lds-ellipsis">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   )
// }
// export default Loading;