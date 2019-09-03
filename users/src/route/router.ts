import Login from "../../src/page/Login";
import Home from "../../src/page/Home";
export default {
    routes:[
        {
            path:"/Home",
            component:Home,
            children:[{
                path:"/list/content",
                component:()=>null
            }]
        },{
            path:"/login",
            component:Login
        }
    ]
}