// import { API_ENDPOINT } from "../../util/api"
// import React from "../../util/react"
// import "./Avatar.css"
// 
// export default class Avatar extends React{
// 
//     private profileImage = ""
//     private width = "40px"
//     private height = "40px"
//     private boxShadow = "2px_2px_10px_var(--text)"
// 
//     constructor($target: HTMLElement, props:any, ID: string, profileImage: string, width?: string, height?: string, boxShadow?:string ) {
//         super($target, 'Avatar')
//         if (profileImage !== undefined) {
//             this.profileImage = profileImage
//         }
//         if (width && height) {
//             this.width = width
//             this.height = height
//         }
//         if (boxShadow) {
//             this.boxShadow = boxShadow
//         }
//         this.init()
//     }
// 
//     css() {
//         return `
//         #avatar-img-${this.ID} {
//             width: ${this.width};
//             height: ${this.height};
//             box-shadow: ${this.boxShadow};
//         }
//         #Avatar-${this.ID} {
//             width: ${this.width};
//             height: ${this.height};
//         }
//         `
//     }
// 
//     componentWillMount() {}
// 
//     render() {
//         return(`
//             <div id="Avatar-${this.ID}" class="border-div blob white" >
//                 <div class="box" >
//                     <img id="avatar-img-${this.ID}" src="${this.profileImage === ""? API_ENDPOINT +'/images/avatar.png' : this.profileImage }" class="avatar-img admin" />
//                 </div>
//             </div>
//         `)
//     }
// 
//     componentDidMount() {}
// }